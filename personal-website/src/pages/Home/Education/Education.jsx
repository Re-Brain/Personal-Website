import React from "react";
import EdLoc from "./Ed_loc";
import { useLanguage } from "../../../contexts/LanguageContext";
import translations from "../../../translations.json";

import '../../../assets/styles/setting.css';
import '../../../assets/styles/home.css';
import './Education.css';

function Education() {
    const { language } = useLanguage();
    const t = translations[language].education;

    return (
        <div>
            <div className="education-header-container">
                <div className="education-header-line"></div>
                <h1 className="education-header-title">{t.title}</h1>
                <div className="education-header-line"></div>
            </div>
            
            <div className="education-timeline">
                <EdLoc 
                    year="2021 - 2025"
                    degree={t.bachelorDegree}
                    school={t.ndhuSchool}
                />
                
                <EdLoc 
                    year="2020"
                    degree={t.highSchoolGrade11}
                    school={t.benjamarachutitThailand}
                />
                
                <EdLoc 
                    year="2019"
                    degree={t.exchangeGrade10}
                    school={t.mountainHomeUSA}
                />
                
                <EdLoc 
                    year="Before 2019"
                    degree={t.secondaryEducation}
                    school={t.benjamarachutitThailand}
                />
            </div>
        </div>
    )
}

export default Education;