import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { CartProvider } from './Context/CartContext';
import { CourseProvider } from './Context/CourseContext'; // import CourseProvider
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CourseProvider> {/* Wrap CourseProvider at top */}
      <CartProvider> {/* CartProvider inside CourseProvider */}
        <App />
        <ToastContainer />
      </CartProvider>
    </CourseProvider>
  </React.StrictMode>
);
