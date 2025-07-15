import React, { useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import CourseContext from '../Context/CourseContext';
import './TeacherDashboard.css';

const TeacherDashboard = () => {
  const { courses, removeCourse } = useContext(CourseContext);
  const [profile, setProfile] = useState({ name: '', bio: '', profilePic: '' });
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  
  useEffect(() => {
    const savedProfile = localStorage.getItem('teacherProfile');
    if (savedProfile) setProfile(JSON.parse(savedProfile));
  }, []);

  
  useEffect(() => {
    localStorage.setItem('teacherProfile', JSON.stringify(profile));
  }, [profile]);

  const handleChange = e => {
    const { name, value, files } = e.target;
    setProfile(prev => ({
      ...prev,
      [name]: name === 'profilePic' ? URL.createObjectURL(files[0]) : value,
    }));
  };

  const validateProfile = () => {
    const errs = {};
    if (!profile.name.trim()) errs.name = 'Name is required';
    if (!profile.bio.trim()) errs.bio = 'Bio is required';
    if (!profile.profilePic) errs.profilePic = 'Profile picture is required';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (validateProfile()) alert('Profile saved successfully!');
  };

  const handleDelete = id => {
    if (window.confirm('Are you sure you want to delete this course?')) removeCourse(id);
  };

  const teacherCourses = courses.filter(c => c.author === profile.name);

  return (
    <div className="teacher-dashboard">
      <section className="profile-section card">
        <h2>Your Profile</h2>
        <form onSubmit={handleSubmit} className="profile-form">
          <div className="profile-pic-container">
            {profile.profilePic ? (
              <img src={profile.profilePic} alt="Profile" className="profile-pic" />
            ) : (
              <div className="profile-pic-placeholder">No Photo</div>
            )}
            <div className="profile-details">
            <input
              type="file"
              name="profilePic"
              accept="image/*"
              onChange={handleChange}
              className="file-input"
            />
            {errors.profilePic && <small className="error">{errors.profilePic}</small>}
          </div>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              id="name"
              name="name"
              type="text"
              value={profile.name}
              onChange={handleChange}
              placeholder="Your full name"
            />
            {errors.name && <small className="error">{errors.name}</small>}
          
            <label htmlFor="bio">Bio:</label>
            <textarea
              id="bio"
              name="bio"
              rows="3"
              value={profile.bio}
              onChange={handleChange}
              placeholder="Tell us about yourself"
            />
            {errors.bio && <small className="error">{errors.bio}</small>}
          </div>
          <button type="submit" className="btn-primary">Save Profile</button>
          </div>
        </form>
      </section>

      <section className="courses-list-section card">
        <div className="courses-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
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
                  title="Delete Course"
                >
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
