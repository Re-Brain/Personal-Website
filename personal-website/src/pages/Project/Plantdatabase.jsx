import React, { useState } from "react";

import img1 from "../../assets/images/PlantDBS.png"
import img2 from "../../assets/images/addData.png"
import img3 from "../../assets/images/adminDashboard.png"
import img4 from "../../assets/images/allPlant.png"
import img5 from "../../assets/images/home.png"

function Plantdatabase() {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const images = [
        { src: img1, alt: "The main page that explain the detail of the plant" },
        { src: img2, alt: "This is the page where the admin use to add more information into the plant" },
        { src: img3, alt: "This is the page where the admin can see the admin dashboard" },
        { src: img4, alt: "This is the page that display multiple plant" },
        { src: img5, alt: "This is the home page of the website" }
    ];

    const nextImage = () => {
        setCurrentImageIndex((prevIndex) =>
            prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
    };

    const prevImage = () => {
        setCurrentImageIndex((prevIndex) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    };

    return (
        <div className="project-container">

            <div className="project-display">
                <button className="carousel-btn prev" onClick={prevImage}>❮</button>
                <img
                    className="project-img"
                    src={images[currentImageIndex].src}
                    alt={images[currentImageIndex].alt}
                    loading="lazy"
                />
                <button className="carousel-btn next" onClick={nextImage}>❯</button>
            </div>
           
            <div className="project-detail">
                <p className="project-header">Rajamangalaphisek Education Park Plant Database</p>

                <br />

                <p className="project-content">
                    The plant database system is divided into two components:
                    the User Experience and the Administration System.
                </p>

                <br />

                <p className="project-content">
                    <b>User Experience :</b>
                    <br />
                    <br />
                    This interface allows users to explore over 100 plants collection through various views,
                    including a standard list, a letter index list, and a family index list.
                    Users can search for plant information using a basic search or an advanced search,
                    where they can input details like common name, scientific name, or family name.
                </p>

                <br />

                <p className="project-content">
                    <b>Administration System :</b>
                    <br />
                    <br />
                    This system enables administrators to
                    efficiently add new plants, update existing plant data, and delete plant records.
                    This functionality supports the effective management of plant information at Rajamangalaphisek Education Park,
                    Sukhothai Thammathirat Open University.
                </p>

                <br />

                <p className="project-tech">Frontend: HTML, CSS, JavaScript</p>
                <p className="project-tech">Backend: Django</p>
                <p className="project-tech">Database: MySQL</p>

                <br />

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