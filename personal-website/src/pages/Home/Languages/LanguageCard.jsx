import React from "react";
import { useLanguage } from "../../../contexts/LanguageContext";
import translations from "../../../translations.json";
import './LanguageCard.css';

function LanguageCard({ language, proficiency, test, totalScore, cefrLevel, details }) {
    const { language: currentLang } = useLanguage();
    const t = translations[currentLang].languages;
    const isNative = !totalScore && (test === "Native Speaker" || test === "เจ้าของภาษา");
    
    return (
        <div className="language-card">
            <div className="language-card-header">
                <h3 className="language-name">{language}</h3>
                <span className="language-proficiency">{proficiency}</span>
            </div>

            {!isNative && (
                <div className="language-test-info">
                    <div className="test-name">{test}</div>
                    {totalScore && (
                        <>
                            <div className="total-score">
                                <span className="score-label">{t.totalScore}</span>
                                <span className="score-value">{totalScore}</span>
                            </div>
                            <div className="cefr-level">
                                <span className="cefr-badge">{cefrLevel}</span>
                            </div>
                        </>
                    )}
                </div>
            )}

            {isNative && (
                <div className="language-test-info">
                    <div className="test-name">{test}</div>
                    <div className="cefr-level">
                        <span className="cefr-badge">{cefrLevel}</span>
                    </div>
                </div>
            )}

            {details && (
                <div className="language-details">
                    {details.map((detail, index) => (
                        <div key={index} className="skill-breakdown">
                            <span className="skill-name">{detail.skill}</span>
                            <div className="skill-scores">
                                <span className="skill-score">{detail.score}</span>
                                <span className="skill-cefr">{detail.cefr}</span>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default LanguageCard;
