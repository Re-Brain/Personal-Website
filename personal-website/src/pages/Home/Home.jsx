import React from "react";
import Profilepic from "./Profilepic"
import Profiletext from "./Profiletext";
import About from "./About/About";

import '../../assets/styles/home.css';
import '../../assets/styles/about.css';

function Home() {
    return (

        <div id="home-container">
            <div className="profile-section">
                <Profilepic />
                <Profiletext />
            </div>
            <About />
        </div>

    )
}

export default Home;