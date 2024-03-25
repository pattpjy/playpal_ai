import React, { useState } from 'react';
import { User } from '../model/model_user';
import { Button, TextField } from '@mui/material';

const UserForm = (User: User) => {
  const [input, setInput] = useState<User>();

  const handleSubmit = (event) => {
    event.preventDefault();
    alert('User input is: ' + input);
  };

  return (
    <div style={{ margin: '20px' }}>
      <form onSubmit={handleSubmit}>
        <TextField
          required
          id='outlined-required'
          label='Required'
          defaultValue='Parent Name'
        />
        <TextField
          required
          id='outlined-required'
          label='Required'
          defaultValue='Child Name'
        />
        <TextField
          required
          id='outlined-required'
          label='Required'
          defaultValue='Child Age'
        />
        <TextField
          required
          id='outlined-required'
          label='Required'
          defaultValue='Child Interest'
        />
        <Button variant='contained' onClick={handleSubmit}>
          Submit
          <input type='submit' value='submit' style={{ display: 'none' }} />
        </Button>
      </form>
    </div>
  );
};

export default UserForm;
