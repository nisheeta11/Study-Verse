import React, { useEffect, useState, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './Course.css';
import { CartContext } from '../Context/CartContext';
import CourseContext from '../Context/CourseContext';
import { toast } from 'react-toastify';
import cartIcon from '../assets/carticon.svg';

const DEFAULT_IMAGE = '/default-course-image.png';

const Course = () => {
  const { id } = useParams();
  const { addToCart } = useContext(CartContext);
  const { courses } = useContext(CourseContext); // All courses grouped by category
  const navigate = useNavigate();

  const [course, setCourse] = useState(null);
  const [loading, setLoading] = useState(true);
  const [showFullDetails, setShowFullDetails] = useState(false);

  useEffect(() => {
    const numericId = Number(id);
    const allCourses = Object.values(courses).flat();

    const foundCourse = allCourses.find(
      c => c.id === numericId || c.id?.toString() === id
    );

    setCourse(foundCourse || null);
    setLoading(false);
  }, [id, courses]);

  const handleAddToCart = () => {
    if (course) {
      addToCart(course);
      toast.success(`${course.title} added to cart`, {
        position: 'top-right',
        autoClose: 2500,
        theme: 'light',
      });
    }
  };

  const handleBuyNow = () => {
    if (!course || isNaN(course.price)) {
      toast.error('Invalid course data. Cannot proceed.');
      return;
    }

    // Pass data via React Router state (no localStorage)
    navigate('/paymentpage', {
      state: {
        course,
        price: course.price,
      },
    });
  };

  if (loading) return <div className="course-loading">Loading course...</div>;
  if (!course) return <div className="course-not-found"><h2>Course Not Found</h2></div>;

  const imageSrc = course.image && !course.image.startsWith('blob:')
    ? course.image
    : DEFAULT_IMAGE;

  return (
    <div className="course-detail-container">
      <div className="course-detail-card">
        <div className="course-detail-image-wrapper">
          <img src={imageSrc} alt={course.title} className="course-image" />

          <button
            className="floating-cart-btn"
            onClick={handleAddToCart}
            aria-label="Add to Cart"
          >
            <img src={cartIcon} className="cart-icon-2" alt="cart icon" />
          </button>

          <button
            className="floating-buy-btn"
            onClick={handleBuyNow}
            aria-label="Buy Now"
          >
            Buy Now
          </button>
        </div>

        <div className="course-detail-content">
          <h1>{course.title}</h1>
          <p className="course-author">by {course.author || 'Unknown'}</p>

          {!showFullDetails ? (
            <>
              <p className="preview-description">
                {course.description?.substring(0, 120)}...
              </p>
              <div className="course-meta">
                <p><strong>Language:</strong> {course.language || 'English'}</p>
                <p><strong>Price:</strong> Rs. {course.price}</p>
                <p><strong>Rating:</strong> ⭐ {course.rating}</p>
              </div>
              <button className="see-details-btn" onClick={() => setShowFullDetails(true)}>
                See Details
              </button>
            </>
          ) : (
            <>
              <p className="course-desc">{course.description}</p>
              <div className="course-meta">
                <p><strong>Language:</strong> {course.language || 'English'}</p>
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
              <button className="back-btn" onClick={() => setShowFullDetails(false)}>
                Back
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Course;
