import React from "react";
import img from "../../assets/images/PlantDBS.png"

function Plantdatabase()
{
    return (
        <div className="project-container">
            <div className="project-display">
                <img className="project-img"src={img} alt="One of the data inside the database" loading="lazy"/>
           </div>
           
           <div className="project-detail">
                <p className="project-header">Rajamangalaphisek Education Park Plant Database</p>

                <br/>

                <p className="project-content">
                    The plant database system is divided into two components: 
                    the User Experience and the Administration System.
                </p>

                <br/>

                <p className="project-content">
                    <b>User Experience :</b> 
                    <br/>
                    <br/>
                    This interface allows users to explore over 100 plants collection through various views, 
                    including a standard list, a letter index list, and a family index list. 
                    Users can search for plant information using a basic search or an advanced search, 
                    where they can input details like common name, scientific name, or family name.
                </p>

                <br/>

                <p className="project-content">
                    <b>Administration System :</b> 
                    <br/>
                    <br/>
                    This system enables administrators to 
                    efficiently add new plants, update existing plant data, and delete plant records. 
                    This functionality supports the effective management of plant information at Rajamangalaphisek Education Park, 
                    Sukhothai Thammathirat Open University.
                </p>

                <br/>
                
                <p className="project-tech">Frontend: HTML, CSS, JavaScript</p>
                <p className="project-tech">Backend: Django</p>
                <p className="project-tech">Database: MySQL</p>

                <br/>

                <p className="project-tech">
                    <a href="https://github.com/Re-Brain/PlantDatabase" target="_blank" rel="noopener noreferrer">
                        <i className="fa-brands fa-github"></i>
                    </a>
                    <a href="https://www.youtube.com/watch?v=vVvWTs1bCO0" target="_blank" rel="noopener noreferrer">
                        <i className="fa-solid fa-video"></i>
                    </a>
                </p>
           </div>
           
          
        </div>
    )
}

export default Plantdatabase;