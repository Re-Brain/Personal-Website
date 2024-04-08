import React from "react";
// import img from "../../images/PlantDBS.png"

function SwiftUI()
{
    return (
        <div className="project-container">
            <div className="project-left-detail">
                <p className="project-header">APPs for Mobile Platforms Term Project</p>
                <p className="project-content">
                    Make the mobile e-commerce platform's front-end application. 
                    The program consists of displaying and searching every object within the program. 
                    The user has the option to select the desired item. 
                    Every item that has been chosen will be kept in the basket and be able to be shipped. 
                    Additionally, the application allows you to add users and change user data. 
                    It also supports multiple users. 
                </p>
                <p className="project-tech">Framework : SwiftUI</p>
                <p className="project-tech">
                    <a href="https://github.com/Re-Brain/E-Commerce-SwiftUI" target="_blank" rel="noopener noreferrer">
                        <i className="fa-brands fa-github"></i>
                    </a>
                </p>
            </div>
            <div className="project-right-display">
                {/* <img className="project-img"src={img} alt="Display All item page in the application" loading="lazy"/> */}
           </div>
     </div>
    )
}

export default SwiftUI;