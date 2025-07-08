import React from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.css'
import search from '../assets/searchicon.svg';

const Navbar = () => {
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
          

          <div className="gs-btn">
          <NavLink to="/login">
            <button className="btn">Get Started</button>
          </NavLink></div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar

