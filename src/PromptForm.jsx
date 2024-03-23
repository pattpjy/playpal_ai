import { useState } from 'react';

export const PromptForm = () => {
  const [formData, setFormData] = useState('');
  const [chatMSG, setChatMSG] = useState('');
  const postChat = (formText) => {
    return Promise.resolve({
      response: [
        "Here are some activity recommendations for your 7-year-old who likes to draw:\n\n1. **Activity Title: Color the Hearts: Number 7**\n   - Description: Engage your child in coloring hearts while learning about the number 7.\n  \n2. **Activity Title: Color the Cars: Number 7**\n   - Description: Let your child have fun coloring cars while practicing number 7 recognition.\n\n3. **Activity Title: Color Two-Dimensional and Three-Dimensional Shapes #2**\n   - Description: Encourage your child to explore colors and shapes by coloring different two-dimensional and three-dimensional shapes.\n  \n4. **Activity Title: Vocabulary Toolkit: Visual Vocabulary**\n   - Description: Foster your child's vocabulary development through visual learning activities that involve drawing and coloring.\n  \nThese activities will not only allow your child to express her creativity through drawing and coloring but also help her learn new concepts in a fun and engaging way.",
        'Activity TitleA (Little) Interview With the New Year, DescriptionN/A, MetadataN/A\nActivity TitleColor the Hearts: Number 7, DescriptionN/A, MetadataN/A\nActivity TitleColor Two-Dimensional and Three-Dimensional Shapes #2, DescriptionN/A, MetadataN/A\nActivity TitleVocabulary Toolkit: Visual Vocabulary, DescriptionN/A, MetadataN/A\nActivity TitleColor the Cars: Number 7, DescriptionN/A, MetadataN/A\n',
      ],
    }).then((data) => {
      setChatMSG(data);
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
  const handleInputChange = (e) => {
    e.preventDefault();
    setFormData(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    postChat(formData);
    console.log('Submitted', formData);
  };

  return (
    <>
      <form onSubmit={(e) => handleSubmit(e)}>
        <label htmlFor='promptField'>Your assistant:</label>
        <input
          type='text'
          id='promptField'
          value={formData}
          onChange={(e) => handleInputChange(e)}
          placeholder='Start typing...'
        />
        <input type='submit' />
      </form>
      <div>{chatMSG !== '' && <p>{chatMSG.response[0]}</p>}</div>
    </>
  );
};
