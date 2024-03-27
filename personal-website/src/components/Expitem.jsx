import React from "react";

function Expitem(props)
{
    return (
        <div className="experience-item">
            <div>
                <p className="experience-item-header">{props.header}</p>
            </div>
            <div>
                {props.content}
            </div>
        </div>
    )
}

export default Expitem;