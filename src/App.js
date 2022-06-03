import React from 'react';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './Home/components/home.js';

import GetStarted from './GetStarted/components/getStarted';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/getStarted" element={<GetStarted />} />
      </Routes>
    </Router>
  );
};

export default App;
