import React, { useState } from "react";

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
                {videoSrc ? (
                    <video controls width="600" height="300">
                        <source className="project-video" src={videoSrc} type="video/mp4" />
                    </video>
                ) : (
                    <>
                        {images.length > 1 && (
                            <button className="carousel-btn prev" onClick={prevImage}>❮</button>
                        )}
                        <img
                            className={imageClassName}
                            src={images[currentImageIndex].src}
                            alt={images[currentImageIndex].alt}
                            loading="lazy"
                        />
                        {images.length > 1 && (
                            <button className="carousel-btn next" onClick={nextImage}>❯</button>
                        )}
                    </>
                )}
            </div>

            <div className="project-detail">
                <p className="project-header">{title}</p>

                {paragraphs.map((paragraph, index) => (
                    <React.Fragment key={index}>
                        <br />
                        <p className="project-content" dangerouslySetInnerHTML={{ __html: paragraph }} />
                    </React.Fragment>
                ))}

                <br />

                {techStack.map((tech, index) => (
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
