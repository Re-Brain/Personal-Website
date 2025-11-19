import React, { useState, useEffect } from 'react';
import './ThemeToggle.css';

function ThemeToggle() {
    const [theme, setTheme] = useState(() => {
        // Get saved theme from localStorage or default to 'dark'
        return localStorage.getItem('theme') || 'dark';
    });

    useEffect(() => {
        // Apply theme to document
        document.documentElement.setAttribute('data-theme', theme);
        // Save to localStorage
        localStorage.setItem('theme', theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme(prevTheme => prevTheme === 'dark' ? 'light' : 'dark');
    };

    return (
        <button 
            className="theme-toggle" 
            onClick={toggleTheme}
            aria-label="Toggle theme"
        >
            {theme === 'dark' ? (
                <i className="fas fa-sun"></i>
            ) : (
                <i className="fas fa-moon"></i>
            )}
        </button>
    );
}

export default ThemeToggle;
