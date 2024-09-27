import React from "react";
import Plantdatabase from "./Plantdatabase";
import MILK from "./MILK";
import CS50 from "./CS50";
import SwiftUI from "./SwiftUI";
import Aora from "./Aora";

function project()
{
    return (
        <div id="project-container">
            <div>
                <p id="project-header">Projects</p>
                <Plantdatabase/>
                <MILK/>
                <SwiftUI/>
                <Aora/>
                <CS50/>
            </div>
           
        </div>
    )
}

export default project;