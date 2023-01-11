
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './views/auth/Home';
import Login from './views/auth/Login';
import Singup from './views/auth/Singup';
import Activate from './views/auth/Activate';
import ResetPassword from './views/auth/ResetPassword';
import ResetPasswordConfirm from './views/auth/ResetPasswordConfirm';

function App() {
  return (
   <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/singup" element={<Singup />} />
      <Route path="/activate/:uid/:token" element={<Activate />} />
      <Route path="/reset-password" element={<ResetPassword />} />
      <Route path="/password/reset/:uid/:token" element={<ResetPasswordConfirm />} />     


    </Routes>
   </Router>
  );
}

export default App;
