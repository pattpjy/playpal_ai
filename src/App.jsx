import { React, useState } from 'react';

import './App.css';
import { PromptForm } from './PromptForm';
import { User } from './model_user';

export const App = () => {
  const [greeting, setGreeting] = useState(true);

  const mock_user = {
    userName: 'Sally Salivan',
    userId: '006102102001',
    childName: 'Little Boo',
    childAge: 3,
    childInterest: 'Drawing, Running, Hide and Seek',
  };

  const current_user = User(mock_user);
  return (
    <>
      {greeting && (
        <p>
          Hello there {current_user.userName}! I can help you find some fun
          activities for {current_user.childName}. Just start typing...
        </p>
      )}
      <PromptForm />
    </>
  );
};

export default App;
