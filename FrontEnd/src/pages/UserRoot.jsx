import React from 'react'
import Navbar from '../components/Navbar'
import {Outlet} from "react-router-dom"
import Footer from '../components/Footer'
function UserRoot() {
  return (
    <>
      <Navbar/>
      <Outlet/>
      <Footer/>
    </>
  )
}

export default UserRoot
