import React from "react";
import './LanguageItem.css';

function LanguageItem({ color, name, percent }) {
    return (
        <div className="language-item">
            <span className="language-dot" style={{backgroundColor: color}}></span>
            <span className="language-name">{name}</span>
            <span className="language-percent">{percent}</span>
        </div>
    );
}

export default LanguageItem;
