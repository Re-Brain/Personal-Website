import React from "react";
import ProjectCard from "./ProjectCard";
import CS50 from "./CS50";
import { useLanguage } from "../../contexts/LanguageContext";
import translations from "../../translations.json";

import '../../assets/styles/project.css';

// Import all project images
import furlong1 from "../../assets/images/Furlong_Home.webp"
import furlong2 from "../../assets/images/Furlong_How_It_Works.webp"
import furlong3 from "../../assets/images/Furlong_Farms.webp"
import furlong4 from "../../assets/images/Furlong_Horses.webp"
import furlong5 from "../../assets/images/Furlong_Horse_Page.webp"
import furlong6 from "../../assets/images/Furlong_Farm_Page.webp"
import furlong7 from "../../assets/images/Furlong_Visitor_Bookings.webp"
import furlong8 from "../../assets/images/Furlong_Farm_Dashboard.webp"
import furlong9 from "../../assets/images/Furlong_Horse_Management.webp"

import umaDescendant1 from "../../assets/images/UmaDescendant_Home.webp"
import umaDescendant2 from "../../assets/images/UmaDescendant_Race_Card.webp"
import umaDescendant3 from "../../assets/images/UmaDescendant_Character_Filter.webp"
import umaDescendant4 from "../../assets/images/UmaDescendant_Subscriptions.webp"
import umaDescendant5 from "../../assets/images/UmaDescendant_Following.webp"
import umaDescendant6 from "../../assets/images/UmaDescendant_Email_Alert.webp"

import airGuitarImg1 from "../../assets/images/Air_Guitar_Main_Menu.webp"
import airGuitarImg2 from "../../assets/images/Air_Guitar_Chord_Introduction.webp"
import airGuitarImg3 from "../../assets/images/Air_Guitar_Game_Menu.webp"
import airGuitarImg4 from "../../assets/images/Air_Guitar_Video_Tutorial.webp"
import airGuitarImg5 from "../../assets/images/Air_Guitar_Game_Mode.webp"
import airGuitarGloves from "../../assets/images/Gloves.webp"

import napTrapImg1 from "../../assets/images/NapTrap_Main_Menu.webp"
import napTrapImg2 from "../../assets/images/NapTrap_Detecting.webp"
import napTrapImg3 from "../../assets/images/NapTrap_Fatigue_Detected.webp"

import plantImg1 from "../../assets/images/PlantDBS.webp"
import plantImg2 from "../../assets/images/addData.webp"
import plantImg3 from "../../assets/images/adminDashboard.webp"
import plantImg4 from "../../assets/images/allPlant.webp"
import plantImg5 from "../../assets/images/home.webp"

import milkVideo from "../../assets/images/MILK.mp4"

import swiftImg1 from "../../assets/images/eCommerce.webp"
import swiftImg2 from "../../assets/images/editPage.webp"
import swiftImg3 from "../../assets/images/cartPage.webp"
import swiftImg4 from "../../assets/images/addPage.webp"
import swiftImg5 from "../../assets/images/userPage.webp"

import faceMatchingImg from "../../assets/images/notInDataImage.webp"

import greenWaste1 from "../../assets/images/green-waste-1.webp"
import greenWaste2 from "../../assets/images/green-waste-2.webp"
import greenWaste3 from "../../assets/images/green-waste-3.webp"
import greenWaste4 from "../../assets/images/green-waste-4.webp"
import greenWaste5 from "../../assets/images/green-waste-5.webp"
import greenWaste6 from "../../assets/images/green-waste-6.webp"
import greenWaste7 from "../../assets/images/green-waste-7.webp"
import greenWaste8 from "../../assets/images/green-waste-8.webp"
import greenWaste9 from "../../assets/images/green-waste-9.webp"
import greenWaste10 from "../../assets/images/green-waste-10.webp"
import greenWaste11 from "../../assets/images/green-waste-11.webp"
import greenWaste12 from "../../assets/images/green-waste-12.webp"

function Project()
{
    const { language } = useLanguage();
    const t = translations[language].projects;

    // Furlong Project data
    const furlongData = {
        title: language === 'th' && t.furlong.fullTitle ? t.furlong.fullTitle : "Furlong: A Platform to Visit and Support Retired Racehorses",
        paragraphs: language === 'th' && t.furlong.paragraph1 ? [
            t.furlong.paragraph1,
            t.furlong.paragraph2,
            t.furlong.paragraph3
        ] : [
            "Furlong is a platform that follows racehorses after their careers end. Every year, many racehorses retire into the care of farms, whether they are out to pasture or still working at stud. Furlong lets people browse these farms and the champions who live there, book a visit to meet a retired racehorse in person, or donate to support a horse's day-to-day care from afar.",
            "<b>For visitors :</b><br/><br/>Visitors can browse the farms that are open to visitors and the horses living on them. Each horse has a profile with its color, date of birth, sex and pedigree (sire × dam), and each farm has a page with its location and photo gallery. After logging in with a visitor account, they can pick a time slot and the number of visitors to book a visit, cancel it from their bookings dashboard, manage their subscription, and donate to support a horse or a farm.",
            "<b>For farms :</b><br/><br/>Farms get their own dashboard to manage their profile and up to three photos, add and edit the horses they care for, set the days and times they are open for visits, manage visitor bookings, and see the donations they receive. Both farms and horses go through an approval step."
        ],
        techStack: [
            "Frontend: React, TypeScript, Tailwind CSS",
            "Backend: FastAPI (Python), SQLAlchemy",
            "Data: PostgreSQL, Redis",
            "DevOps: Docker, Nginx, AWS EC2, Cloudflare",
            "Services: Stripe, Resend, Cloudinary"
        ],
        links: [
            { url: "https://furlong.furlong-uma-project.site/", icon: "fa-solid fa-link" }
        ],
        images: [
            { src: furlong1, alt: "The Furlong home page with the tagline Life Beyond the Track" },
            { src: furlong2, alt: "The Furlong page that explains why it exists and how browsing, booking a visit and supporting a horse work" },
            { src: furlong3, alt: "The list of farms that are open to visitors" },
            { src: furlong4, alt: "The list of retired champion racehorses living on the farms" },
            { src: furlong5, alt: "A horse profile page showing its color, birth date and pedigree, with buttons to book a visit and support the horse" },
            { src: furlong6, alt: "A farm page showing its address and photo gallery, with a donate button" },
            { src: furlong7, alt: "The visitor dashboard where a visitor sees and cancels their confirmed bookings" },
            { src: furlong8, alt: "The farm dashboard where a farm edits its details and photos" },
            { src: furlong9, alt: "The farm dashboard's horse management table with approval status and add, edit and delete actions" }
        ],
        imageClassName: "project-img project-img-screenshot"
    };

    // Uma Descendant Project data
    const umaDescendantData = {
        title: language === 'th' && t.umaDescendant.fullTitle ? t.umaDescendant.fullTitle : "Uma Descendant: Finding Racehorses with an Umamusume Bloodline",
        paragraphs: language === 'th' && t.umaDescendant.paragraph1 ? [
            t.umaDescendant.paragraph1,
            t.umaDescendant.paragraph2,
            t.umaDescendant.paragraph3
        ] : [
            "Uma Descendant is an unofficial fan website for Umamusume: Pretty Derby players who also follow real horse racing. Every Umamusume character is named after a famous real racehorse, so the site answers one question: which horses racing this week descend from one of them?",
            "<b>What it does :</b><br/><br/>Each week the system collects the entered horses for the upcoming JRA races from netkeiba, checks every horse's pedigree, and matches the ancestors against the Umamusume characters. Only horses with a connection are kept. Users can browse the race card by day, track and race, and each runner is shown with tags naming the characters in its bloodline. Clicking a horse opens its full profile on netkeiba. A character filter lets users pick one or more characters, for example Gold Ship and Special Week, and see every descendant racing that week.",
            "<b>Accounts and alerts :</b><br/><br/>Users can sign in, follow the characters they care about, and turn on weekly email alerts. When a descendant of a followed character is racing, they receive one email that lists the horses by day, track and race number, with links to each runner. The data refreshes every week. This is an unofficial fan project and is not affiliated with Cygames, netkeiba or the JRA."
        ],
        techStack: [
            "Frontend & Backend: Next.js",
            "Authentication & User Database: Supabase (accounts and followed characters)",
            "Race & Pedigree Database: MongoDB",
            "Automation Scripts: Python (data collection and pedigree matching)",
            "Scheduler: GitHub Actions (runs the weekly jobs automatically at the times I set)",
            "Email Service: SendGrid (sending and monitoring the alert emails)",
            "Deployment: Vercel",
            "Domain, DNS & CDN: Cloudflare"
        ],
        links: [
            { url: "https://uma-descendant.furlong-uma-project.site/", icon: "fa-solid fa-link" }
        ],
        images: [
            { src: umaDescendant1, alt: "The Uma Descendant home page that explains what the site does and links to this week's races" },
            { src: umaDescendant2, alt: "The race card where users pick a day, track and race and see each runner's Umamusume characters" },
            { src: umaDescendant3, alt: "The character filter showing every horse racing this week that descends from Gold Ship or Special Week" },
            { src: umaDescendant4, alt: "The subscriptions page where users search and follow Umamusume characters and turn on email alerts" },
            { src: umaDescendant5, alt: "The subscriptions page showing the characters the user is following" },
            { src: umaDescendant6, alt: "The weekly email alert listing the descendants of followed characters that are racing this week" }
        ],
        imageClassName: "project-img project-img-screenshot"
    };

    // Air Guitar Project data
    const airGuitarData = {
        title: language === 'th' && t.airGuitar.fullTitle ? t.airGuitar.fullTitle : "Air Guitar Gloves Project – Hardware-based Guitar Simulation with Interactive Gloves and Mobile Game Integration",
        paragraphs: language === 'th' && t.airGuitar.paragraph1 ? [
            t.airGuitar.paragraph1,
            t.airGuitar.paragraph2,
            t.airGuitar.paragraph3
        ] : [
            "The Air Guitar Gloves Project is the second project that I work on during my internship in Taiwan Textile Research Institution. The aim of the project is to create a product that can help people to learn guitar by buying our product which is cheaper than buying an acual guitar",
            "We create a simulation gloves the simulate a guitar by having the left hand simulate chord pressing, and the right hand simulate the strumming. The detected data from both hand will be send to the mobile game application that can teach the user how to play guitar. The mobile game has a total 3 modes which are tutorial mode, practice mode, and performance mode.",
            "Tutorial mode focus minty on teaching user how to play guitar in multiple lessons (chord introduction, strumming pattern, etc.) with a video player. Tutorial mode contains all the game from the tutorial mode without having to watch a tutorial video in the tutorial mode. Performance mode allow user to play the simulate gloves along with the song until the end of the song."
        ],
        techStack: ["Game Engine: Unity"],
        links: [{ url: "https://drive.google.com/drive/folders/1gPHkn5uU92UkfjOabdwjYBLMFmYgZfjt?usp=sharing", icon: "fa-brands fa-google-drive" }],
        images: [
            { src: airGuitarImg1, alt: "The main page of the game" },
            { src: airGuitarImg2, alt: "This is the menu page where user can select the chord that user want to learn" },
            { src: airGuitarImg3, alt: "This is the menu page for user to select the game that he/she want to play" },
            { src: airGuitarImg4, alt: "This is the page where user can watch the video tutorial of the chord" },
            { src: airGuitarImg5, alt: "This is the page of how to game will look like at the start" },
            { src: airGuitarGloves, alt: "The Air Guitar gloves hardware used to simulate guitar playing", className: "project-img-gloves" }
        ],
        imageClassName: "project-img-mobile"
    };

    // Nap Trap Project data
    const napTrapData = {
        title: language === 'th' && t.napTrap.fullTitle ? t.napTrap.fullTitle : "Nap Trap Project - Driver Drowsiness Detection System",
        paragraphs: language === 'th' && t.napTrap.paragraph1 ? [
            t.napTrap.paragraph1,
            t.napTrap.paragraph2
        ] : [
            "The Nap Trap Project purpose is to create a product that help prevent driver from getting into an accident due to his/her drowsiness. The device will be attached to the user, and if the device detect drowsiness. The mobile application will warn the user about his/her condition, and will ask user to stop driving if the device detect drowsiness for multiple times.",
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
        title: language === 'th' && t.plantDatabase.fullTitle ? t.plantDatabase.fullTitle : "Rajamangalaphisek Education Park Plant Database",
        paragraphs: language === 'th' && t.plantDatabase.paragraph1 ? [
            t.plantDatabase.paragraph1,
            t.plantDatabase.paragraph2,
            t.plantDatabase.paragraph3
        ] : [
            "The plant database system is divided into two components: the User Experience and the Administration System.",
            "<b>User Experience :</b><br/><br/>This interface allows users to explore over 100 plants collection through various views, including a standard list, a letter index list, and a family index list. Users can search for plant information using a basic search or an advanced search, where they can input details like common name, scientific name, or family name.",
            "<b>Administration System :</b><br/><br/>This system enables administrators to efficiently add new plants, update existing plant data, and delete plant records. This functionality supports the effective management of plant information at Rajamangalaphisek Education Park, Sukhothai Thammathirat Open University."
        ],
        techStack: ["Frontend: HTML, CSS, JavaScript", "Backend: Django", "Database: MySQL"],
        links: [
            { url: "https://github.com/Re-Brain/PlantDatabase", icon: "fa-brands fa-github" },
            { url: "https://www.youtube.com/watch?v=vVvWTs1bCO0", icon: "fa-solid fa-video" },
            { url: "https://edpark-db.stou.ac.th/", icon: "fa-solid fa-link" }
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
        title: language === 'th' && t.milk.fullTitle ? t.milk.fullTitle : "Third Year Project (Graduate Project) : Management and Identification for Livestock Keeping",
        paragraphs: language === 'th' && t.milk.paragraph1 ? [
            t.milk.paragraph1
        ] : [
            "The project aims to support farmers by integrating advanced technology into livestock management through a comprehensive system that includes cattle tracking, cattle counting, and cattle facial identification.<br/><br/>My role involved training a cow face detection model and a classification model using YOLOv8, and Tensorflow model to accurately identify individual cattle based on their facial features. I am able to achieve approximately 95% accuracy in distinguishing between 7 individual cattle based on facial features.<br/><br/>Additionally, I developed a user-friendly website that allows users to upload videos for automated cattle counting and facial identification, streamlining the management and monitoring processes for farmers. A video demonstrating all the functionalities of this project can be viewed on the google drive link below."
        ],
        techStack: ["Machine Learning Framwork : Tensorflow", "Tools: Jupyter Notebook, Google Colab"],
        links: [{ url: "https://drive.google.com/drive/u/0/folders/1yAZD5dt-co4C_id_0BRcQYRt1zgliCd3", icon: "fa-brands fa-google-drive" }],
        videoSrc: milkVideo,
        images: []
    };

    // SwiftUI Project data
    const swiftUIData = {
        title: language === 'th' && t.swiftUI.fullTitle ? t.swiftUI.fullTitle : "APPs for Mobile Platforms Term Project",
        paragraphs: language === 'th' && t.swiftUI.paragraph1 ? [
            t.swiftUI.paragraph1
        ] : [
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
        title: language === 'th' && t.faceMatching.fullTitle ? t.faceMatching.fullTitle : "Face-Matching-Program",
        paragraphs: language === 'th' && t.faceMatching.paragraph1 ? [
            t.faceMatching.paragraph1
        ] : [
            "Create a face-matching program to determine whether or not the provided image is in the database. Indicate the identity of the person in the picture if it is contained within the database. Indicate which individual in the photo is similar to which person in the database if the image is not contained in the database."
        ],
        techStack: ["Programming Language : Python", "Tools : matplotlib, cv2, numpy"],
        links: [{ url: "https://github.com/Re-Brain/Face-Matching-Program", icon: "fa-brands fa-github" }],
        images: [{ src: faceMatchingImg, alt: "The main page of the air guitar mobile game" }]
    };

    // Green Waste Management Project data
    const greenWasteData = {
        title: language === 'th' && t.greenWaste && t.greenWaste.fullTitle ? t.greenWaste.fullTitle : "Green Waste Management Database System Project",
        paragraphs: language === 'th' && t.greenWaste && t.greenWaste.paragraph1 
            ? [t.greenWaste.paragraph1, t.greenWaste.paragraph2, t.greenWaste.paragraph3]
            : [
                "The goal of this project is to create a platform that allows farmers to list their green waste or recycled green waste products. This platform will allow people who are interested in buying either of these two types of items to reach out directly to the farmers.",
                "<b>Key Platform Functionality :</b><br/><br/>Farmers interested in adding their green wastes or products must first register with our system, then verify their account via email. After verification, the user can log in to access all available functionality for registered users. There is also a password reset feature in case the user forgets his/her password.<br/><br/>The two main functional areas for registered users are the Item Management Dashboard and the User Management Dashboard.<br/><br/><b>- The Item Management Dashboard :</b> allows the user to add, edit, and delete items associated with his/her name.<br/><br/><b>- The User Management Dashboard :</b> allows the user to edit personal information, change their password, and delete his/her account.<br/><br/>All items that the user lists will be displayed on the website's index page. The item display section allows interested buyers to choose between green waste or recycled product. It also includes the ability to filter items based on the type of green waste, the group of farmers who listed the item, and the item's location (province, district, and sub-district).<br/><br/>The details page for each item will display information about the green waste or product, seller information, and the pick-up location.<br/><br/>Since this website is going to be owned by the Samut Songkhram Provincial Natural Resources and Environment Office, I also have to create an Administrator Dashboard for them to monitor all data within the system.",
                "<b>Additional Functionality :</b><br/><br/>The Administrator Dashboard also comes with a function to add and manage announcement posters and advertisement videos, which will be displayed on the main page.<br/><br/>The website also allows users to view statistical information about the green waste farmers have listed, a special product page dedicated to a specific group of green waste products, and a user manual that explains how farmers can use the platform."
            ],
        techStack: ["Frontend: HTML, CSS, JavaScript", "Backend: Laravel", "Database: MySQL", "Deployment (For reviewing purpose) : Heroku"],
        links: [],
        images: [
            { src: greenWaste1, alt: "Green Waste Management System - Screenshot 1" },
            { src: greenWaste2, alt: "Green Waste Management System - Screenshot 2" },
            { src: greenWaste3, alt: "Green Waste Management System - Screenshot 3" },
            { src: greenWaste4, alt: "Green Waste Management System - Screenshot 4" },
            { src: greenWaste5, alt: "Green Waste Management System - Screenshot 5" },
            { src: greenWaste6, alt: "Green Waste Management System - Screenshot 6" },
            { src: greenWaste7, alt: "Green Waste Management System - Screenshot 7" },
            { src: greenWaste8, alt: "Green Waste Management System - Screenshot 8" },
            { src: greenWaste9, alt: "Green Waste Management System - Screenshot 9" },
            { src: greenWaste10, alt: "Green Waste Management System - Screenshot 10" },
            { src: greenWaste11, alt: "Green Waste Management System - Screenshot 11" },
            { src: greenWaste12, alt: "Green Waste Management System - Screenshot 12" }
        ]
    };

    return (
        <div id="project-container">
            <div>
                <div className="project-page-header-container">
                    <div className="project-page-header-line"></div>
                    <h1 className="project-page-header-title">{t.title}</h1>
                    <div className="project-page-header-line"></div>
                </div>
                
                <ProjectCard {...umaDescendantData} />
                <ProjectCard {...furlongData} />
                <ProjectCard {...greenWasteData} />
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