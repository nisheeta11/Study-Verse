import React, { useState } from 'react';
import './Login.css';
import Signup from './Signup'

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  const [isSignup, setIsSignup] = useState(false);

  const validate = () => {
    const newErrors = {};

    if (!email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Invalid email address";
    }

    if (!password) {
      newErrors.password = "Password is required";
    } else if (password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      console.log("Login Successful:", { email, password });
    }
  };

  return (
    <div className="login-container">
        <div className="login-box">
  {isSignup ? (
    <>
      {/* Show Signup Form */}
      <Signup onSwitchToLogin={() => setIsSignup(false)} />
    </>
  ) : (
    <>
      {/* Show Login Form */}
      <h2>Login to StudyVerse</h2>
      <form onSubmit={handleSubmit} noValidate>
        <div className="form-cont">
          <label>Email</label>
          <input
            type="email"
            value={email}
            placeholder="Enter your email"
            onChange={(e) => setEmail(e.target.value)}
          />
          {errors.email && <p className="error-text">{errors.email}</p>}
        </div>

        <div className="form-cont">
          <label>Password</label>
          <input
            type="password"
            value={password}
            placeholder="Enter your password"
            onChange={(e) => setPassword(e.target.value)}
          />
          {errors.password && <p className="error-text">{errors.password}</p>}
        </div>

        <button type="submit">Login</button>

        <p className="signup-text">
          Don’t have an account?{' '}
          <span
            onClick={() => setIsSignup(true)}
            style={{ color: '#00bfff', cursor: 'pointer' }}
          >
            Sign up
          </span>
        </p>
      </form>
    </>
  )}
</div>

      </div>
   
  );
};

export default LoginPage;
