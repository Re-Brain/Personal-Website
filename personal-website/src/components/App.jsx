import React from "react";
import Nav from "./Nav"
import Home from "./Home";
import About from "./About";
import Skill from "./Skill";
import Work from './Work';
import Experience from "./Experience";

import 'bootstrap/dist/css/bootstrap.min.css';

function App()
{
    return (
    <div id="page-container">
        <Nav />
        <Home />
        <About/>
        <Skill/>
        <Work/>
        <Experience/>
    </div>)
}

export default App;