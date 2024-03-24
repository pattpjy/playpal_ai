import React, { useState } from 'react';

export const PromptForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState('');

  const handleInputChange = (e) => {
    e.preventDefault();
    setFormData(e.target.value);
  };
  const handleFormSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    setFormData('');
  };

  return (
    <>
      <form onSubmit={handleFormSubmit}>
        <label htmlFor='promptField'>Your assistant:</label>
        <input
          type='text'
          id='promptField'
          value={formData}
          onChange={handleInputChange}
          placeholder='Start typing...'
        />
        <input type='submit' />
      </form>
    </>
  );
};
