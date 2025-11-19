import React, { useState } from "react";

import img1 from "../../assets/images/NapTrap_Main_Menu.png"
import img2 from "../../assets/images/NapTrap_Detecting.png"
import img3 from "../../assets/images/NapTrap_Fatigue_Detected.png"

function Plantdatabase() {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const images = [
        { src: img1, alt: "The main page that explain the detail of the plant" },
        { src: img2, alt: "This is the page where the admin use to add more information into the plant" },
        { src: img3, alt: "This is the page where the admin can see the admin dashboard" },
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
                    className="project-img-mobile"
                    src={images[currentImageIndex].src}
                    alt={images[currentImageIndex].alt}
                    loading="lazy"
                />
                <button className="carousel-btn next" onClick={nextImage}>❯</button>
            </div>

            <div className="project-detail">
                <p className="project-header">Nap Trap Project - Driver Drowsiness Detection System</p>

                <br />

                <p className="project-content">
                    The Nap Trap Project purpose is to create a product that help prevent driver from getting into an accident due to his/her drowsiness.
                    The device will be attached to the user, and if the device detect drowsiness. The mobile application will warn the user about his/her condition,
                    and will warn the user if the device detect drowsiness for multiple times.
                </p>

                <br />

                <p className="project-content">
                    This is the front-end of the mobile application for the Nap Trap Project (Driver Drowsiness Detection System).
                    I used React Native to build front-end of the mobile application, and utilized Expo,
                    which provided a set of pre-configured libraries and components that allowed for rapid prototyping and efficient deployment of the app.
                </p>

                <br />

                <p className="project-tech">Mobile Development Framework: React Native</p>
                <p className="project-tech">Development Tool: Expo</p>

                <br />

                <p className="project-tech">
                    <a href="https://github.com/Re-Brain/Nap-Trap_Project" target="_blank" rel="noopener noreferrer">
                        <i className="fa-brands fa-github"></i>
                    </a>
                </p>
            </div>


        </div>
    )
}

export default Plantdatabase;