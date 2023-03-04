import React from "react";
import headshot from "../assets/images/headshot.PNG"
import "./Home.css"

const Home = () => (
    <div className="grid-container">
        <img className="headshot" src={headshot} alt="Headshot" />
        <p className="about-me">About Me</p>
    </div>
)

export default Home;