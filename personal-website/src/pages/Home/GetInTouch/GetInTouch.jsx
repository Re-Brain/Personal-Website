import React from 'react';
import ContactLinkButton from './ContactLinkButton';
import { useLanguage } from '../../../contexts/LanguageContext';
import translations from '../../../translations.json';
import './GetInTouch.css';

function GetInTouch() {
    const { language } = useLanguage();
    const t = translations[language].getInTouch;

    return (
        <div className="get-in-touch-container">
            <div className="get-in-touch-header-container">
                <div className="get-in-touch-header-line"></div>
                <h2 className="get-in-touch-header-title">{t.title}</h2>
                <div className="get-in-touch-header-line"></div>
            </div>
            
            <div className="contact-links-grid">
                <ContactLinkButton 
                    href="https://www.linkedin.com/in/brain-ditthakit/"
                    icon="fab fa-linkedin"
                    label={t.linkedin}
                />
                
                <ContactLinkButton 
                    href="https://github.com/Re-Brain"
                    icon="fab fa-github"
                    label={t.github}
                />
                
                <ContactLinkButton 
                    href="/resume.pdf"
                    icon="fas fa-file-pdf"
                    label={t.resume}
                    isDownload={true}
                />
                
                <ContactLinkButton 
                    href="/contact"
                    icon="fas fa-envelope"
                    label={t.contactPage}
                    isInternal={true}
                />
            </div>
        </div>
    );
}

export default GetInTouch;
