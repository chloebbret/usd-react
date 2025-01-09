import seniorsf from "../seniorsf.jpg";
import React from "react";
import '../css/Home.css';

function Home() {
    return (
        <div className="fullscreen-container">
            <img src={seniorsf} alt="" className="fullscreen-image"/>
        </div>
    );
}

export default Home;
