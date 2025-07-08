import React from 'react';

const Signup = ({ onSwitchToLogin }) => {
  return (
    <div>
      <h2>Sign Up for StudyVerse</h2>
      <form>
        <div className="form-cont">
          <label>Name</label>
          <input type="text" placeholder="Enter your name" />
        </div>
        <div className="form-cont">
          <label>Email</label>
          <input type="email" placeholder="Enter your email" />
        </div>
        <div className="form-cont">
          <label>Password</label>
          <input type="password" placeholder="Create a password" />
        </div>
        <button type="submit">Sign Up</button>
      </form>

      <p className="signup-text">
        Already have an account?{' '}
        <span
          onClick={onSwitchToLogin}
          style={{ color: '#00bfff', cursor: 'pointer' }}
        >
          Login
        </span>
      </p>
    </div>
  );
};

export default Signup;
