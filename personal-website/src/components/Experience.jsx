import React from "react";
import Expitem from "./Expitem";

function Experience()
{
    const items = [
        {
            header : "Teacher Assistant Lab of Programming", 
            content : (
                <p className="experience-item-content">
                    Provide hands-on support to students in the course <br/><br/>
                    Explain and clarify programming concepts and assignments in C/C++ <br/><br/>
                    Ensure the students understand their code in each programming assignment
                </p>
            )
        },
        {
            header : "House Keeping", 
            content : (
                <p className="experience-item-content">
                    Organize and maintained clean rooms to create a <br/>
                    welcoming and comfortable environment for guests
                </p> 
            )
        }
    ]
    return (
        <div id="experience-container">
            <div>
                <p id="experience-header">Experience</p>
                {
                    items.map((item, index) => {
                        return (
                            <Expitem
                                key={index}
                                header={item.header}
                                content={item.content}
                            />
                        )
                    })
                }
            </div>
            
        </div>
    )
}

export default Experience;