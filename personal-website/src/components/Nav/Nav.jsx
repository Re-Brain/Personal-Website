import React from "react";
import { Link } from "react-router-dom";

import '../../assets/styles/nav.css';

function Nav()
{
    return (
        <nav id="nav-container">
            <input type='checkbox' id='check' />
            <ul id="navbar" >
                <li><Link to="/">Home</Link></li>
                <li><Link to="/work">Projects</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                <label htmlFor="check" className="close-menu"><i className="fas fa-times"></i></label>
            </ul>
            <label htmlFor="check" className="open-menu"><i className="fas fa-bars"></i></label>
        </nav>
    )
}

export default Nav;