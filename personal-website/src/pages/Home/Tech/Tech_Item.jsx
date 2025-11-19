import React from "react";
import './Tech_Item.css';

function TechItem({ category, skills }) {
    return (
        <div className="tech-item-container">
            <h3 className="tech-item-category">{category}</h3>
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
