import React from "react";
import img from "../../images/faceSimilarity.png"

function Imageprocessing()
{
    return (
        <div className="project-container">
            <div className="project-right-display">
                <img className="project-img"src={img} alt="Comparison between two faces"/>
            </div>
            <div className="project-right-detail">
                <p className="project-header">Introduction to Image Processing Term Project</p>
                <p className="project-content">
                    Make a face-matching program to determine whether or not the provided image is in the database. 
                    Indicate the identity of the person in the picture if it is contained within the database. 
                    Indicate which individual in the photo is similar to which person in the database if the image is not contained in the database.
                </p>
                <p className="project-tech">Language : Python</p>
                <p className="project-tech">Library : OpenCV, Matplotlib, NumPy</p>
                <p className="project-tech">
                    <a href="https://github.com/Re-Brain/Face-Matching-Program" target="_blank" rel="noopener noreferrer">
                        <i class="fa-brands fa-github"></i>
                    </a>
                </p>
            </div>
            
     </div>
    )
}

export default Imageprocessing;