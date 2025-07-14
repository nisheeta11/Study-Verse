import React, { createContext, useState, useEffect } from 'react';

const CourseContext = createContext();

export const CourseProvider = ({ children }) => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch all courses from backend on component mount
  useEffect(() => {
    fetch('http://localhost:5000/api/courses')
      .then(res => res.json())
      .then(data => {
        setCourses(data);
        setLoading(false);
      })
      .catch(err => {
        console.error('Error fetching courses:', err);
        setLoading(false);
      });
  }, []);

  // Add a new course via backend API
  const addCourse = async (newCourse) => {
    try {
      const response = await fetch('http://localhost:5000/api/courses', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newCourse),
      });

      if (!response.ok) {
        throw new Error('Failed to add course');
      }

      const savedCourse = await response.json();

      // Update local state to include new course
      setCourses(prev => [...prev, savedCourse]);

      return savedCourse._id || savedCourse.id; // return the ID of new course
    } catch (error) {
      console.error('Error adding course:', error);
      return null;
    }
  };

  return (
    <CourseContext.Provider value={{ courses, addCourse, loading }}>
      {children}
    </CourseContext.Provider>
  );
};

export default CourseContext;
