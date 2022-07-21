import React from 'react';
import {BrowserRouter, Route, Routes } from "react-router-dom";
// import NotFound from "./routes/NotFound";
import Home from './pages/Home';

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
          {/* <Route component={NotFound} /> */}
      </Routes>
    </BrowserRouter>
  )
}

export default App;
