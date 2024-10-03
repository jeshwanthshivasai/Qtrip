import React from 'react';
import Navbar from '../../components/Navbar';
import Calnyonnenfield from './Calnyonnenfield';
import Footer from '../../components/Footer';
import "../../styles/bangaluru/subcards.css"

function NBody(){
  return(
    <>
      <Navbar/>
      <Calnyonnenfield/>
      <Footer/>
    </>
  )
}
export default NBody;