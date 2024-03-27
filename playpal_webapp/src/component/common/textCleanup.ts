// const response = {
//   text: '{\n  "summary": "The activities provided are focused on preschool and kindergarten students and aim to enhance their number sense and recognition skills.",\n  "1": {\n    "title": "ActivityA (Little) Interview With the New Year",\n    "description": "Children reflect on the past year and share hopes and predictions for the new year through an interview with 2024."\n  },\n  "2": {\n    "title": "ActivityColor the Hearts: Number 4",\n    "description": "Young learners identify and color hearts with the number 4 in a math coloring worksheet to strengthen number recognition skills."\n  },\n  "3": {\n    "title": "ActivityCount Forward by Fives Maze: Two- and Three-Digit Numbers No. 3",\n    "description": "Kids help a whale navigate through a maze by skip-counting forward by fives with two- and three-digit numbers to practice number skills."\n  },\n  "4": {\n    "title": "ActivityColor the Cars: Number 4",\n    "description": "Through a car-themed math coloring worksheet, children find and color cars with the number 4 to improve their number identification abilities."\n  },\n  "5": {\n    "title": "ActivityColor the Hearts: Number 3",\n    "description": "Children identify and color hearts with the number 3 in a heart-themed math coloring worksheet to enhance their number recognition skills."\n  }\n}',
// };

interface Response {
  text: string;
}

export const textCleanup = (response: Response) => {
  // Remove all newline characters
  const cleanedText = response.text.replace(/\\n/g, '');

  // Parse the text into an object
  const parsedObject = JSON.parse(cleanedText);

  return parsedObject;
};
