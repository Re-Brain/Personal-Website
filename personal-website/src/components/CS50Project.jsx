import React from "react";

function CS50Project(props)
{
    return (
        <div className="CS50Project-container">
           <p className="CS50Project-header">{props.header}</p>
           <p className="CS50Project-content">{props.content}</p>
           <a className="CS50Project-link" href={props.link}>Project Link</a>
        </div>
    )
}

export default CS50Project;