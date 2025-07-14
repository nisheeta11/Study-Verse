import React, { useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import './Course.css';
import { CartContext } from '../Context/CartContext';
import CourseContext from '../Context/CourseContext';
import { toast } from 'react-toastify';
import cartIcon from '../assets/carticon.svg';

const Course = () => {
  const { id } = useParams();
  const [showFullDetails, setShowFullDetails] = useState(false);
  const { addToCart } = useContext(CartContext);
  const { courses } = useContext(CourseContext);

  const course = courses.find(c => c.id.toString() === id);

  if (!course) {
    return <div className="course-not-found"><h2>Course Not Found</h2></div>;
  }

  const handleAddToCart = () => {
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
    <div className="course-detail-container">
      <div className="course-detail-card">
        <div className="course-detail-image-wrapper">
          <img src={course.image} alt={course.title} className="course-image" />
          <button className="floating-cart-btn" onClick={handleAddToCart}>
            <img src={cartIcon} className="cart-icon-2" alt="cart icon" />
          </button>
        </div>
        <div className="course-detail-content">
          <h1>{course.title}</h1>

          {!showFullDetails ? (
            <>
              <p className="preview-description">
                {course.description.substring(0, 120)}...
              </p>
              <div className="course-meta">
                <p><strong>Price:</strong> Rs. {course.price}</p>
                <p><strong>Rating:</strong> ⭐ {course.rating}</p>
              </div>
              <button className="see-details-btn" onClick={() => setShowFullDetails(true)}>See Details</button>
            </>
          ) : (
            <>
              <p className="course-desc">{course.description}</p>
              <div className="course-meta">
                <p><strong>Price:</strong> Rs. {course.price}</p>
                <p><strong>Rating:</strong> ⭐ {course.rating}</p>
              </div>
              {course.topics?.length > 0 && (
                <div className="course-topics">
                  <h3>What You’ll Learn</h3>
                  <ul>
                    {course.topics.map((topic, index) => (
                      <li key={index}>{topic}</li>
                    ))}
                  </ul>
                </div>
              )}
              <button className="back-btn" onClick={() => setShowFullDetails(false)}>Back</button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Course;
