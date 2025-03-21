import React from "react";
import Hobbyitem from "./Hobbyitem";

function Hobby(props)
{
    return (
        <div id="about-hobby">
            <p id="about-hobby-title">Hobby</p>
            <div id="about-hobby-list">
            {
                props.items.map((item, index) => 
                {
                    return <Hobbyitem
                        key = {index}
                        header={item["header"]}
                        content={item["content"]}
                        img={item["img"]}
                    />
                })
            }
            </div>
        </div>
    )
}

export default Hobby;