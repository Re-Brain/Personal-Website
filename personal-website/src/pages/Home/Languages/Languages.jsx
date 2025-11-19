import React from "react";
import LanguageCard from "./LanguageCard";
import './Languages.css';

function Languages() {
    const languages = [
        {
            language: "Thai",
            proficiency: "Native",
            test: "Native Speaker",
            totalScore: null,
            cefrLevel: "Native",
            details: null
        },
        {
            language: "English",
            proficiency: "Professional Working Proficiency",
            test: "TOEIC",
            totalScore: 865,
            cefrLevel: "B2",
            details: [
                { skill: "Listening", score: 455, cefr: "B2" },
                { skill: "Reading", score: 410, cefr: "B2" }
            ]
        },
        {
            language: "Chinese (Mandarin)",
            proficiency: "Elementary Proficiency",
            test: "TOCFL",
            totalScore: 845,
            cefrLevel: "Level 1",
            details: [
                { skill: "Listening", score: 430, cefr: "A1" },
                { skill: "Reading", score: 415, cefr: "A1" }
            ]
        }
    ];

    return (
        <div className="languages-container">
            <div className="languages-header-container">
                <div className="languages-header-line"></div>
                <h1 className="languages-header-title">Languages</h1>
                <div className="languages-header-line"></div>
            </div>

            <div className="languages-grid">
                {languages.map((lang, index) => (
                    <LanguageCard
                        key={index}
                        language={lang.language}
                        proficiency={lang.proficiency}
                        test={lang.test}
                        totalScore={lang.totalScore}
                        cefrLevel={lang.cefrLevel}
                        details={lang.details}
                    />
                ))}
            </div>

            <div className="languages-note">
                <i className="fas fa-info-circle"></i>
                <span>Official test certificates available upon request via email</span>
            </div>
        </div>
    );
}

export default Languages;
