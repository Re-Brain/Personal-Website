import React from "react";
import FeaturedProjectCard from "./FeaturedProjectCard";
import './FeaturedProjects.css';

import airGuitarImg from "../../../assets/images/Air_Guitar_Main_Menu.png";
import plantDatabaseImg from "../../../assets/images/PlantDBS.png";
import milkImg from "../../../assets/images/MILK.png";

function FeaturedProjects() {
    const projects = [
        {
            title: "Air Guitar Gloves Project",
            description: "Hardware-based guitar simulation with interactive gloves and mobile game integration using Unity. Features tutorial mode, game mode, and performance mode for learning guitar.",
            image: airGuitarImg,
            technologies: ["Unity", "C#", "Arduino", "Hardware Integration"],
            githubLink: null,
            demoLink: "https://drive.google.com/drive/folders/1gPHkn5uU92UkfjOabdwjYBLMFmYgZfjt?usp=sharing",
            demoIcon: "fa-brands fa-google-drive",
            achievements: ["Mobile game with 3 interactive modes", "Hardware glove integration", "Real-time chord detection"]
        },
        {
            title: "Rajamangalaphisek Plant Database",
            description: "Full-stack plant database system with 100+ plants collection. Features user interface for plant exploration and admin dashboard for data management.",
            image: plantDatabaseImg,
            technologies: ["Django", "Python", "MySQL", "HTML/CSS", "JavaScript"],
            githubLink: "https://github.com/Re-Brain/PlantDatabase",
            demoLink: "https://www.youtube.com/watch?v=vVvWTs1bCO0",
            demoIcon: "fa-brands fa-youtube",
            achievements: ["100+ plant records", "Advanced search functionality", "Admin management system"]
        },
        {
            title: "MILK - Livestock Management System",
            description: "AI-powered livestock management system using YOLOv8 and TensorFlow for cattle tracking, counting, and facial identification with 95% accuracy.",
            image: milkImg,
            technologies: ["TensorFlow", "YOLOv8", "Python", "Jupyter Notebook", "Computer Vision"],
            githubLink: null,
            demoLink: "https://drive.google.com/drive/u/0/folders/1yAZD5dt-co4C_id_0BRcQYRt1zgliCd3",
            demoIcon: "fa-brands fa-google-drive",
            achievements: ["95% facial recognition accuracy", "7 individual cattle identification", "Automated video processing"]
        }
    ];

    return (
        <div className="featured-projects-container">
            <div className="featured-projects-header-container">
                <div className="featured-projects-header-line"></div>
                <h1 className="featured-projects-header-title">Featured Projects</h1>
                <div className="featured-projects-header-line"></div>
            </div>

            <div className="featured-projects-grid">
                {projects.map((project, index) => (
                    <FeaturedProjectCard
                        key={index}
                        title={project.title}
                        description={project.description}
                        image={project.image}
                        technologies={project.technologies}
                        githubLink={project.githubLink}
                        demoLink={project.demoLink}
                        demoIcon={project.demoIcon}
                        achievements={project.achievements}
                    />
                ))}
            </div>

            <div className="view-all-projects">
                <a href="/project" className="view-all-btn">
                    View All Projects <i className="fas fa-arrow-right"></i>
                </a>
            </div>
        </div>
    );
}

export default FeaturedProjects;
