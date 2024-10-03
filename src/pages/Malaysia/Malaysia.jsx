import React from "react";
import Navbar from "../../components/Navbar";
import BHead from "../Bengaluru/BHead";
import MCards from "./MalaysiaCards";
import Footer from "../../components/Footer";
function Malaysia(){
    return(
        <>
            <Navbar/>
            <BHead/>
            <MCards/>
            <Footer/>
        </>
    )
}
export default Malaysia;