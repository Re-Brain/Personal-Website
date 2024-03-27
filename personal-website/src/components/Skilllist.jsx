import React from "react";
import Skillitem from "./Skillitem"

function Skilllist(props)
{
    return (
        <div className="skill-block">
            <p className="skill-block-header">{props.header}</p>
            <div className="skill-block-list">
                {
                    props.items.map((item,index) => {
                        return (
                        <Skillitem
                            key={index}
                            name={item.name}
                            img={item.img}
                        />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Skilllist;