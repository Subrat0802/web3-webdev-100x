import { Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import Signin from './pages/Signin'
import Signup from './pages/Signup'
import Home from './pages/Home'
import Header from './components/Header'
import ReastaurantMenu from './pages/ReastaurantMenu'
import Cart from './pages/Cart'



function App() {

  return (
    <div className='dark:bg-[#0f0f0f]  dark:text-white min-h-screen'>
      <Header />
      <Routes>
      <Route path="/" element={<Navigate to="/home" replace />} />
        <Route path={'/signin'} element={<Signin />}/>
        <Route path='/signup' element={<Signup />}/>
        <Route path='/home' element={<Home />}/>
        <Route path='/restaurantmenu/:id' element={<ReastaurantMenu />}/>
        <Route path='/cart' element={<Cart />}/>
      </Routes>
    </div>
  )
}

export default App
