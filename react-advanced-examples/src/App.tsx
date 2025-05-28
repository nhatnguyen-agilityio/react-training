import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from './components/ThemeProvider'
import { AuthProvider } from './auth/AuthProvider'
import ProtectedRoute from './components/ProtectedRoute'
import Login from './pages/Login'
import Books from './pages/Book'
import './App.css'
import { lazy, Suspense } from 'react'
import ErrorBoundary from './components/ErrorBoundary'
import CreateBook from './pages/Book/CreateBook'
import UserForm from './components/UserForm'
import People from './components/People'
import Student from './components/Student'

const Home = lazy(() => import('./pages/Home'))

function App() {
  console.tron.log("Hello from React");

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
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
                <Route path="user" element={<UserForm />} />
                <Route path="people" element={<People />} />
                <Route path="student" element={<Student />} />
              </Routes>
            </Suspense>
          </BrowserRouter>
        </AuthProvider>
      </ErrorBoundary>
    </ThemeProvider>
  )
}

export default App
