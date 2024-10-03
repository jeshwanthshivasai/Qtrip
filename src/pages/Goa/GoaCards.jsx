import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../../styles/bangaluru/subcards.css"
function GCards(){
    const [state,setState] = useState([]);
    useEffect(()=>{
        fetch("https://content-qtripdynamic-qa-backend.azurewebsites.net//api/v1/adventures?city=goa")
        .then(res=>res.json())
        .then(res=>{
            setState(res);
            console.log(res);
            
        });
    },[])
    return(
        <>
        <div id="bc-container">
            {state.map(item=>{
                return(
                    <div id="bcd" >
                    <Link key={item.id} to={item.id}> <img src={item.image} alt={item.name}></img> </Link>
                    <p id="bp1">{item.category}</p>
                    <div id='dt1'>
                      <span>{item.name}</span>
                      <span>{item.costPerHead}</span>
                    </div>
                    <div id='dt2'>
                      <span>Duration</span>
                      <span >{item.duration}&nbsp;Hours</span>
                    </div>
                </div>
                )
            })}
        </div>
        </>
    )
}
export default GCards;