import React from "react";
import Nav from "./Nav/Nav";
import Home from "./Home/Home";
import About from "./About/About";
// import Skill from "./Skill/Skill";
import Work from "./Project/Project";
import Experience from "./Experience/Experience";
import Contact from "./Contact/Contact";
import Footer from "./Footer/Footer";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div>
      <Nav />
      <div className="page-container">
        <section id="home">{/* <Home /> */}</section>
        <section id="about">
          <About />
        </section>
        {/* <section id="skill">
                    <Skill/>
                </section> */}
        <section id="work">
          <Work />
        </section>
        {/* <section id="experience">
                    <Experience/>
                </section> */}
        <section id="contact">
          <Contact />
        </section>
      </div>
      <Footer />
    </div>
  );
}

export default App;
