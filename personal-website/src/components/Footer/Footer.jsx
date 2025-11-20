import React from "react";
import FooterLink from "./FooterLink";

import "../../assets/styles/footer.css";

function Footer()
{
    return (   
        <div id="footer-container">
            <ul id="footer-list">
                <FooterLink 
                    href="https://www.linkedin.com/in/brain-ditthakit/"
                    icon="fa-brands fa-linkedin-in"
                    label="LinkedIn"
                />
                <FooterLink 
                    href="https://github.com/Re-Brain"
                    icon="fa-brands fa-github"
                    label="GitHub"
                />
                <FooterLink 
                    href="mailto:cwnditthakit@gmail.com"
                    icon="fa-solid fa-envelope"
                    label="Email"
                    isEmail={true}
                />
            </ul>
        </div>
    )
}

export default Footer;