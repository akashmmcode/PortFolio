import "./DescriptionComponent.css";
import akash from "../../src/assets/AKASH.png";
import React from "react";
import gsap from "gsap";

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
      <div className="desc">
        <section>
          <h3>
            Driven by a commitment to break down the conventional barriers,
            transforming into a true "DESIGN-VELOPER" -someone who crafts user
            experiences with the precision of a designer and the technical
            finesse of a developer.
          </h3>
          <img className="barcode" src={akash}></img>
        </section>
        <div className="blackbanner">
          <h1>"</h1>
          <h1>"</h1>
        </div>
        <div className="details">
          <h5>AKASH.MM - BANGLORE</h5>
          <h5>FRONT END DEVELOPER</h5>
          <h5>JULY 12,2021 - PRESENT</h5>
        </div>
      </div>
    </>
  );
};

export default DescriptionComponent;
