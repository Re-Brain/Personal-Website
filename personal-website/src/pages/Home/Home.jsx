import React from "react";
import Profilepic from "./Profilepic"
import Profiletext from "./Profiletext";
import About from "./About/About";
import Education from "./Education/Education";
import Tech from "./Tech/Tech";
import GitHub from "./GitHub/GitHub";

import '../../assets/styles/home.css';
import '../../assets/styles/about.css';

function Home() {
    return (
        <>
            <div id="home-container">
                <div className="profile-section">
                    <Profilepic />
                    <Profiletext />
                </div>
            </div>

            <About />

            <Education />

            <Tech />

            <GitHub />
        </>
    )
}

export default Home;