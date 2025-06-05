import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { ThemeProvider } from './components/ThemeProvider'
import { AuthProvider } from './auth/AuthProvider'
import ProtectedRoute from './components/ProtectedRoute'
import './App.css'
import { lazy, Suspense } from 'react'
import ErrorBoundary from './components/ErrorBoundary'

const Login = lazy(() => import('./pages/Login'))
const Books = lazy(() => import('./pages/Book'))
const UserForm = lazy(() => import('./pages/Book'))
const CreateBook = lazy(() => import('./components/UserForm'))
const People = lazy(() => import('./components/People'))
const Student = lazy(() => import('./components/Student'))
const SignUp = lazy(() => import('./pages/SignUp'))
const Dashboard = lazy(() => import('./pages/Dashboard'))
const TaskDetail = lazy(() => import('./pages/TaskDetail'))
const MyTask = lazy(() => import('./pages/MyTask'))
const DashboardHome = lazy(() => import('./components/DashboardHome'))

function App() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <ErrorBoundary>
        <AuthProvider>
          <BrowserRouter>
            <Suspense fallback={<div>Loading...</div>}>
              <Routes>
                <Route index path="/" element={<Navigate to="/dashboard" replace />} />
                <Route path="dashboard" element={
                  <ProtectedRoute>
                    <Dashboard />
                  </ProtectedRoute>
                }>
                  <Route index element={<DashboardHome />} />
                  <Route path="tasks/:taskId" element={
                      <TaskDetail />
                  } />
                  <Route path="tasks" element={<MyTask />} />
                </Route>
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
                <Route path="sign-up" element={<SignUp />} />
              </Routes>
            </Suspense>
          </BrowserRouter>
        </AuthProvider>
      </ErrorBoundary>
    </ThemeProvider>
  )
}

export default App
