import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { AuthProvider } from './auth/AuthProvider'
import Countdown from './components/Countdown'
import Form from './components/Form'
import MarkdownEditor from './components/MarkdownEditor'
import Information from './components/Information'
import Team from './components/Team'
import Timer from './components/Timer'
import ProtectedRoute from './components/ProtectedRoute'
import './App.css'
import Login from './pages/Login'

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={
            <ProtectedRoute>
              <Countdown />
            </ProtectedRoute>
          } >
            <Route index element={<MarkdownEditor />} />
            <Route path="settings" element={<Information />} />
          </Route>
          <Route path="login" element= {<Login />} />
          <Route path="form" element={<Form />} />
          <Route element={<Countdown />}>
            <Route path="information" element={<Information />} />
            <Route path="markdown" element={<MarkdownEditor />} />
          </Route>
          <Route path="dashboard">
            <Route path="settings" element={<Information />} />
            <Route path="markdown" element={<MarkdownEditor />} />
          </Route>
          <Route path="teams">
            <Route path="settings/:teamId" element={<Team />} />
          </Route>
          <Route path="user">
            <Route path="settings/:userId?" element={<Information />} />
          </Route>
          <Route path="docs/*" element={<MarkdownEditor />} />
          <Route path="timer" element={<Timer />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  )
}

export default App
