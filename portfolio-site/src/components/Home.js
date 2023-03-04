import React from "react";
import headshot from "../assets/images/headshot.PNG"
import "./Home.css"
import MyCarousel from "./MyCarousel";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

const Home = () => (
    <div className="grid-container">
        <div className="about-container">
            <img className="headshot" src={headshot} alt="Headshot" />
            <p className="about-me">
                My name is Jason. I'm a software engineer, amateur maker,
                 and car enthusiast. Take a look at some of my projects!
            </p>
        </div>
        <Container>
            <Row className="justify-content-md-center">
                <MyCarousel />
            </Row>
        </Container>
    </div>
)

export default Home;