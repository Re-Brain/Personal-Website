import React from "react";
import StatCard from "./StatCard";
import LanguageItem from "./LanguageItem";
import { useLanguage } from "../../../contexts/LanguageContext";
import translations from "../../../translations.json";
import './GitHub.css';

function GitHub() {
    const { language } = useLanguage();
    const t = translations[language].github;
    const username = "Re-Brain";

    const stats = [
        { number: "312+", label: "Contributions" },
        { number: "35+", label: "Repositories" },
        { number: "8+", label: "Languages" }
    ];

    const languages = [
        { color: "#3572A5", name: "Python", percent: "26.79%" },
        { color: "#f1e05a", name: "JavaScript", percent: "23.99%" },
        { color: "#e34c26", name: "HTML", percent: "17.27%" },
        { color: "#563d7c", name: "CSS", percent: "12.30%" },
        { color: "#ffac45", name: "Swift", percent: "11.33%" },
        { color: "#2b7489", name: "TypeScript", percent: "8.33%" }
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
                        src={`https://ghchart.rshah.org/CC0000/${username}`}
                        alt="GitHub Contribution Graph"
                        className="github-graph"
                        loading="lazy"
                    />
                </div>

                {/* Simple Stats Display */}
                <div className="github-simple-stats">
                    {stats.map((stat, index) => (
                        <StatCard 
                            key={index}
                            number={stat.number}
                            label={stat.label}
                        />
                    ))}
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
