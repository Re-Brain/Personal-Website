import React from "react";
import { useNavigate } from "react-router-dom";
import { useLanguage } from "../../contexts/LanguageContext";
import translations from "../../translations.json";

function Profiletext()
{
    const navigate = useNavigate();
    const { language } = useLanguage();
    const t = translations[language].profile;

    const handleClick = () => {
        navigate('/contact');
    };

    return (
        <div id="profile-text-container">
            <p id="profile-text-header">{t.greeting}</p>
            <p id="profile-text-subheader">{t.title}</p>
            <p className="profile-text-tagline">{t.tagline}</p>
            <p className="profile-text-content">{t.degree}</p>
            <p className="profile-text-content">{t.university}</p>
            <a href="mailto:cwnditthakit@gmail.com" className="profile-email">
                <i className="fas fa-envelope"></i> cwnditthakit@gmail.com
            </a>
             <button 
                type="button" 
                id="profile-text-button" 
                className="btn btn-dark"
                onClick={handleClick}
            >
                {t.contactButton}
            </button>
        </div>
    )
}

export default Profiletext;