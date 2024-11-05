import React from "react";
import img from "../../images/aora.jpg"

function Aora()
{
    return (
        <div className="project-container">
            <div className="project-display">
                <img loading="lazy" className="project-img project-img-aora"src={img} alt="Comparison between two faces"/>
            </div>
            <div className="project-detail">
                <p className="project-header">Introduction to Image Processing Term Project</p>
                <p className="project-content">
                    This mobile application enables users to share AI-generated videos along with 
                    the prompts used for their creation. Built with React Native, the app 
                    includes a video upload feature, authentication system, and search engine 
                    to search for a video. All user data is securely stored using the Appwrite 
                    backend database.
                </p>
                <p className="project-tech">Mobile Development : React Native, Native Wind</p>
                <p className="project-tech">Backend Database : Appwrite</p>
                <p className="project-tech">
                    <a href="https://github.com/Re-Brain/Aora?tab=readme-ov-file" target="_blank" rel="noopener noreferrer">
                        <i className="fa-brands fa-github"></i>
                    </a>
                </p>
            </div>
            
     </div>
    )
}

export default Aora;