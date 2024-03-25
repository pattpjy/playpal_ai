import { React, useState } from 'react';

import './App.css';
import { Chat } from './features/Chat/Chat.tsx';
import { AppBar, Toolbar, Button } from '@mui/material';

export const App = () => {
  const [greeting, setGreeting] = useState(true);

  const mock_user = {
    userName: 'Sally Salivan',
    userId: '006102102001',
    childName: 'Little Boo',
    childAge: 3,
    childInterest: 'Drawing, Running, Hide and Seek',
  };

  const current_user = mock_user;
  return (
    <>
      <AppBar position='static'>
        <Toolbar>
          <Button color='inherit'>Account Info</Button>
          <Button color='inherit'>Collection</Button>
        </Toolbar>
      </AppBar>
      {greeting && (
        <p>
          Hello there {current_user.userName}! I can help you find some fun
          activities for {current_user.childName}. Just start typing...
        </p>
      )}
      <Chat user={mock_user} />
    </>
  );
};

export default App;
