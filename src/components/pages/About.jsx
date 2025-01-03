import React from 'react'
import Nav from '../common/Nav'
import Footer from '../common/Footer'
import About_chairmen from '../About/About_chairmen'
import About_hero from  '../About/About_hero'
import About_product from '../About/About_product'
import About_last_cart from '../About/About_last_cart'


const About = () => {
  return (
    <>

      <Nav />
      <About_hero  />
      <About_product />
      <About_chairmen />
      <About_last_cart />



      <Footer />
      
    </>
  )
}

export default About
