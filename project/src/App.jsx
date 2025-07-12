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
          {/* <Navbar /> */}
          <Payment/>
          
        </>
      )
    },
  ])

  return <RouterProvider router={router} />
}

export default App
