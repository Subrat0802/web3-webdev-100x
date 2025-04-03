import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { SignUp } from './pages/Signup'
import { SignIn } from './pages/Signin'
import { Dashboard } from './pages/Dashboard'
import HomePage from './pages/HomePage'

function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<HomePage />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
