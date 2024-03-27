import React from "react";
import Profilepic from "../components/Profilepic" 
import Profiletext from "../components/Profiletext";

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