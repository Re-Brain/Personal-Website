import React from "react";
import { useNavigate } from "react-router-dom";

function Profiletext()
{
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/contact');
    };

    return (
        <div id="profile-text-container">
            <p id="profile-text-header">Hello, I'm Brain</p>
            <p id="profile-text-subheader">Software Engineer</p>
            <p className="profile-text-content">Bachelor Degree in Computer Science and Information Engineering</p>
            <p className="profile-text-content">National Dong Hwa University</p>
             <button 
                type="button" 
                id="profile-text-button" 
                className="btn btn-dark"
                onClick={handleClick}
            >
                Contact Me
            </button>
        </div>
    )
}

export default Profiletext;