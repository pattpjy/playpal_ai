import pandas as pd
import singlestoredb as db
from openai import OpenAI
import os
from fastapi import FastAPI
from pydantic import BaseModel
# from starlette.middleware.cors import CORSMiddleware
from fastapi.middleware.cors import CORSMiddleware
from dotenv import load_dotenv

load_dotenv(dotenv_path=".env")

# Create vector and connect to singlestore
# Initialize OpenAI API with your API key

client = OpenAI()

# Load Dataset /Convert the dataset to a pandas dataframe
df = pd.read_csv('activities.csv', delimiter=",")
df['categories'] = df['categories'].str.replace('brand', 'grade')

# print(df.head())

# Function to generate embeddings using OpenAI's API
def get_embedding(text, model="text-embedding-3-small"):
    text = text.replace("\n", " ")
    print("get_embedding is working")
    return client.embeddings.create(input=[text], model=model).data[0].embedding


db_host = os.environ.get('DB_HOST')
db_port = os.environ.get('DB_PORT')
db_user = os.environ.get('DB_USER')
db_password = os.environ.get('DB_PASSWORD')
db_name = os.environ.get('DB_DATABASE')


def connector():
    return db.connect(host=db_host, port=db_port, user=db_user, password=db_password, database=db_name)


def read_vectors(vector):
    output = []
    # try:
    mydb = connector()
    mycursor = mydb.cursor()
    # table name is activities_vector
    sql = ("SELECT title, activity_contents, categories, url, thumbnail,"
            "dot_product(json_array_pack(%s), vector) as score,"
            " JSON_ARRAY_UNPACK(vector) as vector FROM activities_vector order by score desc limit 5")
    mycursor.execute(sql, (str(vector)))
    result = mycursor.fetchall()
    print('result', result)
    for (title, activity_contents, categories, url, thumbnail, score, vector) in result:
        output.append({
            'Activity Title': title,
            'Contents': activity_contents,
            'Categories': categories,
            'Activity_url': url,
            'Thumbnail_url': thumbnail,
            # 'vector': vector,
            # 'score': score
        })
    mydb.close()
    # except Exception as e:
    #     print("ERROR:", e)
    return output


def insert_vector(title, activity_contents, categories, url, thumbnail, vector):
    id = 0
    try:
        mydb = connector()
        my_cursor = mydb.cursor()
        sql = ('INSERT INTO activities_vector (title, activity_contents, categories, url, thumbnail, vector) '
               'values (%s, %s, %s, %s, %s, JSON_ARRAY_PACK(%s))')
        my_cursor.executemany(sql, [(title, activity_contents, categories, url, thumbnail, str(vector))])
        id = my_cursor.lastrowid
        mydb.commit()
    except Exception as e:
        print(e)
        pass
    try:
        mydb.close()
    except :
        pass
    return id


def create_embeddings(data):
    embeddings = []
    for _, row in data.iterrows():
        combined_text = f'{row['activity_contents']} {row['categories']}'
        embedding = get_embedding(combined_text)
        insert_vector(row['title'], row['activity_contents'], row['categories'], row['url'], row['thumbnail'], embedding)
        embeddings.append(embedding)
    return embeddings


def read_and_store_to_db(data):
    create_embeddings(data)


def search_vector_from_db(text):
    vector = get_embedding(text)
    return read_vectors(vector)


def handle_user_query(user_query):
    get_knowledge = search_vector_from_db(user_query)
    search_result = ''
    str_data = []

    for result in get_knowledge:
        str_data.append({
            "title": result.get('Activity Title', 'N/A'),
            "Content": result.get('Contents', 'N/A'),
            "Categories": result.get('Categories', 'N/A'),
            "url": result.get('Activity_url', 'N/A'),
            "thumbnail": result.get('Thumbnail_url', 'N/A')
        })
        search_result += (f"Activity Title{result.get('Activity Title', 'N/A')}, "
                          f"Description{result.get('Contents', 'N/A')}, "
                          f"Metadata{result.get('Categories', 'N/A')}\n")

    completion = client.chat.completions.create(
        model="gpt-3.5-turbo",
        messages=[
            {"role": "system", "content": "Please summarize why the activities are good with the user query.  "
                                          "For each of the activities, summarize a brief description with "
                                          "no more than 1 sentence.  Provide your response as an object with "
                                          "the following structure json structure {summary:<your general summary>,"
                                          "title:<title>,description:<your summary of a single activity>}."
                                          "Please replace any hashtag in activity title with 'No.' "
             },
            {"role": "user", "content": "Answer this user query: " + user_query + " with the following context: "
                                        + search_result}
        ]
    )
    return {"text": completion.choices[0].message.content, 'activities_list': str_data}


# read_and_store_to_db(df)

# query = "My 7 year olds likes to draw, what are some good activities for her"
# response, source_information = handle_user_query(query)
# print(f"Response: {response}")
# print(f"Source Information: \n{source_information}")


# Define your API routes
app = FastAPI()

# origins = [
#     'http://localhost:5173',
#     'http://localhost'
# ]
origins = [
    '*'
]
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allow_headers=["*"],
)


class YourRequestModel(BaseModel):
    text: str


# Define your API routes
@app.get("/")
async def main():
    return {"message": "Hello World"}
# get activity by name
# post fav activities to fav table


@app.post("/chat/")
def submit_chat(request_data: YourRequestModel):
    print("request data", request_data)
    try:
        user_query = request_data.text
        response = handle_user_query(user_query)
        print(response)
        return {"response": response}
    except Exception as e:
        print('Problem with the request', e)
        return {"message": e}

if __name__ == "__main__":
    import uvicorn

    uvicorn.run(app, host="0.0.0.0", port=8000)
