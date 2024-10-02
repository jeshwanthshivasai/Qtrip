import React from 'react'
import "../styles/qtrip.css"
import Navbar from './Navbar';
import Footer from './Footer';
import Cards from "./QtripCards"
function Hero(){
  return (
    <>
     <Navbar />
     <div id='home'>
          <div id='img-content'>
              <h1>Welcome to QTrip</h1>
              <p>Explore the world with fantastic places to venture around</p>
          </div>
     </div>
     <Cards />
     <Footer />
    </>
  )
}
export default Hero;