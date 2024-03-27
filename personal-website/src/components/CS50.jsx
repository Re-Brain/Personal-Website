import React from "react";
import CS50Project from "./CS50Project";

function CS50()
{
    const upperItems = [
        {header : "Project 0: Search", content : "Design a front-end for Google Search , Google Image Search, and Google Advance Search", link : "Link:  https://github.com/Re-Brain/CS50Web-Search"},
        {header : "Project 1: Wiki", content : "Design a Wikipedia-like online encyclopedia", link : "Link: https://github.com/Re-Brain/CS50Web-Wiki"},
        {header : "Project 2: Commerce", content : "Design an eBay-like e-commerce auction site", link : "Link: https://github.com/Re-Brain/CS50Web-Commerce"}
    ]

    const lowerItems = [
        {header : "Project 3: Mail", content : "Design a front-end for an email client that makes API calls to send and receive emails", link : "Link:  https://github.com/Re-Brain/CS50Web-Mail"},
        {header : "Project 4: Network", content : "Design a Twitter-like social network website for making posts and following users.", link : "Link:  https://github.com/Re-Brain/CS50Web-Network"}
    ]

    return (
        <div id="CS50-container">
           <p id="CS50-header">CS50’s Web Programming with Python and JavaScript Projects</p>
           <div id="CS50-upper-items">
                {
                    upperItems.map((item, index) => {
                        return (<CS50Project
                            key = {index}
                            header = {item.header}
                            content = {item.content}
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