import React from "react";
import TechItem from "./Tech_Item";
import { useLanguage } from "../../../contexts/LanguageContext";
import translations from "../../../translations.json";
import './Tech.css';

function Tech() {
    const { language } = useLanguage();
    const t = translations[language].tech;
    const techData = [
        {
            category: "Frontend",
            icon: "desktop",
            skills: ["HTML", "CSS", "JavaScript", "React.js", "Bootstrap", "TailwindCSS"]
        },
        {
            category: "Backend",
            icon: "server",
            skills: ["Django", "Express.js", "Node.js", "Flask", "Laravel", "REST API", "GraphQL"]
        },
        {
            category: "Database Management",
            icon: "database",
            skills: ["MySQL", "SQLite", "MongoDB", "Mongoose"]
        },
        {
            category: "Machine Learning",
            icon: "brain",
            skills: ["Tensorflow", "Scikit-Learn", "YOLOv8"]
        },
        {
            category: "Mobile Development",
            icon: "mobile-alt",
            skills: ["SwiftUI", "React Native", "Native Wind"]
        },
        {
            category: "Programming Languages",
            icon: "code",
            skills: ["C/C++", "Python", "PHP", "Java"]
        },
        {
            category: "Game Development",
            icon: "gamepad",
            skills: ["Unity"]
        },
        {
            category: "Deployment Tool",
            icon: "cloud-upload-alt",
            skills: ["Vercel", "Heroku"]
        },
        {
            category: "Design Tool",
            icon: "pencil-ruler",
            skills: ["Figma", "Draw.io", "DBdiagram.io"]
        },
        {
            category: "Automation",
            icon: "cogs",
            skills: ["n8n (Learning)"]
        },
        {
            category: "Soft Skills",
            wide: true,
            icon: "users",
            skills: ["Teamwork", "Communication", "Problem-Solving", "Adaptability", "Leadership", "Time Management", "Collaboration"]
        }
    ];

    return (
        <div className="tech-container">
            <div className="tech-header-container">
                <div className="tech-header-line"></div>
                <h1 className="tech-header-title">{t.title}</h1>
                <div className="tech-header-line"></div>
            </div>
            
            <div className="tech-content">
                {techData.map((item, index) => (
                    <TechItem 
                        key={index}
                        category={item.category}
                        skills={item.skills}
                        icon={item.icon}
                        wide={item.wide}
                    />
                ))}
            </div>
        </div>
    );
}

export default Tech;
