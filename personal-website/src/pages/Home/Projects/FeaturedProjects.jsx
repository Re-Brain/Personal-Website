import React from "react";
import FeaturedProjectCard from "./FeaturedProjectCard";
import { useLanguage } from "../../../contexts/LanguageContext";
import translations from "../../../translations.json";
import './FeaturedProjects.css';

import airGuitarImg from "../../../assets/images/Air_Guitar_Main_Menu.png";
import plantDatabaseImg from "../../../assets/images/PlantDBS.png";
import milkImg from "../../../assets/images/MILK.png";

function FeaturedProjects() {
    const { language } = useLanguage();
    const t = translations[language].featuredProjects;
    const projects = [
        {
            title: t.airGuitar.title,
            description: t.airGuitar.description,
            image: airGuitarImg,
            technologies: ["Unity", "C#", "Arduino", "Hardware Integration"],
            githubLink: null,
            demoLink: "https://drive.google.com/drive/folders/1gPHkn5uU92UkfjOabdwjYBLMFmYgZfjt?usp=sharing",
            demoIcon: "fa-brands fa-google-drive",
            webLink: null,
            webIcon: null,
            achievements: t.airGuitar.achievements
        },
        {
            title: t.plantDatabase.title,
            description: t.plantDatabase.description,
            image: plantDatabaseImg,
            technologies: ["Django", "Python", "MySQL", "HTML/CSS", "JavaScript"],
            githubLink: "https://github.com/Re-Brain/PlantDatabase",
            demoLink: "https://www.youtube.com/watch?v=vVvWTs1bCO0",
            demoIcon: "fa-brands fa-youtube",
            webLink: "https://edpark-db.stou.ac.th",
            webIcon: "fa-solid fa-link",
            achievements: t.plantDatabase.achievements
        },
        {
            title: t.milk.title,
            description: t.milk.description,
            image: milkImg,
            technologies: ["TensorFlow", "YOLOv8", "Python", "Jupyter Notebook", "Computer Vision"],
            githubLink: null,
            demoLink: "https://drive.google.com/drive/u/0/folders/1yAZD5dt-co4C_id_0BRcQYRt1zgliCd3",
            demoIcon: "fa-brands fa-google-drive",
            webLink: null,
            webIcon: null,
            achievements: t.milk.achievements
        }
    ];

    return (
        <div className="featured-projects-container">
            <div className="featured-projects-header-container">
                <div className="featured-projects-header-line"></div>
                <h1 className="featured-projects-header-title">{t.title}</h1>
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
                        webLink={project.webLink}
                        webIcon={project.webIcon}
                        achievements={project.achievements}
                    />
                ))}
            </div>

            <div className="view-all-projects">
                <a href="/project" className="view-all-btn">
                    {t.viewAll} <i className="fas fa-arrow-right"></i>
                </a>
            </div>
        </div>
    );
}

export default FeaturedProjects;
