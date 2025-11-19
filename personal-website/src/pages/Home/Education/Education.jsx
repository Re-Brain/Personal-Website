import React from "react";
import EdLoc from "./Ed_loc";

import '../../../assets/styles/setting.css';
import '../../../assets/styles/home.css';
import './Education.css';

function Education() {
    return (
        <div>
            <div className="education-header-container">
                <div className="education-header-line"></div>
                <h1 className="education-header-title">Education</h1>
                <div className="education-header-line"></div>
            </div>
            
            <div className="education-timeline">
                <EdLoc 
                    year="2021 - 2025"
                    degree="Bachelor of Computer Science & Information Engineering"
                    school="National Dong Hwa University"
                    note="(Advanced directly from Grade 11)"
                />
                
                <EdLoc 
                    year="2020"
                    degree="High School - Grade 11"
                    school="Benjamarachutit School, Thailand"
                />
                
                <EdLoc 
                    year="2019"
                    degree="Exchange Student - Grade 10"
                    school="Mountain Home High School, USA"
                />
                
                <EdLoc 
                    year="Before 2019"
                    degree="Secondary Education"
                    school="Benjamarachutit School, Thailand"
                />
            </div>
        </div>
    )
}

export default Education;