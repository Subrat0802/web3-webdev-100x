import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getPasswordResetToken } from '../services/operations/authAPI';

const ForgotPassword = () => {
    const [emailSent, setEmailSent] = useState(false);
    const [email, setEmail] = useState("");
    const { loading } = useSelector((state) => state.auth);
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(getPasswordResetToken(email, setEmailSent))
    };

    return (
        <div className='text-white '>
            {loading ? (
                <div>Loading...</div>
            ) : (
                <div>
                    <h2>
                        {!emailSent ? "Reset your password" : "Check your email"}
                    </h2>
                    <p>
                        {!emailSent
                            ? "Have no fear. We’ll email you instructions to reset your password. If you don't have access to your email we can try account recovery."
                            : `We have sent the reset email to ${email}`}
                    </p>

                    <form onSubmit={handleSubmit}>
                        {!emailSent && (
                            <label>
                                <p>Email Address*</p>
                                <input className='text-black'
                                    required
                                    type='email'
                                    name="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="Enter your email address"
                                />
                            </label>
                        )}
                        <button type="submit">
                            {!emailSent ? "Reset Password" : "Resend Email"}
                        </button>
                    </form>

                    <div>
                        <Link to="/login">
                            <p>Back to login</p>
                        </Link>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ForgotPassword;
