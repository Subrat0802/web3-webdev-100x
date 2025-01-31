import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const accoutType = localStorage.getItem("accountType");
  const token = localStorage.getItem("coursify-token");
  const navigate = useNavigate();
  const logoutAccount = () => {
    localStorage.removeItem("coursify-token");
    localStorage.removeItem("accountType");
    navigate("/auth");
  };

  return (
    <div className="w-full flex justify-between px-6 py-4 bg-gray-900 items-center fixed text-white">
      <Link to="/home"><p className="text-4xl font-mono">Coursify</p></Link>
      {accoutType && token && (
        <div className="flex justify-between gap-7">
          <p>Courses</p>
          <p>About us</p>
          <p>Profile</p>
          <p onClick={logoutAccount}>Logout</p>
        </div>
      )}
    </div>
  );
};

export default Header;
