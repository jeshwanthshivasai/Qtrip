import React from 'react';
import Navbar from '../../components/Navbar';
import BHead from './BHead';
import Footer from '../../components/Footer';
import BCards from './BengaluruCards';
function Bengaluru(){
  
  return(
    <>
     <Navbar />
     <BHead />
     <BCards/>
     <Footer />
    </>
  )
}
export default Bengaluru;