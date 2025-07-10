import React from 'react';
import '../../Pages/Landing/Landing.css'
import Hero from '../../Components/Hero'
import Features from '../../Components/Features';
import HarareMap from '../../Components/HarareMap';
import WhyUs from '../../Components/WhyUs';
import Customers from '../../Components/Customers';
import Parking from '../../Components/Parking';
import Nav from '../../Components/Nav';
import Footer from '../../Components/Footer';

function Landing() {
  return (
    <div className='landing-page'>
      <Nav/>
      <Hero/>
      <Features/>
      <HarareMap/>
      <WhyUs/>
      <Customers/>
      <Parking/>
      <Footer/>
    </div>
  )
}

export default Landing