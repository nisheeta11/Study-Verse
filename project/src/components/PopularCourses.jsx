import React, { useState, useContext } from 'react';
import './PopularCourses.css';
import courses from '../Data/CourseData';
import cartIcon from '../assets/carticon.svg';
import { CartContext } from '../Context/CartContext';
import { toast } from 'react-toastify';
import { NavLink } from 'react-router-dom'


const PopularCourses = () => {
  const [selected, setSelected] = useState("Web Development");
  const { addToCart } = useContext(CartContext);

  const handleAddToCart = (course) => {
    addToCart(course);
    toast.success(`${course.title} added to cart`, {
      position: "top-center",
      autoClose: 2500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      theme: "light",
    });
  };

  return (
    <div className="popular-container">
      <h2 className="heading">Our Popular Online Courses</h2>

      <div className="btn-group">
        {Object.keys(courses).map(category => (
          <button
            key={category}
            onClick={() => setSelected(category)}
            className={`button-btn ${selected === category ? 'active' : ''}`}
          >
            {category}
          </button>
        ))}
      </div>


      <div className="card-container">
        {courses[selected].map((course, index) => (
          <div className="course-card" key={index}>
            <img src={course.image} className="course-image" />

            <div className="cCard-cont">
              <h3>{course.title}</h3>
              <p className='p-first'>{course.description}</p>
              <p><strong>Price:</strong> {course.price}</p>
              <p><strong>Rating:</strong> {course.rating}</p>

              <div className="card-btn">
                <button
                  className='btn-2 cart-btn'
                  onClick={() => handleAddToCart(course)}>
                  Add To Cart
                  <img src={cartIcon} className="cart-icon" />
                </button>
                <NavLink to="/payment">
                  <button className='btn-2 buy-btn'>
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
