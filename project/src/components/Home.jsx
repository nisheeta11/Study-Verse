import React from 'react';
import './Home.css';
import learningImg from '../assets/img1.jpg';
import courseArrow from '../assets/getarrow.svg';
import eLearn from '../assets/eLearn.jpg';
import PopularCourses from './PopularCourses';
import { NavLink } from 'react-router-dom'



const Home = () => {
  return (
    <div>

      <div className="container">
        
          <div className="slogan">
            <h1>Learn. Grow. Succeed.</h1>
            <p>Your future starts with StudyVerse — Learn skills that shape tomorrow.</p>
            <p className="highlight">Master in-demand skills. Build your future. Succeed with confidence.</p>

            <NavLink to="/course">
              <button className='btn home-btn'>
                View Courses
                <img src={courseArrow} alt="Try Arrow" className="arrow-icon" />
              </button></NavLink>
          </div>
       

        
          <img className='img1' src={learningImg} alt="Learning" />
       
      </div>



      <div className="tag-line">
        Built for You, Your Team, or Your Classroom
      </div>


      <div className="about-info">

        <div className="abt-img">
          <img src={eLearn} style={{ width: '450px', height: 'auto' }} />
        </div>
        <div className="abt-cont">
          <h1>Dive into our Online Courses and Ignite Your Learning!</h1>
          <p>Whether you're starting fresh or leveling up, our curated courses help you learn at your own pace and succeed in your goals. With expert instructors, hands-on projects, and flexible schedules, you'll gain practical skills— all from the comfort of wherever you are.</p>
          <ul className="checklist">
            <li>Learn at your own pace with flexible, self-guided courses.</li>
            <li>Build real-world skills through hands-on, project-based learning.</li>
            <li>Earn industry-recognized certificates to showcase your achievements.</li>
          </ul>
          <NavLink to="/about">
            <button className='btn home-btn'>
              About More
              <img src={courseArrow} alt="Try Arrow" className="arrow-icon" />
            </button>
          </NavLink>
        </div>
      </div>


      <PopularCourses />
    </div>
  );
};
export default Home;
