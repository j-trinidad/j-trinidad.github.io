import React from "react";
import headshot from "../assets/images/headshot.PNG"
import "./Home.css"
import MyCarousel from "./MyCarousel";

const Home = () => (
    <div className="grid-container">
        <img className="headshot" src={headshot} alt="Headshot" />
        <p className="about-me">
            My name is Jason. I chose to pursue a BS in Mechanical Engineering at Stanford ('20) because I
            wanted to create useful products at scale. I am seeking a job as a
            Software Engineer to crank up the scale even more! (After all, bits are cheaper than atoms!)
            I hope the projects on this site show demonstrate my ability to learn quickly and my dedication to
            spectacular results.
        </p>
        <MyCarousel className="carousel" />
    </div>
)

export default Home;