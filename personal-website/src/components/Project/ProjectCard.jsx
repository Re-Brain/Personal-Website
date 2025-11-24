import React, { useState } from 'react';

function ProjectCard({ title, images, content, technologies, links }) {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

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
            <div className="project-display">
                {images.length > 1 && (
                    <button className="carousel-btn prev" onClick={prevImage}>❮</button>
                )}
                <img
                    className={images[currentImageIndex].className || "project-img-mobile"}
                    src={images[currentImageIndex].src}
                    alt={images[currentImageIndex].alt}
                    loading="lazy"
                />
                {images.length > 1 && (
                    <button className="carousel-btn next" onClick={nextImage}>❯</button>
                )}
            </div>

            <div className="project-detail">
                <p className="project-header">{title}</p>
                {content.map((paragraph, index) => (
                    <React.Fragment key={index}>
                        <p className="project-content">{paragraph}</p>
                        <br />
                    </React.Fragment>
                ))}

                {technologies.map((tech, index) => (
                    <p key={index} className="project-tech">{tech}</p>
                ))}

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