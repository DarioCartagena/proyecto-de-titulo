
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App';
import Login from './Login';

ReactDOM.render(
  <Router>
    <Routes>
      <Route path="/" element={<Login />} /> 
      <Route path="/app" element={<App />} /> 
    </Routes>
  </Router>,
  document.getElementById('root')
);

