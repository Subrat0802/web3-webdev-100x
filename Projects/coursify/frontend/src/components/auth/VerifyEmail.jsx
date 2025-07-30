import React, { useEffect, useState } from "react";
import OTPInput from "react-otp-input";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { sendOtp, signup } from "../../services/operations/authApi";


const VerifyEmail = () => {
  const [otp, setOtp] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { signupData, loading } = useSelector((state) => state.auth);
  console.log("signupData", signupData)
  const {accountType, firstName, lastName, email, password, confirmPassword} = signupData;

  useEffect(() => {
    if(!signupData) {
        navigate("/signup");
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handelOnSubmit = (e) => {
    e.preventDefault();
    
    dispatch(signup(accountType, firstName, lastName, email, password, confirmPassword, otp, navigate))
  };

  return (
    <div className="text-white">
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div>
          <h1>Verify Email</h1>
          <p>
            A Verification code has been sent to you. Eneter the code below.
          </p>

          <form onSubmit={handelOnSubmit}>
            <OTPInput
              value={otp}
              onChange={setOtp}
              numInputs={6}
              renderInput={(props) => <input {...props} />} placeholder="-"
              className="w-full p-3 bg-richblack-600 text-white"
            />
            <button type="submit">Verify Email</button>
          </form>

          <div>
            <Link to="/login">
              <p>Back to login</p> 
            </Link>
            <button onClick={() => dispatch(sendOtp(email, navigate))}>Resend it</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default VerifyEmail;
