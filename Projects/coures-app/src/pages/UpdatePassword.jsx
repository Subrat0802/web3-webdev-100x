import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { resetPassword } from "../services/operations/authAPI";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

const UpdatePassword = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [showConPassword, setShowConPassword] = useState(false);
  const { loading } = useSelector((state) => state.auth);
  const [formData, setFormData] = useState({
    password: "",
    confirmPasword: "",
  });

  const handleOnChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    const token = location.pathname.split('/').at(-1);
    dispatch(resetPassword(formData.password, formData.confirmPasword, token, navigate))
  };

  return (
    <div className="text-white">
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div>
          <h2>Choose new Password</h2>
          <p>Almost done. Eneter your new password and you're all set.</p>
          <form onSubmit={handleOnSubmit}>
            <label>
              <p>New Password</p>
              <input className="text-black"
                required
                type={showPassword ? "text" : "password"}
                name="password"
                value={formData.password}
                onChange={handleOnChange}
              />
              <span onClick={() => setShowPassword((prev) => !prev)}>
                {
                    showPassword ? <AiFillEyeInvisible /> : <AiFillEye />
                }
              </span>
            </label>
            <label>
              <p>Confirm Password*</p>
              <input className="text-black"
                required
                type={showConPassword ? "text" : "password"}
                name="confirmPasword"
                value={formData.confirmPasword}
                onChange={handleOnChange}
              />
              <span onClick={() => setShowConPassword((prev) => !prev)}>
                {
                    showConPassword ? <AiFillEyeInvisible /> : <AiFillEye />
                }
              </span>
            </label>

            <button type="submit">Reset Pasword</button>
            <div>
                <Link to={"/login"}>back to login</Link>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default UpdatePassword;
