import React, { useContext, useState } from 'react';
import { CartContext } from '../Context/CartContext';
import { AuthContext } from '../Context/AuthContext';
import CourseContext from '../Context/CourseContext';

import './Paymentpage.css';
import esewa from '../assets/esewa.jpg';
import khalti from '../assets/Khalti.jpg';
import visa from '../assets/visa.jpg';
import mastercard from '../assets/mastercard.jpg';
import { useNavigate, useLocation } from 'react-router-dom';

const Paymentpage = () => {
  const { totalPrice } = useContext(CartContext);
  const { user } = useContext(AuthContext);
  const { courses } = useContext(CourseContext);
  const location = useLocation();
  const navigate = useNavigate();

  const buyNowCourse = location.state?.course;
  const buyNowPrice = location.state?.price;
  const finalPrice = buyNowPrice ? parseFloat(buyNowPrice) : totalPrice;

  const [selectedMethod, setSelectedMethod] = useState('');

  const paymentMethods = [
    { name: 'eSewa', image: esewa },
    { name: 'Khalti', image: khalti },
    { name: 'Visa', image: visa },
    { name: 'MasterCard', image: mastercard },
  ];

  const handlePayment = async (e) => {
    e.preventDefault();

    if (!selectedMethod) {
      alert('Please select a payment method.');
      return;
    }

    if (!user || !user._id || !user.email) {
      alert('User not logged in');
      return;
    }

    try {
      const res = await fetch('http://localhost:5000/api/payment/checkout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          price: Math.round(finalPrice),
          method: selectedMethod,
        }),
      });

      const data = await res.json();

      if (data.url) {
        // Simulate only storing basic data for success message
        localStorage.setItem('userId', user._id);
        localStorage.setItem('email', user.email);
        localStorage.setItem('amount', finalPrice.toString());
        localStorage.setItem('method', selectedMethod);
        localStorage.setItem('paymentIntentId', 'demo_payment_' + Date.now());

        window.location.href = data.url;
      } else {
        alert('Something went wrong with payment redirection.');
      }
    } catch (err) {
      console.error('Payment error:', err);
      alert('Payment failed. Try again later.');
    }
  };

  const handleCancel = () => {
    navigate('/AddToCart');
  };

  return (
    <div className="payment-page">
      <h2>Choose Payment Method</h2>
      <form className="payment-form" onSubmit={handlePayment}>
        <div className="payment-methods">
          {paymentMethods.map(({ name, image }) => (
            <div
              key={name}
              className={`method-box ${selectedMethod === name ? 'selected' : ''}`}
              onClick={() => setSelectedMethod(name)}
            >
              <img src={image} alt={name} />
              <span>{name}</span>
            </div>
          ))}
        </div>

        <div className="button-group">
          <button type="submit" className="pay-btn">
            Pay Rs. {finalPrice}
          </button>
          <button type="button" className="cancel-btn" onClick={handleCancel}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default Paymentpage;
