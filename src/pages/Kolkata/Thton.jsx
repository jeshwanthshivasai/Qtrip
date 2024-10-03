import React, { useEffect, useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
function Thton(){
    const [state,setState] = useState([]);
    useEffect(()=>{
        fetch("https://content-qtripdynamic-qa-backend.azurewebsites.net//api/v1/adventures/detail?adventure=8318638903")
        .then(res=>res.json())
        .then(data=>{
            setState([data]);
            console.log(data);   
        });
    },[])
    return(
        <>
        <div id="niaboy">
            {state.map(item=>{
                return(
                     <>
                        <div id="carousel">
                            <h1 id="ni-i">Thton</h1>
                            <p>This is a mind-blowing adventure!</p>
                            <div id='car1'>
                                <Carousel>
                                    <img src={item.images[0]} alt={item.city}/>
                                    <img src={item.images[1]} alt={item.city}/>
                                    <img src={item.images[2]} alt={item.city}/>
                                </Carousel>
                            </div>
                            <hr style={{marginBottom:"10px"}}/>
                            <h2>About the Experience</h2>
                            <p>A random paragraph can also be an excellent way for a writer to tackle writers' block. Writing block can often happen due to being stuck with a current project that the writer is trying to complete. By inserting a completely random paragraph from which to begin, it can take down some of the issues that may have been causing the writers' block in the first place. A random paragraph can also be an excellent way for a writer to tackle writers' block. Writing block can often happen due to being stuck with a current project that the writer is trying to complete. By inserting a completely random paragraph from which to begin, it can take down some of the issues that may have been causing the writers' block in the first place. A random paragraph can also be an excellent way for a writer to tackle writers' block. Writing block can often happen due to being stuck with a current project that the writer is trying to complete. By inserting a completely random paragraph from which to begin, it can take down some of the issues that may have been causing the writers' block in the first place. A random paragraph can also be an excellent way for a writer to tackle writers' block. Writing block can often happen due to being stuck with a current project that the writer is trying to complete. By inserting a completely random paragraph from which to begin, it can take down some of the issues that may have been causing the writers' block in the first place. A random paragraph can also be an excellent way for a writer to tackle writers' block. Writing block can often happen due to being stuck with a current project that the writer is trying to complete. By inserting a completely random paragraph from which to begin, it can take down some of the issues that may have been causing the writers' block in the first place. A random paragraph can also be an excellent way for a writer to tackle writers' block. Writing block can often happen due to being stuck with a current project that the writer is trying to complete. By inserting a completely random paragraph from which to begin, it can take down some of the issues that may have been causing the writers' block in the first place.</p>
                        </div>
                    </>
                )
            })}
        </div>
        </>
    )
}
export default Thton;