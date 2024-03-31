import React from "react";
import img from "../images/faceSimilarity.png"

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
                    Create a face-matching program in Python using the OpenCV, Matplotlib, and NumPy frameworks.
                </p>
                <p className="project-tech">Language : Python</p>
                <p className="project-tech">Library : OpenCV, Matplotlib, NumPy</p>
            </div>
            
     </div>
    )
}

export default Imageprocessing;