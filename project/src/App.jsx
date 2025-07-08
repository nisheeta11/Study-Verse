import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Login from './components/Login'
import Footer from './components/Footer'
import About from './components/About'



import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import PopularCourses from './components/PopularCourses'

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element:  <><Navbar/><Home/><Footer/> </>
    },
    {
      path: "/login",
      element:  <><Login/></>
    },
      {
      path: "/about",
      element:  <><Navbar/><About/></>
    },

       {
      path: "/course",
      element:  <><Navbar/></>
    },


  ])
  

  return (
    <>
    
    <RouterProvider router={router} />
   
    </>
  )
}

export default App
