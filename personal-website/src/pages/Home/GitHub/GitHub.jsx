import React from "react";
import LanguageItem from "./LanguageItem";
import { useLanguage } from "../../../contexts/LanguageContext";
import translations from "../../../translations.json";
import './GitHub.css';

function GitHub() {
    const { language } = useLanguage();
    const t = translations[language].github;
    const username = "Re-Brain";

    // Snapshot from the GitHub API on 2026-10-28 (public repositories only):
    // language shares are bytes of code across all public repos.
    const languages = [
        { color: "#3178c6", name: "TypeScript", percent: "45.09%" },
        { color: "#3572A5", name: "Python", percent: "23.34%" },
        { color: "#f1e05a", name: "JavaScript", percent: "11.87%" },
        { color: "#563d7c", name: "CSS", percent: "8.67%" },
        { color: "#e34c26", name: "HTML", percent: "6.45%" },
        { color: "#F05138", name: "Swift", percent: "3.92%" }
    ];

    return (
        <div className="github-container">
            <div className="github-header-container">
                <div className="github-header-line"></div>
                <h1 className="github-header-title">{t.title}</h1>
                <div className="github-header-line"></div>
            </div>

            <div className="github-content">
                {/* GitHub Profile Link */}
                <div className="github-profile-link">
                    <a 
                        href={`https://github.com/${username}`} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="github-button"
                    >
                        <i className="fab fa-github"></i> {t.viewProfile}
                    </a>
                </div>

                {/* GitHub Contribution Graph */}
                <div className="github-graph-container">
                    <img 
                        src={`https://ghchart.rshah.org/6366F1/${username}`}
                        alt="GitHub Contribution Graph"
                        className="github-graph"
                        loading="lazy"
                    />
                </div>

                {/* Top Languages Manual Display */}
                <div className="languages-section">
                    <h3 className="languages-title">Programming Languages</h3>
                    <div className="languages-grid">
                        {languages.map((lang, index) => (
                            <LanguageItem
                                key={index}
                                color={lang.color}
                                name={lang.name}
                                percent={lang.percent}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default GitHub;
