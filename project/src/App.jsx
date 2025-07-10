import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Login from './components/Login'
import Footer from './components/Footer'
import About from './components/About'
import ScrollToTop from './components/ScrollToTop' 
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
// import PopularCourses from './components/PopularCourses'

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
        </>
      )
    },
  ])

  return <RouterProvider router={router} />
}

export default App
