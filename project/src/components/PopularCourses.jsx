import React, { useState, useContext } from 'react';
import './PopularCourses.css';
import courses from '../Data/CourseData';
import cartIcon from '../assets/carticon.svg';
import { CartContext } from '../Context/CartContext';
import { toast } from 'react-toastify';
import { NavLink } from 'react-router-dom';

const PopularCourses = () => {
  const [selected, setSelected] = useState("Web Development");
  const { addToCart } = useContext(CartContext);

  const handleAddToCart = (course) => {
    addToCart(course);
    toast.success(`${course.title} added to cart`, {
      position: "top-right",
      autoClose: 2500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      theme: "light",
    });
  };

  return (
    <div className="pc-popular-container">
      <h2 className="pc-heading">Our Popular Online Courses</h2>

      <div className="pc-btn-group">
        {Object.keys(courses).map(category => (
          <button
            key={category}
            onClick={() => setSelected(category)}
            className={`pc-button-btn ${selected === category ? 'pc-active' : ''}`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="pc-card-container">
        {courses[selected].map((course, index) => (
          <div className="pc-course-card" key={index}>
            <img src={course.image} className="pc-course-image" alt={course.title} />

            <div className="pc-cCard-cont">
              <h3>{course.title}</h3>
              <p className='pc-p-first'>{course.description}</p>
              <p><strong>Price:</strong> {course.price}</p>
              <p><strong>Rating:</strong> {course.rating}</p>

              <div className="pc-card-btn">
                <button
                  className='pc-btn-2 pc-cart-btn'
                  onClick={() => handleAddToCart(course)}>
                  Add To Cart
                  <img src={cartIcon} className="pc-cart-icon" alt="cart icon" />
                </button>
                <NavLink to="/payment" state={{ price: course.price }}>
                  <button className='pc-btn-2 pc-buy-btn'>
                    Buy Now
                  </button>
                </NavLink>
              </div>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};

export default PopularCourses;
