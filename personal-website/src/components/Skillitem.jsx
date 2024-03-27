import React from "react";

function Skillitem(props)
{
    return (
        <div className="skill-item">
           <img src={props.img} alt={props.name} className="skill-item-img"></img>
           <p className="skill-item-content">{props.name}</p>
        </div>
    )
}

export default Skillitem;