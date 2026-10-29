import React from "react";

// Pick an icon from the category label, e.g. "Authentication & User Database" -> shield.
// Order matters: more specific words come before generic ones like "database".
const ICONS = [
    ["frontend", "desktop"],
    ["authentication", "user-shield"],
    ["database", "database"],
    ["backend", "server"],
    ["automation", "robot"],
    ["scheduler", "clock"],
    ["email", "envelope"],
    ["deploy", "rocket"],
    ["domain", "globe"],
    ["machine", "brain"],
    ["mobile", "mobile-alt"],
    ["game", "gamepad"],
    ["programming", "code"],
    ["tool", "tools"],
    ["data", "database"],
    ["devops", "cloud"],
    ["service", "plug"]
];

function iconFor(label) {
    const lower = label.toLowerCase();
    const match = ICONS.find(([word]) => lower.includes(word));
    return match ? match[1] : "layer-group";
}

// Split on commas that are not inside parentheses: "A (x, y), B" -> ["A (x, y)", "B"]
function splitTopLevel(text) {
    const parts = [];
    let depth = 0;
    let current = "";
    for (const char of text) {
        if (char === "(") depth++;
        if (char === ")") depth--;
        if (char === "," && depth === 0) {
            parts.push(current);
            current = "";
        } else {
            current += char;
        }
    }
    parts.push(current);
    return parts.map((part) => part.trim()).filter(Boolean);
}

const capitalize = (text) => text.charAt(0).toUpperCase() + text.slice(1);

// "Python (data collection)" -> { name: "Python", note: "Data collection" }
function parseChip(text) {
    const match = text.match(/^(.*?)\s*\((.*)\)\s*$/);
    return match ? { name: match[1], note: capitalize(match[2]) } : { name: text, note: "" };
}

// "Backend: Django" -> { label: "Backend", chips: [{ name: "Django", note: "" }] }
function parseItem(text) {
    const colon = text.indexOf(":");
    if (colon === -1) {
        return { label: "", chips: splitTopLevel(text).map(parseChip) };
    }
    return {
        label: text.slice(0, colon).trim(),
        chips: splitTopLevel(text.slice(colon + 1)).map(parseChip)
    };
}

function TechStack({ items, title }) {
    if (!items || items.length === 0) return null;

    return (
        <div className="tech-stack">
            <div className="tech-stack-title">{title}</div>
            <div className="tech-stack-grid">
                {items.map((item, index) => {
                    const { label, chips } = parseItem(item);
                    // With several pills, say which one a note belongs to: "FastAPI: Python"
                    const notes = chips
                        .filter((chip) => chip.note)
                        .map((chip) => (chips.length > 1 ? `${chip.name}: ${chip.note}` : chip.note));
                    return (
                        <div className="tech-row" key={index}>
                            <span className="tech-row-icon">
                                <i className={`fas fa-${iconFor(label)}`}></i>
                            </span>
                            <div className="tech-row-body">
                                {label && <span className="tech-row-label">{label}</span>}
                                <div className="tech-row-chips">
                                    {chips.map((chip, chipIndex) => (
                                        <span className="tech-row-chip" key={chipIndex}>{chip.name}</span>
                                    ))}
                                </div>
                                {notes.length > 0 && <span className="tech-row-note">{notes.join(" · ")}</span>}
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default TechStack;
