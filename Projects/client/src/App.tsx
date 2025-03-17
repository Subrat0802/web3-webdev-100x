import { Route, Routes } from 'react-router-dom'
import './App.css'
import Signin from './pages/Signin'
import Signup from './pages/Signup'
import Home from './pages/Home'
import Header from './components/Header'


function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path={'/signin'} element={<Signin />}/>
        <Route path='/signup' element={<Signup />}/>
        <Route path='/home' element={<Home />}/>
      </Routes>
    </>
  )
}

export default App
