import React from 'react';

function FooterLink({ href, icon, label, isEmail = false }) {
    return (
        <li className="footer-item">
            <a 
                href={href}
                target={isEmail ? undefined : "_blank"}
                rel={isEmail ? undefined : "noopener noreferrer"}
                aria-label={label}
            >
                <i className={icon}></i>
            </a>
        </li>
    );
}

export default FooterLink;
