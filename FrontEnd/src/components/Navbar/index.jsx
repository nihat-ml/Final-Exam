import React from 'react'
import { Link } from 'react-router'
import { MdOutlineFavorite } from "react-icons/md";

function Navbar() {
  return (
    <>
      <div className='container'>
            <div className='navbar'>
                <div className='logo'>
                    <p>Selling<span>.</span></p>
                </div>
                <div className='links'>
                    <Link to={"/"} style={{color: "black", textDecoration:"none", fontSize:"20px"}}>Home</Link>
                    <Link to={"/addpage"} style={{color: "black", textDecoration:"none", fontSize:"20px"}}>Add Page</Link>
                    <Link to={"/"} style={{color: "black", textDecoration:"none", fontSize:"20px"}}>About Us</Link>
                    <Link to={"/"} style={{color: "black", textDecoration:"none", fontSize:"20px"}}>Contact</Link>
                    <Link to={"/"} style={{color: "black", textDecoration:"none", fontSize:"20px"}}>Blog</Link>
                    <Link to={"/favorites"} style={{color: "black", textDecoration:"none", fontSize:"20px"}}><MdOutlineFavorite /></Link>
                </div>
                
            </div>
      </div>
    </>
  )
}

export default Navbar
