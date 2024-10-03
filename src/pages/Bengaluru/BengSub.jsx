import React from 'react';
import Navbar from '../../components/Navbar';
import Niaboytown from '../Bengaluru/Niaboytown';
import Footer from '../../components/Footer';
import "../../styles/bangaluru/subcards.css"

function BBody(){
  return(
    <>
      <Navbar/>
      <Niaboytown/>
      <Footer/>
    </>
  )
}
export default BBody;