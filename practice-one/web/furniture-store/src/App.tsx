import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { lazy } from 'react';
import './App.css';
const Main = lazy(() => import('./pages/main'));
const Home = lazy(() => import('./pages/home'));
const Products = lazy(() => import('./pages/products'));
const ProductDetail = lazy(() => import('./pages/productDetail'));

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />}>
          <Route index element={<Home />} />
          <Route path="products" element={<Products />} />
          <Route path="products/:id" element={<ProductDetail />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
