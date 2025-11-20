import React from 'react';
import ContactLinkButton from './ContactLinkButton';
import './GetInTouch.css';

function GetInTouch() {
    return (
        <div className="get-in-touch-container">
            <div className="get-in-touch-header-container">
                <div className="get-in-touch-header-line"></div>
                <h2 className="get-in-touch-header-title">Get In Touch</h2>
                <div className="get-in-touch-header-line"></div>
            </div>
            
            <div className="contact-links-grid">
                <ContactLinkButton 
                    href="https://www.linkedin.com/in/brain-ditthakit/"
                    icon="fab fa-linkedin"
                    label="LinkedIn"
                />
                
                <ContactLinkButton 
                    href="https://github.com/Re-Brain"
                    icon="fab fa-github"
                    label="GitHub"
                />
                
                <ContactLinkButton 
                    href="/resume.pdf"
                    icon="fas fa-file-pdf"
                    label="Resume"
                    isDownload={true}
                />
                
                <ContactLinkButton 
                    href="/contact"
                    icon="fas fa-envelope"
                    label="Contact Page"
                    isInternal={true}
                />
            </div>
        </div>
    );
}

export default GetInTouch;
