import React from "react";
import Plantdatabase from "./Plantdatabase";
import MILK from "./MILK";
import CS50 from "./CS50";
import SwiftUI from "./SwiftUI";
import NapTrap from "./Nap-Trap-Project"
import AirGuitar from "./Air-Guitar-Project"
import FaceMatching from "./Face-Matching-Program"

import '../../assets/styles/project.css';

function project()
{
    return (
        <div id="project-container">
            <div>
                <p id="project-header">Projects</p>
                <AirGuitar/>
                <NapTrap/>
                <Plantdatabase/>
                <MILK/>
                <SwiftUI/>
                <FaceMatching/>
                <CS50/>
            </div>
           
        </div>
    )
}

export default project;