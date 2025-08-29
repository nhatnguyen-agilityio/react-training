import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { lazy, useState } from 'react';
import './App.css';
const Home = lazy(() => import('./pages/home'));

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
