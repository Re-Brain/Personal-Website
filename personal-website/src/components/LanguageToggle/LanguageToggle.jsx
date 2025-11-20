import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import './LanguageToggle.css';

function LanguageToggle() {
    const { language, toggleLanguage } = useLanguage();

    return (
        <button 
            className="language-toggle-btn"
            onClick={toggleLanguage}
            aria-label={`Switch to ${language === 'en' ? 'Thai' : 'English'}`}
            title={`Switch to ${language === 'en' ? 'Thai' : 'English'}`}
        >
            <span className="language-text">{language === 'en' ? 'TH' : 'EN'}</span>
        </button>
    );
}

export default LanguageToggle;
