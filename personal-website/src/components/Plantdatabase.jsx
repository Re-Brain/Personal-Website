import React from "react";
import img from "../images/PlantDBS.png"

function Plantdatabase()
{
    return (
        <div className="project-container">
           <div className="project-left-detail">
                <p className="project-header">Rajamangalaphisek Education Park Plant Database</p>
                <p className="project-content">
                    Create a plant database with an administration system that enables users to add new plants,
                     amend current plant data, and remove plant records for the Rajamangalaphisek Education Park 
                     at Sukhothai Thammathirat Open University.
                </p>
                <p className="project-tech">Frontend: HTML, CSS, JavaScript</p>
                <p className="project-tech">Backend: Django</p>
                <p className="project-tech">Database: MySQL</p>
           </div>
           <div className="project-right-display">
                <img className="project-img"src={img} alt="One of the data inside the database"/>
           </div>
          
        </div>
    )
}

export default Plantdatabase;