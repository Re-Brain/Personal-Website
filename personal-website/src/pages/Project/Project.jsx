import React from "react";
import ProjectCard from "./ProjectCard";
import CS50 from "./CS50";

import '../../assets/styles/project.css';

// Import all project images
import airGuitarImg1 from "../../assets/images/Air_Guitar_Main_Menu.png"
import airGuitarImg2 from "../../assets/images/Air_Guitar_Chord_Introduction.png"
import airGuitarImg3 from "../../assets/images/Air_Guitar_Game_Menu.png"
import airGuitarImg4 from "../../assets/images/Air_Guitar_Video_Tutorial.png"
import airGuitarImg5 from "../../assets/images/Air_Guitar_Game_Mode.png"

import napTrapImg1 from "../../assets/images/NapTrap_Main_Menu.png"
import napTrapImg2 from "../../assets/images/NapTrap_Detecting.png"
import napTrapImg3 from "../../assets/images/NapTrap_Fatigue_Detected.png"

import plantImg1 from "../../assets/images/PlantDBS.png"
import plantImg2 from "../../assets/images/addData.png"
import plantImg3 from "../../assets/images/adminDashboard.png"
import plantImg4 from "../../assets/images/allPlant.png"
import plantImg5 from "../../assets/images/home.png"

import milkVideo from "../../assets/images/MILK.mp4"

import swiftImg1 from "../../assets/images/eCommerce.png"
import swiftImg2 from "../../assets/images/editPage.png"
import swiftImg3 from "../../assets/images/cartPage.png"
import swiftImg4 from "../../assets/images/addPage.png"
import swiftImg5 from "../../assets/images/userPage.png"

import faceMatchingImg from "../../assets/images/notInDataImage.png"

function Project()
{
    // Air Guitar Project data
    const airGuitarData = {
        title: "Air Guitar Gloves Project – Hardware-based Guitar Simulation with Interactive Gloves and Mobile Game Integration",
        paragraphs: [
            "The Air Guitar Gloves Project is the second project that I work on during my internship in Taiwan Textile Research Institution. The aim of the project is to create a product that can help people to learn guitar without needing to learn it.",
            "We create a simulation gloves the simulate a guitar by having the left hand simulate chord pressing, and the right hand simulate the strumming. The detected data from both hand will be send to the mobile game application that can teach the user how to play guitar. The mobile game has a total 3 modes which are tutorial mode, game mode, and performance mode.",
            "Tutorial mode focus minty on teaching user how to play guitar in multiple lessons (chord introduction, strumming pattern, etc.) with a video player. Game mode contains all the game from the tutorial mode without having to watch a tutorial video in the tutorial mode. Performance mode allow user to play the simulate gloves along with the song until the end of the song."
        ],
        techStack: ["Game Engine: Unity"],
        links: [{ url: "https://drive.google.com/drive/folders/1gPHkn5uU92UkfjOabdwjYBLMFmYgZfjt?usp=sharing", icon: "fa-brands fa-google-drive" }],
        images: [
            { src: airGuitarImg1, alt: "The main page of the game" },
            { src: airGuitarImg2, alt: "This is the menu page where user can select the chord that user want to learn" },
            { src: airGuitarImg3, alt: "This is the menu page for user to select the game that he/she want to play" },
            { src: airGuitarImg4, alt: "This is the page where user can watch the video tutorial of the chord" },
            { src: airGuitarImg5, alt: "This is the page of how to game will look like at the start" }
        ],
        imageClassName: "project-img-mobile"
    };

    // Nap Trap Project data
    const napTrapData = {
        title: "Nap Trap Project - Driver Drowsiness Detection System",
        paragraphs: [
            "The Nap Trap Project purpose is to create a product that help prevent driver from getting into an accident due to his/her drowsiness. The device will be attached to the user, and if the device detect drowsiness. The mobile application will warn the user about his/her condition, and will warn the user if the device detect drowsiness for multiple times.",
            "This is the front-end of the mobile application for the Nap Trap Project (Driver Drowsiness Detection System). I used React Native to build front-end of the mobile application, and utilized Expo, which provided a set of pre-configured libraries and components that allowed for rapid prototyping and efficient deployment of the app."
        ],
        techStack: ["Mobile Development Framework: React Native", "Development Tool: Expo"],
        links: [{ url: "https://github.com/Re-Brain/Nap-Trap_Project", icon: "fa-brands fa-github" }],
        images: [
            { src: napTrapImg1, alt: "The main page that explain the detail of the plant" },
            { src: napTrapImg2, alt: "This is the page where the admin use to add more information into the plant" },
            { src: napTrapImg3, alt: "This is the page where the admin can see the admin dashboard" }
        ],
        imageClassName: "project-img-mobile"
    };

    // Plant Database Project data
    const plantDatabaseData = {
        title: "Rajamangalaphisek Education Park Plant Database",
        paragraphs: [
            "The plant database system is divided into two components: the User Experience and the Administration System.",
            "<b>User Experience :</b><br/><br/>This interface allows users to explore over 100 plants collection through various views, including a standard list, a letter index list, and a family index list. Users can search for plant information using a basic search or an advanced search, where they can input details like common name, scientific name, or family name.",
            "<b>Administration System :</b><br/><br/>This system enables administrators to efficiently add new plants, update existing plant data, and delete plant records. This functionality supports the effective management of plant information at Rajamangalaphisek Education Park, Sukhothai Thammathirat Open University."
        ],
        techStack: ["Frontend: HTML, CSS, JavaScript", "Backend: Django", "Database: MySQL"],
        links: [
            { url: "https://github.com/Re-Brain/PlantDatabase", icon: "fa-brands fa-github" },
            { url: "https://www.youtube.com/watch?v=vVvWTs1bCO0", icon: "fa-solid fa-video" }
        ],
        images: [
            { src: plantImg1, alt: "The main page that explain the detail of the plant" },
            { src: plantImg2, alt: "This is the page where the admin use to add more information into the plant" },
            { src: plantImg3, alt: "This is the page where the admin can see the admin dashboard" },
            { src: plantImg4, alt: "This is the page that display multiple plant" },
            { src: plantImg5, alt: "This is the home page of the website" }
        ]
    };

    // MILK Project data
    const milkData = {
        title: "Third Year Project : Management and Identification for Livestock Keeping",
        paragraphs: [
            "The project aims to support farmers by integrating advanced technology into livestock management through a comprehensive system that includes cattle tracking, cattle counting, and cattle facial identification.<br/><br/>My role involved training a cow face detection model and a classification model using YOLOv8, and Tensorflow model to accurately identify individual cattle based on their facial features. I am able to achieve approximately 95% accuracy in distinguishing between 7 individual cattle based on facial features.<br/><br/>Additionally, I developed a user-friendly website that allows users to upload videos for automated cattle counting and facial identification, streamlining the management and monitoring processes for farmers. A video demonstrating all the functionalities of this project can be viewed on the google drive link below."
        ],
        techStack: ["Machine Learning Framwork : Tensorflow", "Tools: Jupyter Notebook, Google Colab"],
        links: [{ url: "https://drive.google.com/drive/u/0/folders/1yAZD5dt-co4C_id_0BRcQYRt1zgliCd3", icon: "fa-brands fa-google-drive" }],
        videoSrc: milkVideo,
        images: []
    };

    // SwiftUI Project data
    const swiftUIData = {
        title: "APPs for Mobile Platforms Term Project",
        paragraphs: [
            "Develop the front-end application for a mobile e-commerce platform specifically for IOS. The application will feature functionality for displaying and searching all available items. Users can select their desired products, which will be stored in a shopping basket for convenient checkout. Additionally, the app will enable user registration and management, allowing for user to create multiple account with different address and the ability to update user information."
        ],
        techStack: ["Mobile Development Framework : SwiftUI"],
        links: [
            { url: "https://github.com/Re-Brain/E-Commerce-SwiftUI", icon: "fa-brands fa-github" },
            { url: "https://www.youtube.com/watch?v=hQZAO2qkP20", icon: "fa-solid fa-video" }
        ],
        images: [
            { src: swiftImg1, alt: "The main page of the mobile e commerce website" },
            { src: swiftImg2, alt: "This is the page where user can edit their user information" },
            { src: swiftImg3, alt: "This is the page that display all the item that you put in your cart" },
            { src: swiftImg4, alt: "This is the page where you can add more user location" },
            { src: swiftImg5, alt: "This is the page where you can see all the user location information" }
        ],
        imageClassName: "project-img-mobile"
    };

    // Face Matching Project data
    const faceMatchingData = {
        title: "Face-Matching-Program",
        paragraphs: [
            "Create a face-matching program to determine whether or not the provided image is in the database. Indicate the identity of the person in the picture if it is contained within the database. Indicate which individual in the photo is similar to which person in the database if the image is not contained in the database."
        ],
        techStack: ["Programming Language : Python", "Tools : matplotlib, cv2, numpy"],
        links: [{ url: "https://github.com/Re-Brain/Face-Matching-Program", icon: "fa-brands fa-github" }],
        images: [{ src: faceMatchingImg, alt: "The main page of the air guitar mobile game" }]
    };

    return (
        <div id="project-container">
            <div>
                <div className="project-page-header-container">
                    <div className="project-page-header-line"></div>
                    <h1 className="project-page-header-title">Projects</h1>
                    <div className="project-page-header-line"></div>
                </div>
                
                <ProjectCard {...airGuitarData} />
                <ProjectCard {...napTrapData} />
                <ProjectCard {...plantDatabaseData} />
                <ProjectCard {...milkData} />
                <ProjectCard {...swiftUIData} />
                <ProjectCard {...faceMatchingData} />
                
                <CS50/>
            </div>
        </div>
    )
}

export default Project;