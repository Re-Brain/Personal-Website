import React, { useState } from "react";

import img1 from "../../assets/images/Air_Guitar_Main_Menu.png"
import img2 from "../../assets/images/Air_Guitar_Chord_Introduction.png"
import img3 from "../../assets/images/Air_Guitar_Game_Menu.png"
import img4 from "../../assets/images/Air_Guitar_Video_Tutorial.png"
import img5 from "../../assets/images/Air_Guitar_Game_Mode.png"

function Plantdatabase() {

    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const images = [
        { src: img1, alt: "The main page of the game" },
        { src: img2, alt: "This is the menu page where user can select the chord that user want to learn" },
        { src: img3, alt: "This is the menu page for user to select the game that he/she want to play" },
        { src: img4, alt: "This is the page where user can watch the video tutorial of the chord" },
        { src: img5, alt: "This is the page of how to game will look like at the start" },
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
                <p className="project-header">Air Guitar Gloves Project – Hardware-based Guitar Simulation with Interactive Gloves and Mobile Game Integration</p>

                <br />

                <p className="project-content">
                    The Air Guitar Gloves Project is the second project that I work on during my internship in Taiwan Textile Research Institution.
                    The aim of the project is to create a product that can help people to learn guitar without needing to learn it.
                </p>

                <br />

                <p className="project-content">
                    We create a simulation gloves the simulate a guitar by having the left hand simulate chord pressing, and the right hand simulate the strumming.
                    The detected data from both hand will be send to the mobile game application that can teach the user how to play guitar.
                    The mobile game has a total 3 modes which are tutorial mode, game mode, and performance mode.
                </p>

                <br />

                <p className="project-content">
                    Tutorial mode focus minty on teaching user how to play guitar in multiple lessons (chord introduction, strumming pattern, etc.)
                    with a video player. Game mode contains all the game from the tutorial mode without having to watch a tutorial video in the tutorial mode.
                    Performance mode allow user to play the simulate gloves along with the song until the end of the song.
                </p>

                <br />

                <p className="project-tech">Game Engine: Unity</p>

                <br />

                <p className="project-tech">
                    <a href="https://drive.google.com/drive/folders/1gPHkn5uU92UkfjOabdwjYBLMFmYgZfjt?usp=sharing" target="_blank" rel="noopener noreferrer">
                        <i className="fa-brands fa-google-drive"></i>
                    </a>
                </p>
            </div>


        </div>
    )
}

export default Plantdatabase;