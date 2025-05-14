import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Countdown from './components/Countdown'
import Form from './components/Form'
import MarkdownEditor from './components/MarkdownEditor'
import Information from './components/Information'
import Team from './components/Team'
import Timer from './components/Timer'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Countdown />} >
          <Route index element={<MarkdownEditor />} />
          <Route path="settings" element={<Information />} />
        </Route>
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
  )
}

export default App
