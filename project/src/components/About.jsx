import React, { useState } from 'react';
import learnSkills from '../assets/learn.jpg';
import schedule from '../assets/schedule.jpg';
import certification from '../assets/certified.jpg';
import affordable from '../assets/buy.jpg';
import group from '../assets/group.jpg';
import './About.css'

const About = () => {
  return (


    <div className="aboutpage-info">
      <div className="tag-line-2">
        Why Choose StudyVerse?
      </div>


      <div className="content">
        <div className="cont-all">
          <div className="cont-l-img ">
            <img src={learnSkills} style={{ width: '450px', height: 'auto' }} />
          </div>
          <div className="cont-txt left">
            <h2>Learn New Skills Anytime, Anywhere</h2>
            <p>
              Gain access to a wide range of expert-led courses in technology, business, design, and more. Our on-demand learning model lets you build real-world skills at your own pace, whenever and wherever it suits you. With regularly updated content, StudyVerse ensures you stay ahead in a rapidly evolving world.
            </p>
          </div>
        </div>


        <div className="cont-all">
          <div className="cont-txt right">
            <h2>Flexible Learning That Fits Your Schedule</h2>
            <p>
              Our platform lets you learn on your terms—start, pause, and resume courses whenever it works for you. With no deadlines and 24/7 access across all devices, you can balance learning with your lifestyle and progress at your own pace.
            </p>
          </div>
          <div className="cont-r-img">
            <img src={schedule} style={{ width: '300px', height: 'auto' }} />
          </div>
        </div>


        <div className="cont-all">
          <div className="cont-l-img">
            <img src={certification} style={{ width: '350px', height: 'auto' }} />
          </div>
          <div className="cont-txt left">
            <h2>Get Certified</h2>
            <p>
              We offer industry-recognized certificates upon course completion, helping you validate your skills and stand out in today’s job market. Whether you're advancing your career, switching fields, or building a freelance profile, our certifications showcase your expertise to employers and clients.
            </p>
          </div>

        </div>

        <div className="cont-all">
          <div className="cont-txt right">
            <h2>Affordable and Accessible</h2>
            <p>
              Learning should never be limited by cost or location. That’s why we offer flexible, budget-friendly courses that fit into your life—wherever you are, whenever you’re ready. Empower yourself with knowledge, without the pressure or high price tag.
            </p>
          </div>
          <div className="cont-r-img">
            <img src={affordable} style={{ width: '300px', height: 'auto' }} />
          </div>
        </div>


        <div className="cont-all">
          <div className="cont-l-img">
            <img src={group} style={{ width: '350px', height: 'auto' }} />
          </div>
          <div className="cont-txt left">
            <h2>Community Support</h2>
            <p>
              You're never alone on your learning journey. Join a vibrant community of students, instructors, and mentors who are ready to help, share insights, and grow together. Ask questions, get feedback, and stay motivated with support that’s just a message away.
            </p>
          </div>

        </div>


      </div>

    </div >
  )
}

export default About
