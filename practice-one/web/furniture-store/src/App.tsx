import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { lazy } from 'react';
import './App.css';
const Main = lazy(() => import('./pages/main'));
const Home = lazy(() => import('./pages/home'));

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />}>
          <Route index element={<Home />} />
          <Route path="products" element={<h1>Products</h1>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
