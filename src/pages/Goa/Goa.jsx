import React from "react";
import Navbar from "../../components/Navbar";
import BHead from "../Bengaluru/BHead";
import GCards from "./GoaCards";
import Footer from "../../components/Footer";
function GoaBody(){
  return(
    <>
      <Navbar/>
      <BHead/>
      <GCards/>
      <Footer/>
    </>
  )
}
export default GoaBody;