import React from 'react'
import Navbar from '../component/Navbar'
import Hero from '../component/Hero'
import Feature from '../component/Feature'
import Accordian from '../component/Accordian'
import Card from '../component/Card'
import Carousel from '../component/Carousel'
import Footer from '../component/Footer'

const Home = () => {
  return (
    <>
    <Navbar/>
    <Hero/>
    <Carousel/>
    <Feature/>
    <Card/>
    <Accordian/>
    <Footer/>
    </>
  )
}

export default Home
