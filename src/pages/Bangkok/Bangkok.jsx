import React from "react";
import Navbar from "../../components/Navbar";
import BHead from "../Bengaluru/BHead";
import BKCards from "./BangkokCards";
import Footer from "../../components/Footer";
function Bangkok(){
    return(
        <>
            <Navbar/>
            <BHead/>
            <BKCards/>
            <Footer/>
        </>
    )
}
export default Bangkok;