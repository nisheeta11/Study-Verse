import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import '../components/Login.css';

const Signup = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSignupSubmit = async (data) => {
    setIsSubmitting(true);
    try {
      const res = await fetch('http://localhost:5000/api/auth/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      const result = await res.json();

      if (res.ok) {
        alert('Signup successful! You can now login.');
        window.location.href = '/login'; 
      } else {
        alert(result.message || 'Signup failed');
      }
    } catch (error) {
      alert('Network error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Sign Up for StudyVerse</h2>
        <form onSubmit={handleSubmit(onSignupSubmit)} noValidate>
          <div className="form-cont">
            <label>Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              {...register('name', { required: 'Name is required' })}
              disabled={isSubmitting}
            />
            {errors.name && <p className="error-text">{errors.name.message}</p>}
          </div>

          <div className="form-cont">
            <label>Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              {...register('email', {
                required: 'Email is required',
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: 'Invalid email address',
                },
              })}
              disabled={isSubmitting}
            />
            {errors.email && <p className="error-text">{errors.email.message}</p>}
          </div>

          <div className="form-cont">
            <label>Password</label>
            <input
              type="password"
              placeholder="Create a password"
              {...register('password', {
                required: 'Password is required',
                minLength: {
                  value: 6,
                  message: 'Password must be at least 6 characters',
                },
              })}
              disabled={isSubmitting}
            />
            {errors.password && <p className="error-text">{errors.password.message}</p>}
          </div>

          <button type="submit" disabled={isSubmitting}>
            {isSubmitting ? 'Signing Up...' : 'Sign Up'}
          </button>
        </form>

        <p className="signup-text">
          Already have an account?{' '}
          <Link to="/login" className="link-text">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;

