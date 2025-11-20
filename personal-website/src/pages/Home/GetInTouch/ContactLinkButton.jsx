import React from 'react';
import { Link } from 'react-router-dom';

function ContactLinkButton({ href, icon, label, isInternal = false, isDownload = false }) {
    const content = (
        <>
            <i className={icon}></i>
            <span>{label}</span>
        </>
    );

    if (isInternal) {
        return (
            <Link to={href} className="contact-link-btn">
                {content}
            </Link>
        );
    }

    if (isDownload) {
        return (
            <a href={href} download className="contact-link-btn">
                {content}
            </a>
        );
    }

    return (
        <a 
            href={href} 
            target="_blank" 
            rel="noopener noreferrer"
            className="contact-link-btn"
        >
            {content}
        </a>
    );
}

export default ContactLinkButton;
