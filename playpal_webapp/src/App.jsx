import { React, useState } from 'react';
import './App.css';
import { Chat } from './features/Chat/Chat.tsx';
import NavBar from './AppBar/NavBar.tsx';
import { Route, Routes } from 'react-router-dom';
import UserForm from './features/User_form.tsx';

export const App = () => {
  const mock_user = {
    userName: 'Sulley Sullivan',
    userId: '006102102001',
    childName: 'Little Boo',
    childAge: 3,
    childInterest: 'Drawing, Running, Hide and Seek',
  };

  const current_user = mock_user;
  return (
    <>
      <NavBar />
      <Routes>
        <Route exact path='/' element={<Chat user={current_user} />} />
        <Route exact path='/user' element={<UserForm />} />
      </Routes>
    </>
  );
};

export default App;
