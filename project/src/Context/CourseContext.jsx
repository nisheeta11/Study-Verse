
import React, { createContext, useState } from 'react';
import coursesData from '../Data/CourseData';

const CourseContext = createContext();

const allCourses = Object.values(coursesData).flat();

export const CourseProvider = ({ children }) => {
  const [courses, setCourses] = useState(allCourses);

  const addCourse = (newCourse) => {
    const courseWithId = {
      ...newCourse,
      id: Date.now().toString(),
      rating: 5,
      topics: [],
    };
    setCourses(prev => [...prev, courseWithId]);
    return courseWithId.id;
  };

  return (
    <CourseContext.Provider value={{ courses, addCourse }}>
      {children}
    </CourseContext.Provider>
  );
};

export default CourseContext;
