import React from "react";
import img from "../../assets/images/eCommerce.png"

function SwiftUI()
{
    return (
        <div className="project-container">
            <div className="project-display">
                <img className="project-img"src={img} alt="Display All item page in the application" loading="lazy"
                style={{}}/>
           </div>
            <div className="project-detail">
                <p className="project-header">APPs for Mobile Platforms Term Project</p>

                <br/>

                <p className="project-content">
                    Develop the front-end application for a mobile e-commerce platform specifically for 
                    IOS. The application will feature functionality for displaying and searching all 
                    available items. Users can select their desired products, which will be stored in 
                    a shopping basket for convenient checkout. Additionally, the app will enable user 
                    registration and management, allowing for user to create multiple account with 
                    different address and the ability to update user information.
                </p>

                <br/>

                <p className="project-tech">Mobile Development Framework : SwiftUI</p>

                <br/>

                <p className="project-tech">
                    <a href="https://github.com/Re-Brain/E-Commerce-SwiftUI" target="_blank" rel="noopener noreferrer">
                        <i className="fa-brands fa-github"></i>
                    </a>
                    <a href="https://www.youtube.com/watch?v=hQZAO2qkP20" target="_blank" rel="noopener noreferrer">
                        <i className="fa-solid fa-video"></i>
                    </a>
                </p>
            </div>
            
     </div>
    )
}

export default SwiftUI;