import React from "react";
import img from "../images/PlantDBS.png"

function Plantdatabase()
{
    return (
        <div className="project-container">
           <div className="project-left-detail">
                <p className="project-header">Rajamangalaphisek Education Park Plant Database</p>
                <p className="project-content">
                        Design a plant database for Rajamangalaphisek Education Park at Sukhothai Thammathirat Open University, 
                        complete with an administration system allowing for functions such as adding new plants, editing existing plant data, 
                        and deleting plant records.
                </p>
                <p className="project-tech">Frontend: HTML, CSS, JavaScript</p>
                <p className="project-tech">Backend: Django</p>
                <p className="project-tech">Database: MySQL</p>
           </div>
           <div className="project-right-display">
                <img className="project-img"src={img}/>
           </div>
          
        </div>
    )
}

export default Plantdatabase;