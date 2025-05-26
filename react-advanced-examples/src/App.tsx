import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { AuthProvider } from './auth/AuthProvider'
import ProtectedRoute from './components/ProtectedRoute'
import Login from './pages/Login'
import Books from './pages/Book'
import './App.css'
import { lazy, Suspense } from 'react'
import ErrorBoundary from './components/ErrorBoundary'
import CreateBook from './pages/Book/CreateBook'

const Home = lazy(() => import('./pages/Home'))

function App() {
  return (
    <ErrorBoundary>
      <AuthProvider>
        <BrowserRouter>
          <Suspense fallback={<div>Loading...</div>}>
            <Routes>
              <Route path="home" element={
                <ProtectedRoute>
                  <Home />
                </ProtectedRoute>
              } />
              <Route path="login" element={<Login />} />
              <Route path="books" element={
                <ProtectedRoute>
                  <Books />
                </ProtectedRoute>
              } />
              <Route path="books/create" element={
                <ProtectedRoute>
                  <CreateBook />
                </ProtectedRoute>
              } />
            </Routes>
          </Suspense>
        </BrowserRouter>
      </AuthProvider>
    </ErrorBoundary>
  )
}

export default App
