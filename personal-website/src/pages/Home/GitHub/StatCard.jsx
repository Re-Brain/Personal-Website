import React from "react";
import './StatCard.css';

function StatCard({ number, label }) {
    return (
        <div className="stat-card">
            <div className="stat-number">{number}</div>
            <div className="stat-label">{label}</div>
        </div>
    );
}

export default StatCard;
