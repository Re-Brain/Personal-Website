import React from "react";
import Nav from "./Nav"
import Home from "./Home";
import 'bootstrap/dist/css/bootstrap.min.css';

function App()
{
    return (
    <div id="page-container">
        <Nav />
        <Home />
    </div>)
}

export default App;