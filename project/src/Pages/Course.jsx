import React, { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import './Course.css';
import { CartContext } from '../Context/CartContext';
import CourseContext from '../Context/CourseContext';
import { toast } from 'react-toastify';
import cartIcon from '../assets/carticon.svg';

const Course = () => {
  const { id } = useParams();
  const { addToCart } = useContext(CartContext);
  const { courses } = useContext(CourseContext);

  const [course, setCourse] = useState(null);
  const [loading, setLoading] = useState(true);
  const [showFullDetails, setShowFullDetails] = useState(false);

  useEffect(() => {
    const foundCourse = courses.find(c => c._id === id || c.id?.toString() === id);
    if (foundCourse) {
      setCourse(foundCourse);
      setLoading(false);
    } else {
      // If not in local state, fetch from backend
      fetch(`http://localhost:5000/api/courses/${id}`)
        .then(res => {
          if (!res.ok) throw new Error('Course not found');
          return res.json();
        })
        .then(data => {
          setCourse(data);
          setLoading(false);
        })
        .catch(err => {
          console.error(err);
          setCourse(null);
          setLoading(false);
        });
    }
  }, [id, courses]);

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

  if (loading) return <div className="course-loading">Loading course...</div>;

  if (!course) {
    return <div className="course-not-found"><h2>Course Not Found</h2></div>;
  }

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
          <p className="course-author">by {course.author}</p>
          {!showFullDetails ? (
            <>
              <p className="preview-description">
                {course.description?.substring(0, 120)}...
              </p>
              <div className="course-meta">
                <p><strong>Language:</strong> {course.language}</p>
                <p><strong>Price:</strong> Rs. {course.price}</p>
                <p><strong>Rating:</strong> ⭐ {course.rating}</p>
              </div>
              <button className="see-details-btn" onClick={() => setShowFullDetails(true)}>See Details</button>
            </>
          ) : (
            <>
              <p className="course-desc">{course.description}</p>
              <div className="course-meta">
                <p><strong>Language:</strong> {course.language}</p>
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
