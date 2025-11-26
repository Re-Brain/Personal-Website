import React from "react";
import './FeaturedProjectCard.css';

function FeaturedProjectCard({ title, description, image, technologies, githubLink, demoLink, demoIcon, webLink, webIcon, achievements }) {
    return (
        <div className="featured-project-card">
            <div className="project-image-container">
                <img src={image} alt={title} className="project-image" loading="lazy" />
                <div className="project-overlay">
                    <div className="project-links">
                        {githubLink && (
                            <a href={githubLink} target="_blank" rel="noopener noreferrer" className="project-link">
                                <i className="fab fa-github"></i>
                            </a>
                        )}
                        {demoLink && (
                            <a href={demoLink} target="_blank" rel="noopener noreferrer" className="project-link">
                                <i className={demoIcon || "fas fa-external-link-alt"}></i>
                            </a>
                        )}
                        {webLink && (
                            <a href={webLink} target="_blank" rel="noopener noreferrer" className="project-link">
                                <i className={webIcon || "fas fa-external-link-alt"}></i>
                            </a>
                        )}
                    </div>
                </div>
            </div>

            <div className="project-card-content">
                <h3 className="project-title">{title}</h3>
                <p className="project-description">{description}</p>

                <div className="project-achievements">
                    {achievements.map((achievement, index) => (
                        <div key={index} className="achievement-item">
                            <i className="fas fa-check-circle"></i>
                            <span>{achievement}</span>
                        </div>
                    ))}
                </div>

                <div className="project-technologies">
                    {technologies.map((tech, index) => (
                        <span key={index} className="tech-badge">{tech}</span>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default FeaturedProjectCard;
