import React from "react";
import video from "../../assets/images/MILK.mp4"

function MILK()
{
    return (
        <div className="project-container">
            <div className="project-display">
                <video controls width="600" height="300">
                    <source className="project-video" src={video} type="video/mp4"></source>
                </video>
           </div>

           <div className="project-detail">
                <p className="project-header">Third Year Project : Management and Identification for Livestock Keeping</p>
                
                <br/>

                <p className="project-content">

                The project aims to support farmers by integrating advanced technology 
                into livestock management through a comprehensive system that includes 
                cattle tracking, cattle counting, and cattle facial identification.

                <br/>
                <br/>

                My role involved training a cow face detection model and a classification 
                model using YOLOv8, and Tensorflow model to accurately identify individual cattle based on their 
                facial features. I am able to achieve approximately 95% accuracy in distinguishing between 
                7 individual cattle based on facial features.

                <br/>
                <br/>
                
                Additionally, I developed a user-friendly website that allows 
                users to upload videos for automated cattle counting and facial identification, 
                streamlining the management and monitoring processes for farmers. A video 
                demonstrating all the functionalities of this project can be viewed on the 
                google drive link below.
                    
                </p>

                <br/>

                <p className="project-tech">Machine Learning Framwork : Tensorflow</p>
                <p className="project-tech">Tools: Jupyter Notebook, Google Colab</p>

                <br/>

                <p className="project-tech">
                    <a href="https://drive.google.com/drive/u/0/folders/1yAZD5dt-co4C_id_0BRcQYRt1zgliCd3" target="_blank" rel="noopener noreferrer">
                        <i className="fa-brands fa-google-drive"></i>
                    </a>
                </p>
           </div>

           
           
        </div>
    )
}

export default MILK;