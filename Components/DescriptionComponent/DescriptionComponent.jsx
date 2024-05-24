import "./DescriptionComponent.css";
import akash from "../../src/assets/AKASH.png";
import React from "react";
import gsap from "gsap";
import photo from "../../src/assets/profiledp.svg";
import photo1 from "../../src/assets/cartoondp.png";
import photo2 from "../../src/assets/frontend.png";
import stamp from "../../src/assets/stamp.png"

const DescriptionComponent = () => {
  React.useEffect(() => {
    const initialToFinal = gsap.fromTo(
      ".blackbanner",
      { y: 150, opacity: 0 },
      { y: 0, opacity: 1, stagger: 1, duration: 2, ease: "sine" }
    );

    return () => {
      // Kill the animation on component unmount to avoid potential memory leaks
      initialToFinal.kill();
    };
  });
  return (
    <>
      <div className="about_outer_div">
        <div className="front_end_addict_outer_div">


          <h1 className="front_end">FR<span className="short">O</span>NT-END</h1>
          <div className="horizontal-line"></div>
          <h1 className="addict">ADDI<span className="shortc">C</span>T!</h1>
          <div className="horizontal-line"></div>

          <div>
            <img className="techstack" src={photo2}></img>
          </div>
          <div className="description_container">
            <h1 className="description">
              As multidisciplinary freelancer, I'm passionate about creating
              iconic digital experiences through motion, typography, and
              creative coding for companies and agencies around the world.
            </h1>
          </div>
        </div>
        <div className="photo_outer_div">
          <img className="profilephoto" src={photo1}></img>
          <h1>DESI<span className="short">G</span>N-VEL<span className="short">O</span>PER</h1>
          <div className="horizontal-line1"></div>
          <h1><span className="short">C</span>REATIVE DEVEL<span className="short">O</span>PER</h1>
          <div className="horizontal-line2"></div>
          <h1>BASED IN BAN<span className="short">G</span>AL<span className="short">O</span>RE,IN.</h1>
          <div className="horizontal-line3"></div> 
        </div>
      </div>

      <div className="desc">
       <h1>WEBSITE</h1>
       <img className="stamp" src={stamp}></img>
      </div>
    </>
  );
};

export default DescriptionComponent;
