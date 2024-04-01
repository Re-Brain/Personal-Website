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
                <label for="check" class="close-menu"><i class="fas fa-times"></i></label>
            </ul>
            <label for="check" class="open-menu"><i class="fas fa-bars"></i></label>
        </nav>
    )
}

export default Nav;