import React from "react";

function Hobbyitem(props)
{
    return (
        <div className="hobby-item">
            <p className="hobby-item-header">{props.header}</p>
            <img src={props.img} className="hobby-item-image" alt={props.header}></img>
            {props.content}
        </div>
    )
}

export default Hobbyitem;