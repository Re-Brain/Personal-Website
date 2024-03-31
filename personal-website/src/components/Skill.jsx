import React from "react";
import Skilllist from "./Skilllist";

import HTML from "../images/HTML.png";
import CSS from "../images/CSS.png";
import Javascript from "../images/JS.png";
import Reactlogo from "../images/React.png";
import Bootstrap from "../images/Bootstrap.png";
import Django from "../images/Django.png";
import Tensorflow from "../images/Tensorflow.png";
import MySQL from "../images/MySQL.png";
import C from "../images/C.png";
import CPP from "../images/C++.png";
import Python from "../images/Python.png";
import Git from "../images/Git.png";
import Github from "../images/Github.png";
import Jupyter from "../images/Jupyter.png";
import Googlecollab from "../images/GoogleCollab.png";
import SwiftUI from "../images/SwiftUI.png"

function Skill()
{
    const items = [
        {header : "Front-End", items : 
            [{name : "HTML", img : HTML},
             {name : "CSS", img : CSS},
             {name : "JavaScript", img : Javascript},
             {name : "React", img : Reactlogo},
             {name : "Bootstrap", img : Bootstrap}
        ]},
        {header : "Back-End", items : 
            [{name : "Django", img : Django},
        ]},
        {header : "Mobile-Development", items : 
            [{name : "SwiftUI", img : SwiftUI},
        ]},
        {header : "Machine Learning", items : 
            [{name : "Tensorflow", img : Tensorflow},
        ]},
        {header : "Database", items : 
            [{name : "MySQL", img : MySQL},
        ]},
        {header : "Programming Languages", items : 
            [{name : "C", img : C},
            {name : "C++", img : CPP},
            {name : "Python", img : Python}
        ]},
        {header : "Tools", items : 
            [{name : "Git", img : Git},
            {name : "Github", img : Github},
            {name : "Jupyter Notebook", img : Jupyter},
            {name : "Google Collab", img : Googlecollab}
        ]}
    ]

    return (
       <div id="skill-container">
            <div>
                <p id="skill-header">Skills</p>
                {
                    items.map((item, index) => {
                        return (
                            <Skilllist
                                key={index}
                                header={item.header}
                                items={item.items}
                            />
                        )
                    })
                }
            </div> 
       </div>
    )
}

export default Skill;