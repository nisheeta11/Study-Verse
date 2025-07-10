import React, { useState } from 'react';
import './PopularCourses.css';
import courses from '../Data/CourseData';
import courseArrow from '../assets/getarrow.svg';
import { NavLink } from 'react-router-dom'
import cartIcon from '../assets/carticon.svg';

const PopularCourses = () => {
  const [selected, setSelected] = useState("Web Development");

  return (
    <div className="popular-container">
      <h2 className="heading">Our Popular Online Courses</h2>


      <div className="button-group">
        {Object.keys(courses).map(category => (
          <button
            key={category}
            onClick={() => setSelected(category)}
            className={`category-button ${selected === category ? 'active' : ''}`}>
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
                <NavLink>
                  <button className='btn-2 cart-btn'>
                    Add To Cart
                    <img src={cartIcon} className="cart-icon" />
                  </button></NavLink>

                <NavLink >
                  <button className='btn-2 buy-btn'>
                    Buy Now

                  </button></NavLink>
              </div>
            </div>
          </div>
        ))}
      </div>

      <NavLink to="/course">
        <button className="btn home-btn">View More
          <img src={courseArrow} alt="Try Arrow" className="arrow-icon" />
        </button></NavLink>
    </div>
  );
};

export default PopularCourses;


