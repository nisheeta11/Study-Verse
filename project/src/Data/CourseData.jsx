import web1Img from '../assets/FullStack.jpg';
import web2Img from '../assets/JS-Mastery.jpg';
import web3Img from '../assets/React.jpg';
import web4Img from '../assets/NodeJs.jpg';
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
      id: 1,
      title: "Full Stack Web Development",
      description: "Learn HTML, CSS, JS & React.",
      price: 999,
      rating: 4.8,
      image: web1Img,
      topics: [
        "HTML & Semantic Markup",
        "CSS Flexbox & Grid",
        "JavaScript ES6+",
        "React Basics & Hooks",
        "Node.js & Express",
        "MongoDB Integration",
        "Project Deployment"
      ]
    },
    {
      id: 2,
      title: "JavaScript Mastery",
      description: "Deep dive into JavaScript.",
      price: 299,
      rating: 4.6,
      image: web2Img,
      topics: [
        "Variables, Scope & Hoisting",
        "Functions & Closures",
        "Asynchronous JavaScript",
        "ES6+ Features",
        "DOM Manipulation",
        "Event Handling"
      ]
    },
    {
      id: 3,
      title: "React Crash Course",
      description: "Build interactive UIs with React.",
      price: 300,
      rating: 4.7,
      image: web3Img,
      topics: [
        "JSX Syntax",
        "Components & Props",
        "State & Lifecycle",
        "React Hooks",
        "Routing with React Router",
        "State Management"
      ]
    },
    {
      id: 4,
      title: "Node.js Essentials",
      description: "Backend fundamentals using Node.js.",
      price: 499,
      rating: 4.6,
      image: web4Img,
      topics: [
        "Node.js Basics",
        "Creating Servers",
        "Express.js Routing",
        "Middleware",
        "Working with Files",
        "Database Integration"
      ]
    }
  ],

  "UI/UX Design": [
    {
      id: 5,
      title: "UI/UX Bootcamp",
      description: "Master design principles and Figma.",
      price: 999,
      rating: 4.7,
      image: design1Img,
      topics: [
        "UX Fundamentals",
        "UI Design Principles",
        "Wireframing & Prototyping",
        "Figma Tools",
        "Design Systems",
        "Accessibility"
      ]
    },
    {
      id: 6,
      title: "User Research Fundamentals",
      description: "Conduct effective UX research.",
      price: 599,
      rating: 4.5,
      image: design2Img,
      topics: [
        "User Interviews",
        "Surveys & Questionnaires",
        "Persona Creation",
        "Usability Testing",
        "Journey Mapping"
      ]
    },
    {
      id: 7,
      title: "Design Systems in Figma",
      description: "Build scalable design systems.",
      price: 499,
      rating: 4.6,
      image: design3Img,
      topics: [
        "Figma Components",
        "Tokens & Variables",
        "Systematized Spacing",
        "Typography & Grids",
        "Component Libraries"
      ]
    },
    {
      id: 8,
      title: "Prototyping Advanced Flows",
      description: "Turn wireframes into interactive prototypes.",
      price: 699,
      rating: 4.7,
      image: design4Img,
      topics: [
        "Advanced Figma Prototyping",
        "Animations & Transitions",
        "Interactive Components",
        "User Flow Design"
      ]
    }
  ],

  "Graphic Design": [
    {
      id: 9,
      title: "Photoshop Basics",
      description: "Get started with Adobe Photoshop.",
      price: 999,
      rating: 4.5,
      image: graphic1Img,
      topics: [
        "Workspace Overview",
        "Layers & Masks",
        "Selection Tools",
        "Photo Editing",
        "Typography & Effects"
      ]
    },
    {
      id: 10,
      title: "Illustrator Mastery",
      description: "Create stunning vector graphics.",
      price: 1099,
      rating: 4.6,
      image: graphic2Img,
      topics: [
        "Vector Drawing Tools",
        "Pen Tool Techniques",
        "Creating Icons",
        "Working with Colors",
        "Print & Web Graphics"
      ]
    },
    {
      id: 11,
      title: "Canva for Beginners",
      description: "Design social media content with Canva.",
      price: 1199,
      rating: 4.4,
      image: graphic3Img,
      topics: [
        "Templates & Layouts",
        "Brand Kits",
        "Graphics & Text",
        "Exporting Designs",
        "Team Collaboration"
      ]
    },
    {
      id: 12,
      title: "InDesign Essentials",
      description: "Create layouts for print and digital.",
      price: 599,
      rating: 4.5,
      image: graphic4Img,
      topics: [
        "Document Setup",
        "Typography & Styles",
        "Master Pages",
        "Print Preparation",
        "Digital Publishing"
      ]
    }
  ],

  "Data Science": [
    {
      id: 13,
      title: "Python for Data Science",
      description: "Learn data analysis with Python.",
      price: 1299,
      rating: 4.7,
      image: data1Img,
      topics: [
        "Python Syntax",
        "NumPy & Pandas",
        "Data Cleaning",
        "Exploratory Data Analysis",
        "Data Visualization",
        "Intro to Machine Learning"
      ]
    },
    {
      id: 14,
      title: "Data Visualization",
      description: "Present insights with powerful visuals.",
      price: 699,
      rating: 4.6,
      image: data2Img,
      topics: [
        "Types of Visualizations",
        "Charts & Graphs",
        "Matplotlib & Seaborn",
        "Dashboard Creation",
        "Best Practices"
      ]
    }
  ],

  "Digital Marketing": [
    {
      id: 15,
      title: "Digital Marketing 101",
      description: "Overview of all digital marketing channels.",
      price: 999,
      rating: 4.5,
      image: digi1Img,
      topics: [
        "Marketing Funnel",
        "Email Campaigns",
        "Content Strategy",
        "Analytics Tools",
        "Advertising Platforms"
      ]
    },
    {
      id: 16,
      title: "SEO Masterclass",
      description: "Boost website rankings with SEO.",
      price: 899,
      rating: 4.7,
      image: digi2Img,
      topics: [
        "On-Page SEO",
        "Technical SEO",
        "Keyword Research",
        "Link Building",
        "SEO Tools"
      ]
    },
    {
      id: 17,
      title: "Social Media Marketing",
      description: "Grow your brand on social platforms.",
      price: 699,
      rating: 4.6,
      image: digi3Img,
      topics: [
        "Social Media Strategy",
        "Platform-Specific Tactics",
        "Ad Campaigns",
        "Engagement Metrics",
        "Community Management"
      ]
    }
  ]
};

export default courses;
