import web1Img from '../assets/Full-Stack.jpg';
import web2Img from '../assets/JS-Mastery.jpg';
import web3Img from '../assets/React.jpg';
import web4Img from '../assets/NodeJS.jpg';
import design1Img from '../assets/UI--UX.jpg';
import design2Img from '../assets/User-Research.jpg';
import design3Img from '../assets/Figma.jpg';
import design4Img from '../assets/Prototyping.jpg';
import graphic1Img from '../assets/Photoshop.jpg';
import graphic2Img from '../assets/Illustrator.jpg';
import graphic3Img from '../assets/Canva.jpg';
import graphic4Img from '../assets/Indesign.jpg';
import digi1Img from '../assets/DigitalMarketing.jpg';
import digi2Img from '../assets/SEO.jpg';
import digi3Img from '../assets/SocialMedia.jpg';
import data1Img from '../assets/python.jpg';
import data2Img from '../assets/DataScience.jpg';



const courses = {
  "Web Development": [
    {
      title: "Full Stack Web Development",
      description: "Learn HTML, CSS, JS & React.",
      price: "$49.99",
      rating: 4.8,
      image: web1Img
    },
    {
      title: "JavaScript Mastery",
      description: "Deep dive into JavaScript.",
      price: "$29.99",
      rating: 4.6,
      image: web2Img
    },
    {
      title: "React Crash Course",
      description: "Build interactive UIs with React.",
      price: "$34.99",
      rating: 4.7,
      image: web3Img
    },
    {
      title: "Node.js & Express Essentials",
      description: "Backend fundamentals using Node.js.",
      price: "$39.99",
      rating: 4.6,
      image: web4Img
    }
  ],

  "UI/UX Design": [
    {
      title: "UI/UX Bootcamp",
      description: "Master design principles and Figma.",
      price: "$39.99",
      rating: 4.7,
      image: design1Img
    },
    {
      title: "User Research Fundamentals",
      description: "Conduct effective UX research.",
      price: "$29.99",
      rating: 4.5,
      image: design2Img
    },
    {
      title: "Design Systems in Figma",
      description: "Build scalable design systems.",
      price: "$34.99",
      rating: 4.6,
      image: design3Img
    },
    {
      title: "Prototyping Advanced Flows",
      description: "Turn wireframes into interactive prototypes.",
      price: "$36.99",
      rating: 4.7,
      image: design4Img
    }
  ],

  "Graphic Design": [
    {
      title: "Photoshop Basics",
      description: "Get started with Adobe Photoshop.",
      price: "$19.99",
      rating: 4.5,
      image: graphic1Img
    },
    {
      title: "Illustrator Mastery",
      description: "Create stunning vector graphics.",
      price: "$24.99",
      rating: 4.6,
      image: graphic2Img
    },
    {
      title: "Canva for Beginners",
      description: "Design social media content with Canva.",
      price: "$14.99",
      rating: 4.4,
      image: graphic3Img
    },
    {
      title: "InDesign Essentials",
      description: "Create layouts for print and digital.",
      price: "$22.99",
      rating: 4.5,
      image: graphic4Img
    }
  ],

    "Data Science": [
    {
      title: "Python for Data Science",
      description: "Learn data analysis with Python.",
      price: "$39.99",
      rating: 4.7,
      image: data1Img
    },

    {
      title: "Data Visualization with Tableau",
      description: "Present insights with powerful visuals.",
      price: "$34.99",
      rating: 4.6,
      image: data2Img
    }
  ],

  "Digital Marketing": [
    {
      title: "Digital Marketing 101",
      description: "Overview of all digital marketing channels.",
      price: "$29.99",
      rating: 4.5,
      image: digi1Img
    },
    {
      title: "SEO Masterclass",
      description: "Boost website rankings with SEO.",
      price: "$34.99",
      rating: 4.7,
      image: digi2Img
    },
    {
      title: "Social Media Marketing",
      description: "Grow your brand on social platforms.",
      price: "$24.99",
      rating: 4.6,
      image: digi3Img
    }
 
  ],


};

export default courses;

