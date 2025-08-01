import Header from "./components/common/Header"
import {Route, Routes, useLocation} from "react-router-dom"
import HomePage from "./components/frontpage/HomePage"
import Profile from "./components/userPage/Profile"
import Signup from "./components/auth/SIgnup"
import VerifyEmail from "./components/auth/VerifyEmail"

function App() {

  const location = useLocation();

  const noHeaderRoutes = ["/signup", "/signin"];


  return (
    <div className="">
      {!noHeaderRoutes.includes(location.pathname) && <Header />}
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/signup" element={<Signup />}/>
        <Route path="/verify-email" element={<VerifyEmail />}/>
        <Route path="/profile" element={<Profile />}/>
      </Routes>
    </div>
  )
}

export default App
