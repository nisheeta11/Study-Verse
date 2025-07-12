import React from 'react'
import './Teacher.css';

const Teacher = () => {
  return (
    <div className="tutor-form">
      <div className="course-form-container">
        <h2>Hello, to get start please fill the detail.... </h2>
        <form>
          <div className="form-input">
            <label htmlFor="courseName">Course Name:</label>
            <input
              type="text"
              id="courseName"
              name="courseName"
            /></div>
          <div className="form-input">
            <label htmlFor="description">Description:</label>
            <input
              type="text"
              id="description"
              name="description"
            /></div>


          <div className="form-input">
            <label htmlFor="price">Price:</label>
            <input
              type="text"
              id="price"
              name="price"
            /></div>

          <div className="form-input">
            <label htmlFor="image">Image URL:</label>
            <input
              type="file"
              id="image"
              name="image"
            /></div>

          <div className="form-input">
            <label htmlFor="language">Language:</label>
            <input
              type="text"
              id="language"
              name="language"
            /></div>
            
          <div className="form-input">
            <label htmlFor="author">Author:</label>
            <input
              type="text"
              id="author"
              name="author"
            /></div>

          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  )
}

export default Teacher
