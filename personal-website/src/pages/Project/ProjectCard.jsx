import React, { useState } from "react";
import TechStack from "./TechStack";
import { useLanguage } from "../../contexts/LanguageContext";
import translations from "../../translations.json";

function ProjectCard({ 
    title, 
    paragraphs, 
    techStack, 
    links, 
    images, 
    videoSrc,
    imageClassName = "project-img" 
}) {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const { language } = useLanguage();
    const techStackTitle = translations[language].projects.techStack;

    const nextImage = () => {
        setCurrentImageIndex((prevIndex) =>
            prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
    };

    const prevImage = () => {
        setCurrentImageIndex((prevIndex) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    };

    return (
        <div className="project-container">
            {(videoSrc || images.length > 0) && (
                <div className="project-display">
                    {videoSrc ? (
                        <video controls width="600" height="300">
                            <source className="project-video" src={videoSrc} type="video/mp4" />
                        </video>
                    ) : (
                        <>
                            {images.length > 1 && (
                                <button className="carousel-btn prev" onClick={prevImage} aria-label="Previous image">❮</button>
                            )}
                            <img
                                className={images[currentImageIndex].className || imageClassName}
                                src={images[currentImageIndex].src}
                                alt={images[currentImageIndex].alt}
                                loading="lazy"
                            />
                            {images.length > 1 && (
                                <button className="carousel-btn next" onClick={nextImage} aria-label="Next image">❯</button>
                            )}
                        </>
                    )}
                </div>
            )}            <div className="project-detail">
                <p className="project-header">{title}</p>

                {paragraphs.map((paragraph, index) => (
                    <React.Fragment key={index}>
                        <br />
                        <p className="project-content" dangerouslySetInnerHTML={{ __html: paragraph }} />
                    </React.Fragment>
                ))}

                <br />

                <TechStack items={techStack} title={techStackTitle} />

                <br />

                <p className="project-tech">
                    {links.map((link, index) => (
                        <a 
                            key={index}
                            href={link.url} 
                            target="_blank" 
                            rel="noopener noreferrer"
                        >
                            <i className={link.icon}></i>
                        </a>
                    ))}
                </p>
            </div>
        </div>
    );
}

export default ProjectCard;
