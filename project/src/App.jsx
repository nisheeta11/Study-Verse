import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';
import About from './components/About';
import PopularCourses from './components/PopularCourses';
import AddToCart from './Pages/AddToCart';
import Payment from './Pages/Paymentpage';
import Teacher from './Pages/Teacher';
import Course from './Pages/Course'; // The single course detail page

import { CourseProvider } from './Context/CourseContext';
import ProtectedRoute from './components/ProtectedRoute';

// A simple layout wrapper for consistent Navbar, Footer, ScrollToTop
const Layout = ({ children }) => (
  <>
    <ScrollToTop />
    <Navbar />
    {children}
    <Footer />
  </>
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout><Home /></Layout>
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
    element: <Layout><About /></Layout>
  },
  {
    path: "/course",
    element: <Layout><PopularCourses /></Layout>
  },
  {
    path: "/course/:id",
    element: <Layout><Course /></Layout>
  },
  {
    path: "/addtocart",
    element: <Layout><AddToCart /></Layout>
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
      <Layout>
        <ProtectedRoute>
          <Teacher />
        </ProtectedRoute>
      </Layout>
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
