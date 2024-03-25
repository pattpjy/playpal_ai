import React, { useState } from 'react';
import { PromptForm } from './PromptForm.tsx';
import { DisplayChat } from './DisplayChat.tsx';
import { User } from '../../model/model_user.ts';
import { chatAPIResponse } from '../../model/chat.ts';

export const Chat: React.FC<{ user: User }> = ({ user }) => {
  const [queryText, setQueryText] = useState('');
  const [chatMSG, setChatMSG] = useState<chatAPIResponse>({
    text: '',
    activities_list: [],
  });

  const postChat = () => {
    return Promise.resolve({
      response: {
        text: "Based on your child's interest in astronomy, here are some recommended activities for her:\n\n1. **Activity Title: Solar Eclipses**\n   - **Description:** Show what you know about solar eclipses with this engaging science worksheet. Students will explore what happens during a solar eclipse and the conditions needed for it to occur. This activity is geared toward sixth, seventh, and eighth-grade learners.\n   - **Metadata:** Grades: Sixth Grade, Seventh Grade, Eighth Grade; Subject: Science, Earth & Space Science, Outer Space\n\n2. **Activity Title: Lunar Eclipses**\n   - **Description:** Explore why and how lunar eclipses occur with this earth science worksheet. Students will learn about the sun-Earth-moon system during a lunar eclipse, the phases of the moon, and more fascinating facts. This activity is suitable for sixth, seventh, and eighth-grade students.\n   - **Metadata:** Grades: Sixth Grade, Seventh Grade, Eighth Grade; Subject: Science, Earth & Space Science, Outer Space\n\n3. **Activity Title: Earth’s Rotation and Revolution**\n   - **Description:** Demonstrate your understanding of Earth's movement patterns with this earth and space science worksheet. Students will label a diagram depicting the Earth-sun system and connect Earth’s rotation and revolution to the passage of time. This activity is designed for middle-grade students.\n   - **Metadata:** Grades: Sixth Grade, Seventh Grade, Eighth Grade; Subject: Science, Earth & Space Science, Outer Space\n\n4. **Activity Title: Use a Model to Identify Earth’s Seasons**\n   - **Description:** Understand how Earth's tilt causes seasons with this educational worksheet. Students will label a diagram to show the different seasons and analyze the limitations of the model representing the Earth-sun system. This activity is ideal for students in sixth and seventh grade.\n   - **Metadata:** Grades: Sixth Grade, Seventh Grade; Subject: Science, Earth & Space Science, Outer Space\n\nThese activities will not only cater to your child's interest in astronomy but also provide valuable learning experiences related to outer space and the Earth-sun-moon system. Enjoy exploring the wonders of space with your little astronomer!",
        activities_list: [
          {
            title: 'A (Little) Interview With the New Year',
            Content:
              "Children will reflect on the past year, and share their hopes and predictions for the year to come, with this endearing interview with 2024. After answering 2024's questions, either on their own or with the help of an adult, children will draw a picture of themselves and the new year doing something fun together. Designed for grades preschool through first grade, this creative activity is a fun way to begin the new year, either at home or in the classroom!\n",
            Categories:
              "{'grade': ['Preschool', 'Kindergarten', 'First Grade'], 'subject': ['Reading & Writing', 'Reading', 'Holidays', 'New Year', 'Reading Comprehension Strategies', 'Text Evidence']}",
            url: '/worksheet/article/a-little-interview-with-the-new-year/',
            thumbnail:
              'https://cdn.education.com/worksheet-image/2466979/interview-year-2023-11-22.gif',
          },
          {
            title: 'Solar Eclipses',
            Content:
              "Show what you know about solar eclipses with this middle grades science worksheet! In this engaging two-page earth science worksheet, students will have the opportunity to explore what happens during a solar eclipse and what conditions are needed for a solar eclipse to occur. First, learners will view a diagram of a solar eclipse and identify the conditions within the Sun-Earth-Moon system that result in a solar eclipse. Then, using what they've learned and their critical thinking skills, students will consider why a solar eclipse does not happen every month and explain their reasoning.\nGeared toward sixth-, seventh-, and eighth-grade learners, this worksheet is a great way to supplement a science lesson about outer space and solar eclipses. Prior to completing this worksheet, you can have learners review the phases of the moon with the Earth-Sun-Moon System: Phases of the Moon worksheet! And for additional related content to help take students' learning even further, check out the Lunar Eclipses worksheet next!\n",
            Categories:
              "{'grade': ['Sixth Grade', 'Seventh Grade', 'Eighth Grade'], 'subject': ['Science', 'Earth & Space Science', 'Outer Space']}",
            url: '/worksheet/article/solar-eclipses/',
            thumbnail:
              'https://cdn.education.com/worksheet-image/3912581/solar-eclipses-2023-12-28.gif',
          },
          {
            title: 'Lunar Eclipses',
            Content:
              'Explore how, when, and why lunar eclipses occur with this two-page earth science worksheet! Using diagrams and critical thinking skills, students will answer questions to gain a better understanding of the sun-Earth-moon system during a lunar eclipse, the phase of the moon during a lunar eclipse, and why lunar eclipses are only possible at some times of year and impossible at others. Featuring helpful illustrations and interesting facts, this worksheet is a great way to encourage learners to dig deeper into the natural world around them.\nLooking for more middle school science worksheets related to outer space and the Earth-sun-moon system? Check out the Earth-Sun-Moon System: Phases of the Moon or Solar Eclipses worksheets next!\n',
            Categories:
              "{'grade': ['Sixth Grade', 'Seventh Grade', 'Eighth Grade'], 'subject': ['Science', 'Earth & Space Science', 'Outer Space']}",
            url: '/worksheet/article/lunar-eclipses/',
            thumbnail:
              'https://cdn.education.com/worksheet-image/3882328/lunar-eclipses-2023-11-29.gif',
          },
          {
            title: 'Earth’s Rotation and Revolution',
            Content:
              "Show what you know about the Earth-sun system with this earth and space science worksheet! Designed for middle grades, this one-page worksheet invites learners to demonstrate their understanding of planet Earth’s movement patterns. First, students will use a word bank to label a diagram that depicts the Earth-sun system. Students will be asked to correctly apply vocabulary terms such as Northern Hemisphere, Southern Hemisphere, equator, axis, rotation, revolution, North Pole, and South Pole. Then, in part 2, students will complete sentences to connect Earth’s rotation and revolution to the passage of time.\nExplore how Earth's seasons are affected by this system with the Use a Model to Identify Earth's Seasons worksheet. For a look at how the moon fits into the system, check out the Earth-Sun-Moon System: Phases of the Moon worksheet!\n",
            Categories:
              "{'grade': ['Sixth Grade', 'Seventh Grade', 'Eighth Grade'], 'subject': ['Science', 'Earth & Space Science', 'Outer Space']}",
            url: '/worksheet/article/earths-rotation-and-revolution/',
            thumbnail:
              'https://cdn.education.com/worksheet-image/3843989/earth-rotation-revolution-2023-09-25.gif',
          },
          {
            title: 'Use a Model to Identify Earth’s Seasons',
            Content:
              'Explore how Earth’s tilt relative to its orbit causes seasons in this earth and space science worksheet for middle grades! This one-page worksheet explains that Earth is tilted on its axis, so as Earth revolves around the sun, the intensity of sunlight hitting different parts of Earth changes. To demonstrate their understanding of how this affects seasons, students are asked to label a diagram with the correct season in each hemisphere based on the orientation of Earth’s axis relative to the sun. Then, learners will use critical thinking skills to identify the limitations of this model as a representation of the Earth-sun system.\nContinue exploring the Earth-sun system with the Earth’s Rotation and Revolution worksheet!\n',
            Categories:
              "{'grade': ['Sixth Grade', 'Seventh Grade'], 'subject': ['Science', 'Earth & Space Science', 'Outer Space']}",
            url: '/worksheet/article/use-a-model-to-identify-earths-seasons/',
            thumbnail:
              'https://cdn.education.com/worksheet-image/3844024/model-identify-earth-seasons-2023-09-25.gif',
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
      <PromptForm onSubmit={handleFormData} />
      {queryText && (
        <DisplayChat
          text={chatMSG?.text}
          activities_list={chatMSG?.activities_list}
          user={user}
        ></DisplayChat>
      )}
    </>
  );
};
