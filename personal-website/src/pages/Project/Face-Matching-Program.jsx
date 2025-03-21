import React from "react";
import img from "../../assets/images/notInDataImage.png"

function Plantdatabase()
{
    return (
        <div className="project-container">
            <div className="project-display">
                <img className="project-img" src={img} alt="The main page of the air guitar mobile game" loading="lazy"/>
           </div>
           
           <div className="project-detail">
                <p className="project-header">Face-Matching-Program</p>

                <br/>

                <p className="project-content">
                    Create a face-matching program to determine whether or not the provided image is in the database. 
                    Indicate the identity of the person in the picture if it is contained within the database. 
                    Indicate which individual in the photo is similar to which person in the database if the image is not contained in the database.
                </p>

                <br/>
  
                <p className="project-tech">Programming Language : Python</p>
                <p className="project-tech">Tools : matplotlib, cv2, numpy</p>
                
                <br/>

                <p className="project-tech">
                    <a href="https://github.com/Re-Brain/Face-Matching-Program" target="_blank" rel="noopener noreferrer">
                        <i className="fa-brands fa-github"></i>
                    </a>
                </p>
           </div>
           
          
        </div>
    )
}

export default Plantdatabase;