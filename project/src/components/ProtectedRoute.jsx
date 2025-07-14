import React, { useEffect, useRef } from 'react';
import { Navigate, useLocation } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';
  const location = useLocation();
  const alerted = useRef(false);

  useEffect(() => {
    if (!isAuthenticated && !alerted.current) {
      alert('Please Login First');
      alerted.current = true;
    }
  }, [isAuthenticated]);

  if (!isAuthenticated) {
    return <Navigate to="/login" replace state={{ from: location }} />;
  }

  return children;
};

export default ProtectedRoute;
