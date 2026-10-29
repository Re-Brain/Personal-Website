import React from "react";
import FeaturedProjectCard from "./FeaturedProjectCard";
import { useLanguage } from "../../../contexts/LanguageContext";
import translations from "../../../translations.json";
import './FeaturedProjects.css';

import umaDescendantImg from "../../../assets/images/UmaDescendant_Home.webp";
import furlongImg from "../../../assets/images/Furlong_Home.webp";
import plantDatabaseImg from "../../../assets/images/PlantDBS.webp";

function FeaturedProjects() {
    const { language } = useLanguage();
    const t = translations[language].featuredProjects;
    const projects = [
        {
            title: t.umaDescendant.title,
            description: t.umaDescendant.description,
            image: umaDescendantImg,
            technologies: ["Next.js", "Python", "Supabase", "MongoDB", "GitHub Actions"],
            githubLink: null,
            demoLink: null,
            demoIcon: null,
            webLink: "https://uma-descendant.furlong-uma-project.site/",
            webIcon: "fa-solid fa-link",
            achievements: t.umaDescendant.achievements
        },
        {
            title: t.furlong.title,
            description: t.furlong.description,
            image: furlongImg,
            imagePosition: "left center",
            technologies: ["React", "TypeScript", "FastAPI", "PostgreSQL", "Stripe"],
            githubLink: null,
            demoLink: null,
            demoIcon: null,
            webLink: "https://furlong.furlong-uma-project.site/",
            webIcon: "fa-solid fa-link",
            achievements: t.furlong.achievements
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
                        imagePosition={project.imagePosition}
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
