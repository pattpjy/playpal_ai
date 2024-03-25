import React, { useState } from 'react';
import { PromptForm } from './PromptForm.tsx';
import { DisplayChat } from './DisplayChat.tsx';
import { User } from '../../model/model_user.ts';
import { chatAPIResponse } from '../../model/chat.ts';
import { Box, Typography } from '@mui/material';

export const Chat: React.FC<{ user: User }> = ({ user }) => {
  const [queryText, setQueryText] = useState('');
  const [chatMSG, setChatMSG] = useState<chatAPIResponse>({
    text: '',
    activities_list: [],
  });
  const [greeting, setGreeting] = useState(true);
  const postChat = () => {
    return Promise.resolve({
      response: {
        text: "For your 7-year-old who loves the ocean, here are some engaging activities she may enjoy:\n\n1. **Logic Puzzle #1: Outdoor Fun**: This worksheet introduces logic puzzles with an outdoor theme. It includes clues about four friends who love racing outside. Your child can use their logic and reasoning skills to figure out who rides the roller blades, bike, scooter, and skateboard.\n\n2. **Color the Cars: Number 7**: This car-themed math coloring worksheet is a fun way for your child to practice number identification. They can find and color all the number 7 cars among a group of 1-7 labeled cars.\n\nThese activities are not just fun but also provide educational value that can help develop your child's critical thinking and math skills.",
        activities_list: [
          {
            title:
              'Spring Creative Writing Prompt #3: Sifting Through the Sand',
            Content:
              'Invite your students to practice their creative storytelling with this fun, spring-themed writing prompt about a peculiar find at the beach following a storm! Using the prompt as an inspiring starting point, students are invited to write a creative story that includes interesting characters, descriptive language, and an engaging plot with a clear conflict and resolution. Ideal for a wide range of learners in grades four through eight, this writing prompt is a great way to allow learners to practice their creative writing and storytelling skills.\nThis worksheet can be used independently or completed alongside our other worksheets in this series: Spring Creative Writing Prompt #1: The Puzzling Picnic and Spring Creative Writing Prompt #2: Foul Ball Fiasco.\n',
            Categories:
              "{'grade': ['Fourth Grade', 'Fifth Grade', 'Sixth Grade', 'Seventh Grade', 'Eighth Grade'], 'subject': ['Reading & Writing', 'Writing', 'Seasonal', 'Fiction Writing', 'Spring', 'Creative Writing']}",
            url: '/worksheet/article/spring-creative-writing-prompt-3-sifting-through-the-sand/',
            thumbnail:
              'https://cdn.education.com/worksheet-image/3906203/spring-creative-writing-prompt-3-2023-12-13.gif',
          },
          {
            title: 'Color the Hearts: Number 7',
            Content:
              'Can you color in all the hearts with the number 7? Young learners will love identifying numbers with this heart-themed math coloring worksheet! Early learners are presented with 10 hearts labeled with numbers 1 through 7, and they are asked to color all of the hearts with the number 7. Ideal for your youngest learners in preschool and pre-kindergarten, this sweet and simple worksheet is an inviting way to help students build their number sense and grow their confidence recognizing numbers 1–10. \nThis engaging worksheet is the seventh in a series of 10 heart-themed number identification worksheets. Keep learning with Color the Hearts: Number 8 next, or check out the full set of Color the Hearts worksheets to download all 10!\n',
            Categories:
              "{'grade': ['Preschool'], 'subject': ['Math', 'Number Sense', 'Holidays', 'Numbers 0-10', \"Valentine's Day\", 'Identifying Numbers 0-10']}",
            url: '/worksheet/article/color-the-hearts-number-7/',
            thumbnail:
              'https://cdn.education.com/worksheet-image/3934311/color-hearts-number-7-2024-01-30.gif',
          },
          {
            title: 'Color the Cars: Number 7',
            Content:
              "Can you find all the number 7s? Give your young learner fun number identification practice with this car-themed math coloring worksheet! Early learners will look at 10 cars labeled with numbers 1 through 7 and color all of the cars with the number 7. Perfect for your youngest learners in preschool and pre-kindergarten, this simple and inviting worksheet is a great way to build students' number sense and grow their confidence recognizing numbers 1–10.\nThis worksheet is the seventh in a series of 10 car-themed number identification worksheets. Keep learning with Color the Cars: Number 8 next! Or check out the full set of our Color the Cars worksheets to download all 10!\n",
            Categories:
              "{'grade': ['Preschool'], 'subject': ['Math', 'Number Sense', 'Coloring', 'Numbers 0-10', 'Vehicles', 'Identifying Numbers 0-10']}",
            url: '/worksheet/article/color-the-cars-number-7/',
            thumbnail:
              'https://cdn.education.com/worksheet-image/3909706/color-cars-number-7-2023-12-19.gif',
          },
          {
            title: 'Logic Puzzle #1: Outdoor Fun',
            Content:
              "Introduce second- and third-grade learners to the exciting world of logic puzzles with this engaging worksheet! Meet Rita, Harry, Frank, and Zoe. These four friends love racing each other outside in the sunshine. Each friend brings a helmet and rides something different for ultimate outdoor fun. Learners will need to use the clues, the provided 4 x 4 grid, and their logic and reasoning skills to figure out who rides the roller blades, the bike, the scooter, and the skateboard.\n \nLogic puzzles like these are a great way to strengthen students' math reasoning and critical thinking skills. Ready for a bit more of a challenge? Try the Logic Puzzle #1: Harriet’s Hats worksheet next!\n",
            Categories:
              "{'grade': ['Second Grade', 'Third Grade'], 'subject': ['Math', 'Math Puzzles', 'Offline games', 'Puzzles & Sudoku']}",
            url: '/worksheet/article/logic-puzzle-1-outdoor-fun/',
            thumbnail:
              'https://cdn.education.com/worksheet-image/3905970/logic-puzzle-1-outdoor-fun-2023-12-13.gif',
          },
          {
            title: 'After-Reading Response Choice Board: Fiction Text',
            Content:
              'Differentiate learning with this fun after-reading response choice board! Invite your learner to choose from nine different and engaging ways to respond to literature, each with a primary focus on key reading comprehension skills such as summary, plot, close reading, and character analysis. Readers can choose to put together a playlist that represents a character, create a vision board or graphic novel, write an alternate ending to the story, and more!\nGeared toward middle-grade learners, this choice board is a great way to incorporate choice and student voice when analyzing fiction texts. This multi-use worksheet is perfect for a variety of contexts, including centers, no-prep sub-plans, close reading, teaching fiction reading strategies, fiction book reports, or fiction book clubs.\nCheck out our Reading Survey: All About My Reading Goal worksheet for more reading activities.\n',
            Categories:
              "{'grade': ['Sixth Grade', 'Seventh Grade', 'Eighth Grade'], 'subject': ['Reading & Writing', 'Reading', 'Writing', 'Fiction Writing', 'Nonfiction Writing', 'Reading Comprehension Strategies', 'Creative Writing', 'Response to Literature', 'Summarizing', 'Making Inferences', 'Sequencing Events', 'Making Connections in Reading', 'Analyzing Story Structure', 'Summarizing Fiction Texts', 'Sequencing in Fiction', 'Analyzing Character', 'Making Inferences in Fiction', 'Making Connections in Fiction', 'Analyzing Point of View']}",
            url: '/worksheet/article/after-reading-response-choice-board-fiction-text/',
            thumbnail:
              'https://cdn.education.com/worksheet-image/3885046/after-reading-response-choice-board-2023-11-14.gif',
          },
        ],
      },
    }).then((data) => {
      setChatMSG({
        text: data.response.text,
        activities_list: data.response.activities_list,
      });
      console.log('Response from Python API:', data);
    });
    // fetch('http://localhost:8000/chat/', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify({ text: formText }),
    // })
    //   .then((response) => response.json())
    //   .then((data) => {
    //     console.log('Response from Python API:', data);
    //   })
    //   .catch((error) => {
    //     console.error('Error fetching data:', error);
    //   });
  };
  const handleFormData = (data) => {
    setQueryText(data);
    postChat();
  };

  return (
    <>
      {greeting && (
        <p>
          Hello there {current_user.userName}! I can help you find some fun
          activities for {current_user.childName}. Just start typing...
        </p>
      )}
      <PromptForm onSubmit={handleFormData} />
      <Box sx={{ p: 5, boxShadow: 1 }}>
        <Box
          sx={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-end' }}
        >
          <Typography variant='h5'>{user.userName}: </Typography>
          <Typography variant='body1' sx={{ pl: 2 }}>
            {queryText
              ? `You asked: ${queryText}`
              : 'Type a question to get started!'}
          </Typography>
        </Box>

        {queryText && (
          <DisplayChat
            text={chatMSG?.text}
            activities_list={chatMSG?.activities_list}
            user={user}
          ></DisplayChat>
        )}
      </Box>
    </>
  );
};
