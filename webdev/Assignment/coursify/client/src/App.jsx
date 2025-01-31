import { useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Authentication from './pages/Authentication'
import Home from './pages/Home'
import Header from './components/Header'
import CreateCourse from './pages/CreateCourse'
import ExploreCourse from './pages/ExploreCourse'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <BrowserRouter>
      <Header />
        <Routes>
          <Route path='/auth' element={<Authentication />}/>
          <Route path='/home' element={<Home />}/>
          <Route path='/createcourse' element={<CreateCourse />}/>
          <Route path='/explorecourse' element={<ExploreCourse />}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
