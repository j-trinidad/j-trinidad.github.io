import Image from "react-bootstrap/Image";
import Mamba from "../assets/images/Mamba.JPG";
import CFD from "../assets/images/CFD.png"
import Topshell from "../assets/images/Topshell.png"

const SSCP = () => (
  <div class="container">
    <h1>Design of a streamlined aeroshell</h1>
    <Image
      fluid
      className="mb-5 w-50"
      style={{ display: "block", marginLeft: "auto", marginRight: "auto" }}
      src={Mamba}
      alt="Aeroshell design"
    />
    <p>
      Every two years, the Stanford Solar Car Project designs and builds a
      new solar-powered endurance racer. On odd-numbered years, the team ships
      its members and their creation to Australia, where they race across the
      continent (from Darwin, NT to Adelaide, SA) against competitors from around
      the world as part of the Bridgestone World Solar Challenge. Since the only
      recharging allowed is via the car's solar array, aerodynamics plays a crucial
      role in this challenge. I led a team of 5 to design the 2019 Stanford Solar Car's
      5 meter long "aeroshell" - the external composite structure responsible for minimizing the car's 
      resistance to air.
    </p>
    <Image
      fluid
      className="mb-5 w-50"
      style={{ display: "block", marginLeft: "auto", marginRight: "auto" }}
      src={CFD}
      alt="Visualization of CFD results"
    />
    <p>
      The primary challenge for the Aero team in 2018 came in the form of software.
      Our design process relied on Computational Fluid Dynamics (CFD) - massively parallel
      (in our case) simulations that model the behavior of fluids around a given geometry.
       In 2018, every person that the team had historically relied on to configure and operate
       this software were no longer at our disposal. With no prior experience, I took ownership
        of installing, maintaining, and running this complicated (yet capable!) 
        <a href="https://su2code.github.io"> open-source software</a>. 
    </p>
    <Image
      fluid
      className="mb-5 w-50"
      style={{ display: "block", marginLeft: "auto", marginRight: "auto" }}
      src={Topshell}
      alt="Topshell mold on delivery"
    />
    <p>
      Starting with `cd` and `ls`, I googled my way through writing Slurm and TORQUE
      job management scripts, reverting, un-installing and re-installing dependencies,
      and hours of debugging error codes and failed attempts. Our efforts paid off - 
      35 design iterations and many keystrokes later, we produced a final design with
      25 Newtons (~5.6 lbs) of straight-line drag at 55 mph, in simulation. This marked
       a 15% reduction over the previous Stanford Solar Car. We delivered the final 
       files to our composite mold manufacturer on-time in December of 2018.
    </p>
  </div>
);

export default SSCP;
