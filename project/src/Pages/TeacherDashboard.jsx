import React, { useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import CourseContext from '../Context/CourseContext';
import { AuthContext } from '../Context/AuthContext';
import './TeacherDashboard.css';

const TeacherDashboard = () => {
  const { courses, removeCourse } = useContext(CourseContext);
  const { user } = useContext(AuthContext);

  const [profile, setProfile] = useState({ name: '', profilePic: '' });
  const navigate = useNavigate();

  useEffect(() => {
    const savedProfile = localStorage.getItem('teacherProfile');
    if (savedProfile) {
      setProfile(JSON.parse(savedProfile));
    } else if (user?.name) {
      setProfile(prev => ({ ...prev, name: user.name }));
    }
  }, [user]);

  useEffect(() => {
    localStorage.setItem('teacherProfile', JSON.stringify(profile));
  }, [profile]);

  const handleChange = e => {
    const { name, files } = e.target;
    if (name === 'profilePic' && files.length) {
      setProfile(prev => ({
        ...prev,
        profilePic: URL.createObjectURL(files[0]),
      }));
    }
  };

  const handleDelete = id => {
    if (window.confirm('Are you sure you want to delete this course?')) {
      removeCourse(id);
    }
  };

  const teacherCourses = courses.filter(c => c.author === profile.name);

  return (
    <div className="teacher-dashboard">
      <section className="profile-section card">
        <h2>Your Profile</h2>
        <div className="profile-form">
          <div className="profile-pic-container">
            <label htmlFor="profilePicInput" className="profile-pic-label">
              {profile.profilePic ? (
                <img src={profile.profilePic} alt="Profile" className="profile-pic" />
              ) : (
                <div className="profile-pic-placeholder">No Photo</div>
              )}
              <div className="plus-icon">➕</div>
            </label>
            <input
              type="file"
              id="profilePicInput"
              name="profilePic"
              accept="image/*"
              onChange={handleChange}
              className="file-input-hidden"
            />
            <div className="teacher-name-display">
              {profile.name || 'Name not available'}
            </div>
          </div>
        </div>
      </section>

      <section className="courses-list-section card">
        <div className="courses-header">
          <h2>Your Uploaded Courses</h2>
          <button className="btn-primary" onClick={() => navigate('/courseform')}>
            Add Course
          </button>
        </div>
        {teacherCourses.length === 0 ? (
          <p>You have not added any courses yet.</p>
        ) : (
          <ul className="course-list-simple">
            {teacherCourses.map(({ id, title }) => (
              <li key={id} className="course-list-item">
                <span>{title}</span>
                <button
                  onClick={() => handleDelete(id)}
                  className="btn-delete-small"
                  title="Delete Course">
                  Delete
                </button>
              </li>
            ))}
          </ul>
        )}
      </section>
    </div>
  );
};

export default TeacherDashboard;
