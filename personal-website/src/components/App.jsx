import React from "react";
import Nav from "./Nav"
import Home from "./Home";
import About from "./About";
import 'bootstrap/dist/css/bootstrap.min.css';

function App()
{
    return (
    <div id="page-container">
        <Nav />
        <Home />
        <About/>
    </div>)
}

export default App;