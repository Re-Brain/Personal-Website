import React from "react";

function Profiletext()
{
    return (
        <div id="profile-text-container">
            <p id="profile-text-header">Hello, I'm Brain</p>
            <p id="profile-text-subheader">Developer & AI</p>
            <p className="profile-text-content">Bachelor Degree in Computer Science and Information Engineering</p>
            <p className="profile-text-content">National Dong Hwa University</p>
            <a href="#contact-container">
                <button type="submit" id="profile-text-button" className="btn btn-dark">Contact Me</button>
            </a>
        </div>
    )
}

export default Profiletext;