import Carousel from 'react-bootstrap/Carousel';
import Mamba from "../assets/images/Mamba.JPG";
import Reina from "../assets/images/Reina.jpg";
import Productive from "../assets/images/Productive.png"

const MyCarousel = () => (
    <Carousel fade>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Mamba}
          alt="2019 Stanford Solar Car"
        />
        <Carousel.Caption>
          <h3>2019 Stanford Solar Car</h3>
          <p>Aerodynamic design</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Reina}
          alt="Reina"
        />
        <Carousel.Caption>
          <h3>Reina</h3>
          <p>A pen designed and built from scratch</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Productive}
          alt="Productive"
        />
        <Carousel.Caption style={{color: "black"}}>
          <h3>Productive</h3>
          <p>The ultimate productivity app</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );

export default MyCarousel;