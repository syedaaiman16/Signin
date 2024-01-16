// Routes.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignIN from './components/Signin';
import ForgotPassword from './components/Forgot_pswd';

const AppRoutes = () => (
  <Router>
    <Routes>
      <Route path="/" element={<SignIN />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
    </Routes>
  </Router>
);

export default AppRoutes;
