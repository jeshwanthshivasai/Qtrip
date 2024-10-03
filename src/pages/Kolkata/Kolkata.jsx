import React from "react";
import Navbar from "../../components/Navbar";
import BHead from "../Bengaluru/BHead";
import KCards from "./KolkataCards";
import Footer from "../../components/Footer";
function Kolkata(){
  return(
    <>
        <Navbar/>
        <BHead/>
        <KCards/>
        <Footer/>
    </>
  )
}
export default Kolkata;