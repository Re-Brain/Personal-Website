import React from "react";

function Expitem(props)
{
    return (
        <div className="experience-item">
            <div>
                <p className="experience-item-header">{props.header}</p>
            </div>
            <div>
                <ul className="experience-item-list">
                {
                    props.content.map((item, index) => 
                    {
                        return <li><p className="experience-item-content">{item}</p></li>
                    })
                }
                </ul>
                
            </div>
        </div>
    )
}

export default Expitem;