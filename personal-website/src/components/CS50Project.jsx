import React from "react";

function CS50Project(props)
{
    return (
        <div className="CS50Project-container">
           <p className="CS50Project-header">{props.header}</p>
           <p className="CS50Project-content">{props.content}</p>
           <p className="CS50Project-link">{props.link}</p>
        </div>
    )
}

export default CS50Project;