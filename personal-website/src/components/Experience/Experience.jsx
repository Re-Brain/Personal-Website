import React from "react";
import Expitem from "./Expitem";

function Experience()
{
    const items = [
        {
            header : "Web-based Database Developer", 
            content : ["Join the development team of Sukhothai Thammathirat Open University's web-based plant database.",
                       "Assign to develop the university's Rajamangalaphisek Education Park plant database."]
        },
        {
            header : "Teacher Assistant Lab of Programming", 
            content : ["Provide hands-on support to students in the course",
                       "Explain and clarify programming concepts and assignments in C/C++",
                       "Ensure the students understand their code in each programming assignment"]
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