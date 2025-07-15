import React, { useContext } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import './Navbar.css';
import cartIcon from '../assets/carticon.svg';
import { CartContext } from '../Context/CartContext';
import Search from '../Context/SearchContext';
import { AuthContext } from '../Context/AuthContext';
import { FaUserCircle } from 'react-icons/fa';


const Navbar = () => {
  const { cartItems } = useContext(CartContext);
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <div className='navbar'>
      <nav className='nav-container'>
        <div className="logo">
          <NavLink to="/">
            <span className="brand-name">StudyVerse</span>
          </NavLink>
        </div>

        <div className="nav-links">
          <Search />

          <NavLink to="/addtocart" className="cart-wrapper">
            <img src={cartIcon} className="nav-cart-icon" alt="cart" />
            {cartItems.length > 0 && (
              <span className="cart-count">{cartItems.length}</span>
            )}
          </NavLink>

          {!user ? (
            <NavLink to="/login">
              <button className="btn">Login</button>
            </NavLink>
          ) : (
            <>
              <div className="profile-dropdown">
                <FaUserCircle className="profile-icon" />
                <div className="dropdown-menu">
                  <p><strong>{user.name}</strong></p>
                  <p className="email">{user.email}</p>
                  <button className="logout-btn" onClick={handleLogout}>Logout</button>
                </div>
              </div>
              
              <NavLink to="/teacher">
                <button className="btn tutor">For Tutor</button>
              </NavLink>


            </>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
