import React from "react";
import LanguageCard from "./LanguageCard";
import { useLanguage } from "../../../contexts/LanguageContext";
import translations from "../../../translations.json";
import './Languages.css';

function Languages() {
    const { language } = useLanguage();
    const t = translations[language].languages;
    const languagesData = [
        {
            language: t.thaiName,
            proficiency: t.thaiProficiency,
            test: t.thaiTest,
            totalScore: null,
            cefrLevel: t.thaiProficiency,
            details: null
        },
        {
            language: t.englishName,
            proficiency: t.englishProficiency,
            test: t.englishTest,
            totalScore: 895,
            cefrLevel: "B2",
            details: [
                { skill: t.listening, score: 480, cefr: "B2" },
                { skill: t.reading, score: 415, cefr: "B2" }
            ]
        },
        {
            language: t.chineseName,
            proficiency: t.chineseProficiency,
            test: t.chineseTest,
            totalScore: 845,
            cefrLevel: "Level 1",
            details: [
                { skill: t.listening, score: 430, cefr: "A1" },
                { skill: t.reading, score: 415, cefr: "A1" }
            ]
        }
    ];

    return (
        <div className="languages-container">
            <div className="languages-header-container">
                <div className="languages-header-line"></div>
                <h1 className="languages-header-title">{t.title}</h1>
                <div className="languages-header-line"></div>
            </div>

            <div className="languages-grid">
                {languagesData.map((lang, index) => (
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
                <span>{t.note}</span>
            </div>
        </div>
    );
}

export default Languages;
