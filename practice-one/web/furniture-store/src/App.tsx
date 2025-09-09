import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { lazy } from 'react';
import './App.css';
import ScrollToTop from './components/ScrollToTop';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { API_STALE_TIME } from './constants/api';
const Main = lazy(() => import('./pages/main'));
const Home = lazy(() => import('./pages/home'));
const Products = lazy(() => import('./pages/products'));
const ProductDetail = lazy(() => import('./pages/productDetail'));

function App() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: API_STALE_TIME,
        refetchOnWindowFocus: false,
      },
    },
  });

  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Main />}>
            <Route index element={<Home />} />
            <Route path="products" element={<Products />} />
            <Route path="products/:id" element={<ProductDetail />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
