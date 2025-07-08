import React from 'react';
import CourseCard from './CourseCard';

const courseList = [
  {
    title: 'Web Development',
    description: 'Learn how to build modern web applications.',
  },
  {
    title: 'Data Science',
    description: 'Master data analysis and machine learning.',
  },
  {
    title: 'UI/UX Design',
    description: 'Design beautiful and user-friendly interfaces.',
  },
];

const CoursesSection = () => {
  return (
    <section style={{ padding: '40px 20px', backgroundColor: '#f0f4ff' }}>
      <h2 style={{ textAlign: 'center', color: 'navy', marginBottom: '30px' }}>
        Our Popular Courses
      </h2>
      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        gap: '40px'
      }}>
        {courseList.map((course) => (
          <CourseCard
            key={course.title}
            title={course.title}
            description={course.description}
          />
        ))}
      </div>
    </section>
  );
};

export default CoursesSection;
