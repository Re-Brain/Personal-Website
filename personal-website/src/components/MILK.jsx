import React from "react";
import video from "../images/MILK.mp4"

function MILK()
{
    return (
        <div className="project-container">
            <div className="project-right-display">
                <video controls width="600" height="300">
                    <source className="project-video" src={video} type="video/mp4"></source>
                </video>
           </div>
           <div className="project-right-detail">
                <p className="project-header">Third Year Project</p>
                <p className="project-header">Management and Identification for Livestock Keeping</p>
                <p className="project-content">
                    Responsible for training a cow face detection model using YOLOV8 and classification model to identify the ID based on the detcted face.
                </p>
                <p className="project-tech">Machine Learning Framwork : Tensorflow</p>
                <p className="project-tech">Tools: Jupyter Notebook, Google Colab</p>
           </div>
           
     </div>
    )
}

export default MILK;