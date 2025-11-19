import React, { useState } from "react";

import img1 from "../../assets/images/eCommerce.png"
import img2 from "../../assets/images/editPage.png"
import img3 from "../../assets/images/cartPage.png"
import img4 from "../../assets/images/addPage.png"
import img5 from "../../assets/images/userPage.png"

function SwiftUI() {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const images = [
        { src: img1, alt: "The main page of the mobile e commerce website" },
        { src: img2, alt: "This is the page where user can edit their user information" },
        { src: img3, alt: "This is the page that display all the item that you put in your cart" },
        { src: img4, alt: "This is the page where you can add more user location" },
        { src: img5, alt: "This is the page where you can see all the user location information" }
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
                <p className="project-header">APPs for Mobile Platforms Term Project</p>

                <br />

                <p className="project-content">
                    Develop the front-end application for a mobile e-commerce platform specifically for
                    IOS. The application will feature functionality for displaying and searching all
                    available items. Users can select their desired products, which will be stored in
                    a shopping basket for convenient checkout. Additionally, the app will enable user
                    registration and management, allowing for user to create multiple account with
                    different address and the ability to update user information.
                </p>

                <br />

                <p className="project-tech">Mobile Development Framework : SwiftUI</p>

                <br />

                <p className="project-tech">
                    <a href="https://github.com/Re-Brain/E-Commerce-SwiftUI" target="_blank" rel="noopener noreferrer">
                        <i className="fa-brands fa-github"></i>
                    </a>
                    <a href="https://www.youtube.com/watch?v=hQZAO2qkP20" target="_blank" rel="noopener noreferrer">
                        <i className="fa-solid fa-video"></i>
                    </a>
                </p>
            </div>

        </div>
    )
}

export default SwiftUI;