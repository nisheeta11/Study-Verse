import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';

import { CartProvider } from './Context/CartContext';
import { AuthProvider } from './Context/AuthContext';
import { CourseProvider } from './Context/CourseContext';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <CourseProvider>
        <CartProvider>
          <App />
          <ToastContainer />
        </CartProvider>
      </CourseProvider>
    </AuthProvider>
  </React.StrictMode>
);
