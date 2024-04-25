import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/loginSignup/Login';
import './index.css';
import Signup from './components/loginSignup/Signup';
import Authentication from './pages/home/Authentication';
import Home from './pages/home/Home';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/authentication" element={<Authentication />} />
        <Route path="/*" element={<Authentication />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </Router>
  </React.StrictMode>

);