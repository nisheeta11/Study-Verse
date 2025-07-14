import React, { useState, useContext } from 'react';
import './Teacher.css';
import { useNavigate } from 'react-router-dom';
import CourseContext from '../Context/CourseContext';

const Teacher = () => {
  const [formData, setFormData] = useState({
    courseName: '',
    description: '',
    price: '',
    image: '',
    language: '',
    author: ''
  });

  const [errors, setErrors] = useState({});
  const { addCourse } = useContext(CourseContext);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: name === 'image' ? URL.createObjectURL(files[0]) : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    for (const field in formData) {
      if (
        (field === 'image' && !formData[field]) ||
        (field !== 'image' && formData[field].trim() === '')
      ) {
        newErrors[field] = 'This field is required';
      }
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      const courseData = {
        title: formData.courseName,
        description: formData.description,
        price: formData.price,
        image: formData.image,
        language: formData.language,
        author: formData.author,
      };

      const newCourseId = addCourse(courseData);
      alert('Course submitted successfully!');
      navigate(`/course/${newCourseId}`);
    }
  };

  return (
    <div className="tutor-form">
      <div className="course-form-container">
        <h2>Hello, to get started please fill in the details...</h2>
        <form onSubmit={handleSubmit}>
          {[
            { id: 'courseName', label: 'Course Name', type: 'text' },
            { id: 'description', label: 'Description', type: 'text' },
            { id: 'price', label: 'Price', type: 'text' },
            { id: 'language', label: 'Language', type: 'text' },
            { id: 'author', label: 'Author', type: 'text' }
          ].map(({ id, label, type }) => (
            <div className="form-input" key={id}>
              <label htmlFor={id}>{label}:</label>
              <input
                type={type}
                id={id}
                name={id}
                value={formData[id]}
                onChange={handleChange}
              />
              {errors[id] && <small className="error">{errors[id]}</small>}
            </div>
          ))}

          <div className="form-input">
            <label htmlFor="image">Image:</label>
            <input
              type="file"
              id="image"
              name="image"
              onChange={handleChange}
              accept="image/*"
            />
            {errors.image && <small className="error">{errors.image}</small>}
          </div>

          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Teacher;
