import React from "react";
import './Tech_Item.css';

function TechItem({ category, skills, icon, wide }) {
    return (
        <div className={wide ? "tech-item-container tech-item-wide" : "tech-item-container"}>
            <div className="tech-item-header">
                <span className="tech-item-icon"><i className={`fas fa-${icon}`}></i></span>
                <h3 className="tech-item-category">{category}</h3>
            </div>
            <div className="tech-item-skills">
                {skills.map((skill, index) => (
                    <span key={index} className="tech-skill-badge">
                        {skill}
                    </span>
                ))}
            </div>
        </div>
    );
}

export default TechItem;
