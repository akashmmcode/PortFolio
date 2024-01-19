import React from "react"
import './RoleComponent.css'
import {TweenMax,Power3} from 'gsap';
import gsap from 'gsap';
import process from '../../src/assets/process.png';


const RoleComponent = ()=>{

    React.useEffect(() => {
        const initialToFinal = gsap.from(".hello", {
          duration: 1,
          opacity: 0,
          y: 150,
          stagger: 0.5,
          onComplete: () => {
            // Reverse the animation using gsap.from
            gsap.to(".hello", {
              duration: 1,
              opacity: 1,
              y: 0,
              stagger: 0.5,
            });
          }
        });
    
        return () => {
          // Kill the animation on component unmount to avoid potential memory leaks
          initialToFinal.kill();
        };
      }, []);

      
    return(
        <>
        <div className="role-outer-div">
            {/* <section className="child">
            </section> */}
            <section className="child"> 
                <h1 className="hello">FRONT END <span>ADDICT</span>.&nbsp;&nbsp; &nbsp;<span>ACCESS</span>IBILITY.&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; PRIVACY.&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;<span>PIXEL</span>PERFECT. <span>RESPONSIVE</span>.&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;LOVE DISCOVERING NEW <span>CREATIVE</span> WORDLS. &nbsp; &nbsp; &nbsp;&nbsp;&nbsp; END.</h1>
                {/* <h1 className="hello"><span>PIXEL</span>PERFECT.</h1>
                <h1 className="hello"><span>RESPONSIVE</span>.</h1>
                <h1 className="hello">LOVE DISCOVERING NEW <span>CREATIVE</span> WORDLS.</h1>
                <h1 className="hello"><span>ACCESS</span>IBILITY.</h1>
                <h1 className="hello">PRIVACY.</h1> */}
            </section>
        </div>
          {/* <div className="process_outer_div">
            <img className="process" src={process}></img>
          </div> */}
        </>
    )
}


export default RoleComponent;