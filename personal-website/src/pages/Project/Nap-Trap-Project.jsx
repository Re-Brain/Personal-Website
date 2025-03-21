import React from "react";
import img from "../../assets/images/NapTrap_Main_Menu.png"

function Plantdatabase()
{
    return (
        <div className="project-container">
            <div className="project-display">
                <img className="project-img-mobile"src={img} alt="The main page of the nap trap application" loading="lazy"/>
           </div>
           
           <div className="project-detail">
                <p className="project-header">Nap Trap Project - Driver Drowsiness Detection System</p>

                <br/>

                <p className="project-content">
                    The Nap Trap Project purpose is to create a product that help prevent driver from getting into an accident due to his/her drowsiness. 
                    The device will be attached to the user, and if the device detect drowsiness. The mobile application will warn the user about his/her condition, 
                    and will warn the user if the device detect drowsiness for multiple times.
                </p>

                <br/>

                <p className="project-content">
                    This is the front-end of the mobile application for the Nap Trap Project (Driver Drowsiness Detection System). 
                    I used React Native to build front-end of the mobile application, and utilized Expo, 
                    which provided a set of pre-configured libraries and components that allowed for rapid prototyping and efficient deployment of the app.
                </p>

                <br/>
                
                <p className="project-tech">Mobile Development Framework: React Native</p>
                <p className="project-tech">Development Tool: Expo</p>
                
                <br/>

                <p className="project-tech">
                    <a href="https://github.com/Re-Brain/Nap-Trap_Project" target="_blank" rel="noopener noreferrer">
                        <i className="fa-brands fa-github"></i>
                    </a>
                </p>
           </div>
           
          
        </div>
    )
}

export default Plantdatabase;