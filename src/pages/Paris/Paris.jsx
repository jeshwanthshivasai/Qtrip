import React from "react";
import Navbar from "../../components/Navbar";
import BHead from "../Bengaluru/BHead";
import PCards from "./ParisCards";
import Footer from "../../components/Footer";
function Paris(){
    return(
        <>
            <Navbar/>
            <BHead/>
            <PCards/>
            <Footer/>
        </>
    )
}
export default Paris;