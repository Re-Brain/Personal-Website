import React from "react";
import Nav from "./Nav"
import Home from "./Home";
import About from "./About";
import Skill from "./Skill";
import Work from './Work';
import Experience from "./Experience";
import Contact from "./Contact";

import 'bootstrap/dist/css/bootstrap.min.css';

function App()
{
    return (   
        <div>
            <Nav />
            <div className="page-container">
                <section id="home">
                    <Home />
                </section>
                <section id="about">
                    <About/>
                </section>
                <section id="skill">
                    <Skill/>
                </section>
                <section id="work">
                    <Work/>
                </section>
                <section id="experience">
                    <Experience/>
                </section>
                <section id="contact">
                    <Contact/>
                </section>
                <section id="footer">
                    
                </section>
            </div>
        </div>
    )
}

export default App;