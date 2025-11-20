import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Nav from "./components/Nav/Nav"
import Home from "./pages/Home/Home";
import Project from './pages/Project/Project';
import Contact from "./pages/Contact/Contact";
import Footer from "./components/Footer/Footer";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import ThemeToggle from "./components/ThemeToggle/ThemeToggle";
import LanguageToggle from "./components/LanguageToggle/LanguageToggle";
import { LanguageProvider } from "./contexts/LanguageContext";

import 'bootstrap/dist/css/bootstrap.min.css';
import "./assets/styles/setting.css";

function App() {
    return (
        <LanguageProvider>
            <Router>
                <ScrollToTop />
                <ThemeToggle />
                <LanguageToggle />
                <div>
                    <Nav />
                    <div className="page-container">
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/project" element={<Project />} />
                            <Route path="/contact" element={<Contact />} />
                        </Routes>
                    </div>
                    <Footer />
                </div>
            </Router>
        </LanguageProvider>

    )
}

export default App;