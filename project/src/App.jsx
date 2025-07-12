import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Login from './components/Login'
import Footer from './components/Footer'
import About from './components/About'
import ScrollToTop from './components/ScrollToTop' 
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import AddToCart from './Pages/AddToCart'
import Payment from './Pages/Paymentpage'
import PopularCourses from './components/PopularCourses'
import Teacher from './Pages/Teacher'

function App() {
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
          <PopularCourses/>
          
        </>
      )
    },
    {
      path: "/addtocart",
      element: (
        <>
          <ScrollToTop />
          <Navbar />
          <AddToCart/>
          
        </>
      )
    },
        {
      path: "/payment",
      element: (
        <>
          <ScrollToTop />
          <Payment/>
          
        </>
      )
    },
       {
      path: "/teacher",
      element: (
        <>
          <ScrollToTop />
          <Navbar/>
          <Teacher/>
          
        </>
      )
    },
  ])

  return <RouterProvider router={router} />
}

export default App
