import React from 'react';
import {BrowserRouter, Routes, Route } from "react-router-dom";
import Homes from './Pages/Homes/Homes';

function App() {
  return (

    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Homes />} />
    
    
    </Routes>
    </BrowserRouter>

  );
}

export default App;
