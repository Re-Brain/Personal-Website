import React from 'react';
import { NavLink as RouterNavLink } from 'react-router-dom';

function NavLink({ to, label }) {
    return (
        <li className="nav-item">
            <RouterNavLink 
                to={to}
                className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
            >
                {label}
            </RouterNavLink>
        </li>
    );
}

export default NavLink;
