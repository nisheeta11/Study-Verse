import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import ProtectedRoute from './components/ProtectedRoute';
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';
import About from './components/About';
import PopularCourses from './components/PopularCourses';
import AddToCart from './Pages/AddToCart';
import Payment from './Pages/Paymentpage';
import Teacher from './Pages/Teacher';
import Course from './Pages/Course';
import { CourseProvider } from './Context/CourseContext';

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <ScrollToTop />
        <Navbar />
        <Home />
        <Footer />
      </>
    )
  },
  {
    path: "/login",
    element: (
      <>
        <ScrollToTop />
        <Login />
      </>
    )
  },
  {
    path: "/signup",
    element: (
      <>
        <ScrollToTop />
        <Signup />
      </>
    )
  },
  {
    path: "/about",
    element: (
      <>
        <ScrollToTop />
        <Navbar />
        <About />
        <Footer />
      </>
    )
  },
  {
    path: "/course",
    element: (
      <>
        <ScrollToTop />
        <Navbar />
        <PopularCourses />
        <Footer />
      </>
    )
  },
  {
    path: "/course/:id",
    element: (
      <>
        <ScrollToTop />
        <Navbar />
        <Course />
        <Footer />
      </>
    )
  },
  {
    path: "/addtocart",
    element: (
      <>
        <ScrollToTop />
        <Navbar />
        <AddToCart />
        
      </>
    )
  },
  {
    path: "/payment",
    element: (
      <>
        <ScrollToTop />
        <ProtectedRoute>
          <Payment />
        </ProtectedRoute>
        <Footer />
      </>
    )
  },
  {
    path: "/teacher",
    element: (
      <>
        <ScrollToTop />
        <Navbar />
        <ProtectedRoute>
          <Teacher />
        </ProtectedRoute>
        <Footer />
      </>
    )
  }
]);

function App() {
  return (
    <CourseProvider>
      <RouterProvider router={router} />
    </CourseProvider>
  );
}

export default App;
