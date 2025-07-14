import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';
import Footer from './components/Footer';
import About from './components/About';
import ScrollToTop from './components/ScrollToTop';
import AddToCart from './Pages/AddToCart';
import Payment from './Pages/Paymentpage';
import PopularCourses from './components/PopularCourses';
import Teacher from './Pages/Teacher';
import Course from './Pages/Course';

import { CourseProvider } from './Context/CourseContext';
import ProtectedRoute from './components/ProtectedRoute';

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <><ScrollToTop />
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
