import { React, useState } from 'react';
import './App.css';
import { Chat } from './features/Chat/Chat.tsx';
import NavBar from './AppBar/NavBar.tsx';
import { Route, Routes } from 'react-router-dom';
import UserForm from './features/User_form.tsx';

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
      <NavBar />
      {greeting && (
        <p>
          Hello there {current_user.userName}! I can help you find some fun
          activities for {current_user.childName}. Just start typing...
        </p>
      )}
      <Routes>
        <Route exact path='/' element={<Chat user={current_user} />} />
        <Route exact path='/user' element={<UserForm />} />
      </Routes>
    </>
  );
};

export default App;
