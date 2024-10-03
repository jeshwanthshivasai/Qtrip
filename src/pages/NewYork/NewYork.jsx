import React from "react";
import Navbar from "../../components/Navbar";
import BHead from "../Bengaluru/BHead";
import NCards from "./NewYorkCards";
import Footer from "../../components/Footer";
function NewYork(){
    return(
        <>
            <Navbar/>
            <BHead/>
            <NCards/>
            <Footer/>
        </>
    )
}
export default NewYork;