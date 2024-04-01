import React from "react";
import Plantdatabase from "./Plantdatabase";
import MILK from "./MILK";
import CS50 from "./CS50";
import SwiftUI from "./SwiftUI";
import Imageprocessing from "./Imageprocessing";

function Work()
{
    return (
        <div id="work-container">
            <div>
                <p id="work-header">Work</p>
                <Plantdatabase/>
                <MILK/>
                <SwiftUI/>
                <Imageprocessing/>
                <CS50/>
            </div>
           
        </div>
    )
}

export default Work;