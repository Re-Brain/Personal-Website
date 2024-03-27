import React from "react";
import Plantdatabase from "./Plantdatabase";
import MILK from "./MILK";
import CS50 from "./CS50";

function Work()
{
    return (
        <div id="work-container">
            <div>
                <p id="work-header">Work</p>
                <Plantdatabase/>
                <MILK/>
                <CS50/>
            </div>
           
        </div>
    )
}

export default Work;