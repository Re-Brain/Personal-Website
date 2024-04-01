import React from "react";
import Profilepic from "./Profilepic" 
import Profiletext from "./Profiletext";

function Home()
{
    return (
        <div id="home-container">
            <Profilepic />
            <Profiletext />
        </div>
    )
}

export default Home;