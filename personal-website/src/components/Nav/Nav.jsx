import React from "react";
import NavLink from "./NavLink";
import { useLanguage } from "../../contexts/LanguageContext";
import translations from "../../translations.json";

import '../../assets/styles/nav.css';

function Nav()
{
    const { language } = useLanguage();
    const t = translations[language].nav;

    return (
        <nav id="nav-container">
            <input type='checkbox' id='check' />
            <ul id="navbar" >
                <NavLink to="/" label={t.home} />
                <NavLink to="/project" label={t.projects} />
                <NavLink to="/contact" label={t.contact} />
                <label htmlFor="check" className="close-menu"><i className="fas fa-times"></i></label>
            </ul>
            <label htmlFor="check" className="open-menu"><i className="fas fa-bars"></i></label>
        </nav>
    )
}

export default Nav;