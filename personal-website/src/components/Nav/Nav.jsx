import React from "react";

function Nav()
{
    return (
        <nav id="nav-container">
            <input type='checkbox' id='check' />
            <ul id="navbar" >
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#skill" >Skill</a></li>
                <li><a href="#work">Work</a></li>
                <li><a href="#experience">Experience</a></li>
                <li><a href="#contact">Contact</a></li>
                <label htmlFor="check" className="close-menu"><i className="fas fa-times"></i></label>
            </ul>
            <label htmlFor="check" className="open-menu"><i className="fas fa-bars"></i></label>
        </nav>
    )
}

export default Nav;