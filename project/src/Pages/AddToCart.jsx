import React, { useContext } from 'react';
import { CartContext } from '../Context/CartContext';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './AddToCart.css';
import '../components/PopularCourses.css';
import { FaTrash } from 'react-icons/fa';
import { NavLink } from 'react-router-dom'
const AddToCart = () => {
  const { cartItems, removeFromCart, totalPrice } = useContext(CartContext);

  const handleRemove = (id) => {
    removeFromCart(id);
    toast.error('Item Removed from Cart', {
      position: "top-right",
      autoClose: 2500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      theme: "light",

    });
  };

  return (
    <div className="cart-page">
      <h2>Your Cart!</h2>
      {cartItems.length === 0 ? (
        <p>No items in cart.</p>
      ) : (
        <>
          <div className="card-box">
            {cartItems.map((item) => (
              <div className="cart-row" key={item.id}>
                  <div className="cart-course-card">
                    <img src={item.image} className="cart-course-image" alt={item.title} />
                  

                  <div className="cart-Card-cont">
                    <h3>{item.title}</h3>
                    <p><strong>Price:</strong> Rs. {item.price}</p>
                  </div>
                </div>

                <div className="cart-price-standalone">
                  <p>Rs. {item.price * (item.quantity || 1)}</p>
                  <button onClick={() => handleRemove(item.id)} className="remove-btn">
                    <FaTrash />
                  </button>
                </div>
              </div>

            ))}

          </div>

          <div className="cart-summary sticky-summary">
            <h3>Total: Rs. {totalPrice}</h3>
            <NavLink to="/payment">
              <button className="checkout-btn">
                Checkout

              </button>
            </NavLink>

          </div>
        </>
      )}
      <ToastContainer />
    </div>
  );
};

export default AddToCart;
