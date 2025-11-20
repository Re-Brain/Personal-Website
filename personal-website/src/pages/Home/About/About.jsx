import React from "react";
import { useLanguage } from "../../../contexts/LanguageContext";
import translations from "../../../translations.json";
import './About.css';

function About() {
    const { language } = useLanguage();
    const t = translations[language].about;

    return (
        <div className="about-container">
            <div className="about-header-container">
                <div className="about-header-line"></div>
                <h1 className="about-header-title">{t.title}</h1>
                <div className="about-header-line"></div>
            </div>
            
            <div className="about-content">
                <p className="about-text">
                    {t.paragraph1}
                </p>
                <p className="about-text">
                    {t.paragraph2}
                </p>
                <p className="about-text">
                    {t.paragraph3}
                </p>
            </div>
        </div>
    );
}

export default About;
