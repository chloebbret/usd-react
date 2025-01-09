import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Menu from "./inc/Menu";
import Home from "./files/Home";
import Club from "./files/Club";
import Teams from "./files/Teams";
import Medias from "./files/Medias";
import Contact from "./files/Contact";

const App = () => {
    return (
        <Router>
            <div>
                <Menu />

                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/club" element={<Club />} />
                    <Route path="/equipes" element={<Teams />} />
                    <Route path="/medias" element={<Medias />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
