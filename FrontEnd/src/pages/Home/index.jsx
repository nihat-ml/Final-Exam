import React from 'react'
import Hero from '../../components/Hero'
import Products from '../Products'
import Blogs from '../../components/Blogs'
import {Helmet} from "react-helmet"

function Home() {
  return (
    <>
    <Helmet>
                <title>Home</title>
    </Helmet>
      <Hero/>
      <Blogs/>
      <Products/>
      
    </>
  )
}

export default Home
