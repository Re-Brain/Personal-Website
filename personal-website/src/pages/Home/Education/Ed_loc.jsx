import React from "react";
import './Ed_loc.css';

function EdLoc({ year, degree, school, note }) {
    return (
        <div className="ed-loc-container">
            <div className="ed-loc-year">
                {year}
            </div>
            <div className="ed-loc-details">
                <p className="ed-loc-degree">{degree}</p>
                <p className="ed-loc-school">{school}</p>
                {note && <p className="ed-loc-note">{note}</p>}
            </div>
        </div>
    );
}

export default EdLoc;
