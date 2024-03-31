from openai import OpenAI
import os
import singlestoredb as db
class Activity:
    def __init__(self):
        self.llm = OpenAI()
        db_host = os.environ.get('HOST')
        db_port = os.environ.get('PORT')
        db_user = os.environ.get('USER')
        db_password = os.environ.get('PASSWORD')
        db_name = os.environ.get('DATABASE')
        self.vector_db =  db.connect(db_host, db_port, db_user, db_password, db_name).connector()

    
    def get_embedding(self,text_query,model="text-embedding-3-small"):
        text_query = text_query.replace("\n", " ")
        print("get_embedding is working")
        return self.llm.embeddings.create(input=[text_query], model=model).data[0].embedding



