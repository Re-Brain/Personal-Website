import React from "react";
import TechItem from "./Tech_Item";
import './Tech.css';

function Tech() {
    const techData = [
        {
            category: "Frontend",
            skills: ["HTML", "CSS", "JavaScript", "React.js", "Bootstrap", "TailwindCSS"]
        },
        {
            category: "Backend",
            skills: ["Django", "Express.js", "Node.js", "Flask", "Laravel", "REST API", "GraphQL"]
        },
        {
            category: "Database Management",
            skills: ["MySQL", "SQLite", "MongoDB", "Mongoose"]
        },
        {
            category: "Machine Learning",
            skills: ["Tensorflow", "Scikit-Learn", "YOLOv8"]
        },
        {
            category: "Mobile Development",
            skills: ["SwiftUI", "React Native", "Native Wind"]
        },
        {
            category: "Programming Languages",
            skills: ["C/C++", "Python", "PHP", "Java"]
        },
        {
            category: "Game Development",
            skills: ["Unity"]
        },
        {
            category: "Deployment Tool",
            skills: ["Vercel", "Heroku"]
        },
        {
            category: "Design Tool",
            skills: ["Figma", "Draw.io", "DBdiagram.io"]
        },
        {
            category: "Automation",
            skills: ["n8n"]
        },
        {
            category: "Soft Skills",
            skills: ["Teamwork", "Communication", "Problem-Solving", "Adaptability", "Leadership", "Time Management", "Collaboration"]
        }
    ];

    return (
        <div className="tech-container">
            <div className="tech-header-container">
                <div className="tech-header-line"></div>
                <h1 className="tech-header-title">Skills & Technologies</h1>
                <div className="tech-header-line"></div>
            </div>
            
            <div className="tech-content">
                {techData.map((item, index) => (
                    <TechItem 
                        key={index}
                        category={item.category}
                        skills={item.skills}
                    />
                ))}
            </div>
        </div>
    );
}

export default Tech;
