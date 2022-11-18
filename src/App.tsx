import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";


import './assets/css/app.scss';

import Banner from './pages/Banner';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Banner/>}></Route>      
      </Routes>
    </BrowserRouter>
  );
}

export default App;
