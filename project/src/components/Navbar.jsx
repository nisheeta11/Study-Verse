import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';
import cartIcon from '../assets/carticon.svg';
import { CartContext } from '../Context/CartContext'; 
import Search from '../Context/SearchContext';



const Navbar = () => {
  const { cartItems } = useContext(CartContext);

  return (
    <div className='navbar'>
      <nav className='nav-container'>
        <div className="logo">
          <NavLink to="/">
            <span className="brand-name">StudyVerse</span>
          </NavLink>
        </div>

        <div className="nav-links">
          <Search/>

          <NavLink to="/addtocart" className="cart-wrapper">
            <img src={cartIcon} className="nav-cart-icon" alt="cart" />
            {cartItems.length > 0 && (
              <span className="cart-count">{cartItems.length}</span> 
            )}
          </NavLink>
           <NavLink to="/teacher">
            <button className="btn tutor">For Tutor</button>
          </NavLink>

          <NavLink to="/login">
            <button className="btn">Get Started</button>
          </NavLink>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;


