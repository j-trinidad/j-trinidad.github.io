import Image from "react-bootstrap/Image";
import slide1 from "../assets/images/slide1.png";
import slide2 from "../assets/images/slide2.png";

const Reina = () => (
  <div class="container">
    <h1>Reina</h1>
    <h6 className="mb-4">(This page is a work in progress)</h6>
    <Image
      fluid
      className="mb-5 w-90"
      style={{ display: "block", marginLeft: "auto", marginRight: "auto" }}
      src={slide1}
      alt="Reina overview"
    />
    <Image
      fluid
      className="mb-5 w-90"
      style={{ display: "block", marginLeft: "auto", marginRight: "auto" }}
      src={slide2}
      alt="Reina CAD"
    />
  </div>
);

export default Reina;
