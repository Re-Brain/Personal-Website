import React from "react";
import Profilepic from "./Profilepic"
import Profiletext from "./Profiletext";
import About from "./About/About";
import Education from "./Education/Education";
import Languages from "./Languages/Languages";
import Tech from "./Tech/Tech";
import GitHub from "./GitHub/GitHub";
import FeaturedProjects from "./Projects/FeaturedProjects";
import GetInTouch from "./GetInTouch/GetInTouch";

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

            <section className="home-section home-section-alt">
                <About />
            </section>

            <section className="home-section">
                <Education />
            </section>

            <section className="home-section home-section-alt">
                <Languages />
            </section>

            <section className="home-section">
                <Tech />
            </section>

            <section className="home-section home-section-alt">
                <GitHub />
            </section>

            <section className="home-section">
                <FeaturedProjects />
            </section>

            <section className="home-section home-section-alt">
                <GetInTouch />
            </section>
        </>
    )
}

export default Home;