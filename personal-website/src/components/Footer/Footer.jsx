import React from "react";

import "../../assets/styles/footer.css";

function Footer()
{
    return (   
        <div id="footer-container">
            <ul id="footer-list">
                <li id="footer-item">
                    <a href="https://www.linkedin.com/in/brain-ditthakit/" target="_blank" rel="noopener noreferrer">
                    <i className="fa-brands fa-linkedin-in"></i>
                    </a>
                </li>
                <li id="footer-item">
                    <a href="https://github.com/Re-Brain" target="_blank" rel="noopener noreferrer">
                    <i className="fa-brands fa-github"></i>
                    </a>
                </li>
                <li id="footer-item">
                    <a href="mailto:cwnditthakit@gmail.com">
                    <i className="fa-solid fa-envelope"></i>
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default Footer;