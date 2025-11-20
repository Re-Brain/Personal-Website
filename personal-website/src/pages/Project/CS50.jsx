import React from "react";
import CS50Project from "./CS50Project";
import { useLanguage } from "../../contexts/LanguageContext";
import translations from "../../translations.json";

function CS50()
{
    const { language } = useLanguage();
    const t = translations[language].projects;
    const upperItems = [
        {header : "Project 0: Search", content : "Design a front-end for Google Search , Google Image Search, and Google Advance Search", github : "https://github.com/Re-Brain/CS50Web-Search", video : "https://www.youtube.com/watch?v=MFwsdcJfaPA"},
        {header : "Project 1: Wiki", content : "Design a Wikipedia-like online encyclopedia", github : "https://github.com/Re-Brain/CS50Web-Wiki" , video : "https://youtu.be/geZ25ztPPwc?si=8L6zYXKueyBjOI9B"},
        {header : "Project 2: Commerce", content : "Design an eBay-like e-commerce auction site", github : "https://github.com/Re-Brain/CS50Web-Commerce" , video : "https://youtu.be/Sb5XIIteNcc?si=Tfgvk_994UvZlNZt"}
    ]

    const lowerItems = [
        {header : "Project 3: Mail", content : "Design a front-end for an email client that makes API calls to send and receive emails", github : "https://github.com/Re-Brain/CS50Web-Mail" , video : "https://youtu.be/XvyArKlHbks?si=2mzwinszO9jAVc6d"},
        {header : "Project 4: Network", content : "Design a Twitter-like social network website for making posts and following users.", github : "https://github.com/Re-Brain/CS50Web-Network" , video : "https://youtu.be/aylzFQNIINk?si=OQGi9fe1C1fPJeGx"}
    ]

    return (
        <div id="CS50-container">
           <div className="cs50-header-container">
               <div className="cs50-header-line"></div>
               <p className="cs50-header-title">{t.cs50Title}</p>
               <div className="cs50-header-line"></div>
           </div>
           <div id="CS50-upper-items">
                {
                    upperItems.map((item, index) => {
                        return (<CS50Project
                            key = {index}
                            header = {item.header}
                            content = {item.content}
                            github = {item.github}
                            video = {item.video}
                            link = {item.link}
                        />) 
                    })
                }
           </div>
           <div id="CS50-lower-items">
                {
                    lowerItems.map((item, index) => {
                        return (<CS50Project
                            key = {index}
                            header = {item.header}
                            content = {item.content}
                            link = {item.link}
                        />) 
                    })
                }
            </div>
        </div>
    )
}

export default CS50;