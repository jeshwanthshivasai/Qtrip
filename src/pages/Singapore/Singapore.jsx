import React from "react";
import Navbar from "../../components/Navbar";
import BHead from "../Bengaluru/BHead";
import SCards from "./SingaporeCards";
import Footer from "../../components/Footer";
function Singapore(){
    return(
        <>
            <Navbar/>
            <BHead/>
            <SCards/>
            <Footer/>
        </>
    )
}
export default Singapore;