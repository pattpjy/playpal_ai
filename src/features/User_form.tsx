import React, { useState } from 'react';
import { User } from '../model/model_user';

const UserForm = (User: User) => {
  const [input, setInput] = useState<User>();

  const handleSubmit = (event) => {
    event.preventDefault();
    alert('User input is: ' + input);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          User Input:
          <input type='text' placeholder='Enter your name' name='userName' />
          <input
            type='text'
            placeholder="Enter your child's name"
            name='childName'
          />
          <input
            type='text'
            placeholder="Enter your child's age"
            name='childAge'
          />
          <input
            type='text'
            placeholder="Enter your child's age"
            name='childInterest'
          />
        </label>
        <input type='submit' value='Submit' />
      </form>
    </>
  );
};

export default UserForm;
