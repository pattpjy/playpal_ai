import { Button, TextField } from '@mui/material';
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
  };

  return (
    <>
      <form style={{ width: '100%' }} onSubmit={handleFormSubmit}>
        <TextField
          id='promptField'
          value={formData}
          onChange={handleInputChange}
          label='Start typing...'
          variant='outlined'
          sx={{ width: '64%' }}
        />
        <Button
          variant='contained'
          size='large'
          sx={{ ml: 2, p: 1.8 }}
          type='submit'
          onClick={handleFormSubmit}
        >
          Submit
        </Button>
      </form>
    </>
  );
};
