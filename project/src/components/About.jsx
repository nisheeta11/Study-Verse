import React, { useState } from 'react';
import learnSkills from '../assets/learn.jpg';
import schedule from '../assets/schedule.jpg';
import certification from '../assets/certified.jpg';
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
            <h2>Learn new skils anytime, anywhere.</h2>
            <p>Choose from hundreds of expert-led courses in tech, business, design, and more. Learn on-demand at your own pace with practical skills that help you advance your career or projects. With regular updates, StudyVerse keeps you ahead in a fast-changing world.</p></div>
        </div>


        <div className="cont-all">
          <div className="cont-txt right">
            <h2>Flexible learning that fits your schedule.</h2>
            <p>Start, pause, and resume courses anytime. Learn at your own pace without deadlines, balancing education with your busy life. With 24/7 access on any device, you can pick up right where you left off and keep growing on your schedule.</p></div>
          <div className="cont-r-img">
            <img src={schedule} style={{ width: '300px', height: 'auto' }} />
          </div>
        </div>


        <div className="cont-all">
          <div className="cont-l-img">
            <img src={certification} style={{ width: '350px', height: 'auto' }} />
          </div>
          <div className="cont-txt left">
            <h2>Get Certified.</h2>
            <p>Complete courses and earn certificates to showcase your skills to employers or clients. These recognized credentials validate your expertise and help you stand out in today’s competitive job market, whether advancing your career, switching fields, or growing freelance opportunities.

            </p></div>
        </div>

      </div>

    </div>
  )
}

export default About
