import React from 'react'
import { FaFacebookF } from "react-icons/fa6";
import { IoLogoTwitter } from "react-icons/io5";
import { FaInstagram } from "react-icons/fa";

function Blogs() {
  return (
    <>
    <h1 style={{display:"flex", justifyContent:"center", alignItems:"center", margin:"50px 0px"}}>Leadership</h1>
      <div className='blogs'>
        
            <div className='blog'>
                <img src="https://preview.colorlib.com/theme/selling/images/person_2.jpg" alt="" />
                <h2>John Rooster</h2>
                <p>Nisi at consequatur unde molestiae quidem provident voluptatum deleniti quo iste error eos est praesentium distinctio cupiditate tempore suscipit inventore deserunt tenetur.</p>
                <div className="blogIcons">
                <FaFacebookF />
                <IoLogoTwitter />
                <FaInstagram />
                </div>
            </div>
            <div className='blog'>
                <img src="https://preview.colorlib.com/theme/selling/images/person_3.jpg" alt="" />
                <h2>Tom Sharp</h2>
                <p>Nisi at consequatur unde molestiae quidem provident voluptatum deleniti quo iste error eos est praesentium distinctio cupiditate tempore suscipit inventore deserunt tenetur.</p>
                <div className="blogIcons">
                <FaFacebookF />
                <IoLogoTwitter />
                <FaInstagram />
                </div>
            </div>
            <div className='blog'>
                <img src="https://preview.colorlib.com/theme/selling/images/person_4.jpg" alt="" />
                <h2>Winston Hodson</h2>
                <p>Nisi at consequatur unde molestiae quidem provident voluptatum deleniti quo iste error eos est praesentium distinctio cupiditate tempore suscipit inventore deserunt tenetur.</p>
                <div className="blogIcons">
                <FaFacebookF />
                <IoLogoTwitter />
                <FaInstagram />
                </div>
            </div>
      </div>
    </>
  )
}

export default Blogs
