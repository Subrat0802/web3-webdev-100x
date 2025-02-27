import "./App.css";
import { BrowserRouter, Link, NavLink, Outlet, Route, Routes } from "react-router-dom";
import Signup from "./Signup";
import Clock from "./Clock";

function App() {
  return (
    <>
      <BrowserRouter>
        <div>
          <Routes>
            <Route path="/" element={<LayOut />}>
              <Route path="/online11program" element={<Class11Program />} />
              <Route path="/online12program" element={<Class12Program />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/" element={<Landing />} />
              <Route path="/clock" element={<Clock />} />
            </Route>
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

const LayOut = () => {
  return (
    <>
      <Header />
      <br />
      <br />
      <Outlet />
      <p>Footer</p>
    </>
  );
};

const Header = () => {
  return (
    <>
      <NavLink to={"/online11program"}>class 11 program</NavLink>
      <br />
      <NavLink to={"/online12program"}>class 12 program</NavLink>
      <br />
      <NavLink to={"/"}>Landing</NavLink>
      <br />
      <NavLink to={"/signup"}>Signup</NavLink>
      <br />
      <NavLink to={"/clock"}>clock</NavLink>
    </>
  );
};

const Landing = () => {
  return <>Welcome to allen</>;
};

const Class11Program = () => {
  return <div>Neet program for class 11th</div>;
};

const Class12Program = () => {
  return <div>Neet program for class 12th</div>;
};

export default App;
