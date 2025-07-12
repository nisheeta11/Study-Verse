import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';
import search from '../assets/searchicon.svg';
import cartIcon from '../assets/carticon.svg';
import { CartContext } from '../Context/CartContext'; 

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
          <div className="search-box">
            <input type="text" placeholder="Search courses....." className="search-input" />
            <img className="search-icon" src={search} alt="search icon" />
          </div>

          <NavLink to="/addtocart" className="cart-wrapper">
            <img src={cartIcon} className="nav-cart-icon" alt="cart" />
            {cartItems.length > 0 && (
              <span className="cart-count">{cartItems.length}</span> 
            )}
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


