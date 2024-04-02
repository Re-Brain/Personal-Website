import React from "react";
import Info from "./Info";
import Hobby  from "./Hobby";

import Travel from "../../images/Travel.jpg";
import Food from "../../images/Food.jpg";
import Soundtrack from "../../images/Soundtrack.jpg";

function About()
{

    const items = [
        {
            header : "Adventurer", 
            content : (
                <p className="hobby-item-info">
                    Being an adventurer means I like exploring new places.
                    When I have free time or want to take a break from work, 
                    I usually look for a nearby location that I have never been to before to see what the area is like.  
                    This concept also applied to my vacation.
                </p>
            ),
            img : Travel

        },
        {
            header : "Food Scavenger", 
            content : (
                <p className="hobby-item-info">
                    Along with my adventurer hobby, I enjoy exploring new restaurants and cafes where I can enjoy the atmosphere and the food, 
                    and if I have the opportunity, I will return to some of the places I have visited with my friend.
                </p>
            ),
            img : Food
        }
        ,
        {
            header : "Soundtrack Enthusiasm", 
            content : (
                <p className="hobby-item-info">
                    I enjoy watching movies, TV series, and anime. 
                    But I also enjoy searching up the soundtrack from a particular scene. 
                    If I like the soundtrack, I will search for it, save it, and listen to it on a regular basis.
                </p>
            ),
            img : Soundtrack
        }
    ]

    return (
        <div id="about-container">
            <div id="about-container-center">
                <Info/>
                <Hobby
                    items={items}
                />
            </div>
            
        </div>
    )
}

export default About;