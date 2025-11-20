import React from "react";
import NavLink from "./NavLink";

import '../../assets/styles/nav.css';

function Nav()
{
    return (
        <nav id="nav-container">
            <input type='checkbox' id='check' />
            <ul id="navbar" >
                <NavLink to="/" label="Home" />
                <NavLink to="/project" label="Projects" />
                <NavLink to="/contact" label="Contact" />
                <label htmlFor="check" className="close-menu"><i className="fas fa-times"></i></label>
            </ul>
            <label htmlFor="check" className="open-menu"><i className="fas fa-bars"></i></label>
        </nav>
    )
}

export default Nav;