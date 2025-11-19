import React from "react";
import './About.css';

function About() {
    return (
        <div className="about-container">
            <div className="about-header-container">
                <div className="about-header-line"></div>
                <h1 className="about-header-title">About Me</h1>
                <div className="about-header-line"></div>
            </div>
            
            <div className="about-content">
                <p className="about-text">
                    Fresh graduate from National Dong Hwa University with a B.S. in Computer Science and Information Engineering. 
                    Experienced in full-stack web development, mobile applications, and cross-platform projects spanning hardware, IoT, and game development.
                </p>
                <p className="about-text">
                    I've worked across Thailand and Taiwan, developing strong cultural adaptability and collaboration skills with diverse teams.
                </p>
                <p className="about-text">
                    Currently seeking a full-time position in web development or related fields where I can build innovative solutions and grow as a specialist in modern technologies.
                </p>
            </div>
        </div>
    );
}

export default About;
