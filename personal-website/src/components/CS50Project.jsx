import React from "react";

function CS50Project(props)
{
    return (
        <div className="CS50Project-container">
           <p className="CS50Project-header">{props.header}</p>
           <p className="CS50Project-content">{props.content}</p>
           <div className="CS50Project-link-container">
                <a className="CS50Project-link" href={props.github}>Project Link</a>
                <a className="CS50Project-link" href={props.video}>Video Link</a>
           </div>
           
        </div>
    )
}

export default CS50Project;