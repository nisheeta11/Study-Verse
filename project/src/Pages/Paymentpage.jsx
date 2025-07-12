import React, { useContext, useState } from 'react';
import { CartContext } from '../Context/CartContext';
import './Paymentpage.css';
import esewa from '../assets/esewa.jpg';
import khalti from '../assets/khalti.jpg';
import visa from '../assets/visa.jpg';
import mastercard from '../assets/mastercard.jpg';
import { useNavigate } from 'react-router-dom';

const Paymentpage = () => {
  const { totalPrice } = useContext(CartContext);
  const [selectedMethod, setSelectedMethod] = useState('');
  const navigate = useNavigate(); 

  const paymentMethods = [
    { name: 'eSewa', image: esewa },
    { name: 'Khalti', image: khalti },
    { name: 'Visa', image: visa },
    { name: 'MasterCard', image: mastercard },
  ];

  const handlePayment = (e) => {
    e.preventDefault();
    if (!selectedMethod) {
      alert('Please select a payment method.');
      return;
    }
    alert(`Paid Rs. ${totalPrice} using ${selectedMethod}`);
  };

  const handleCancel = () => {
    navigate('/AddToCart'); 
  };

  return (
    <div className="payment-page">
      <h2>Choose Payment Method!</h2>
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
          <button type="submit" className="pay-btn">Pay Rs. {totalPrice}</button>
          <button type="button" className="cancel-btn" onClick={handleCancel}>Cancel</button>
        </div>
      </form>
    </div>
  );
};

export default Paymentpage;
