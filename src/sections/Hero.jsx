import React from "react";
import GradientButton from "../components/GradientButton";
import { gsap } from "gsap";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(ScrollTrigger, SplitText, useGSAP);
const Hero = () => {
  
  const heroRef = useRef(null);
  
  // pin hero section on scroll
  
  useGSAP(() => {
    ScrollTrigger.create({
      trigger: heroRef.current,
      start: "top top",
      end: "bottom top",
      pin: true,
      pinSpacing: false,
      scrub: 1,
    });
    
    SplitText.create("h1"  ,{
      type:"lines, words",
      mask: "lines",
      autoSplit: true,
      onSplit(self){
        gsap.from(self.words, {
          y:100,
           opacity:0,
            stagger:0.1,
      })
    }
     
    });
    
      SplitText.create("h2"  ,{
      type:"lines, words",
      mask: "lines",
      autoSplit: true,
      onSplit(self){
        gsap.from(self.words, {
          y:100,
           opacity:0,
            stagger:0.15,
            delay:0.3,
      })
    }
    });
    
    gsap.from(".gradien-btn", {
      opacity: 0,
      y: 40,
      duration: 0.6,
      ease: "power3.out",
      delay: 1.25,
    });
    
    gsap.from(".star img", {
      scale: 0,
      rotation: 180,
      opacity: 0,
     transformOrigin: "center center",
     duration: 1.3,
     ease: "back.out(1.7) ",
    onComplete: () => {
        gsap.to(".star img", {
          rotation: "+=360",
          duration: 20,
          ease: "linear",
          repeat: -1,
     })
    }
    })
    
    
  }, {scope: heroRef} );
  
  
  
  
  
  return (
    <section ref={heroRef} className="relative overflow-hidden">
      
      <div className="
        main-container
        h-screen
        flex flex-col
        items-start
        pt-32          /* ✅ mobile top padding */
        lg:pt-0        /* ✅ remove padding on desktop */
        lg:justify-center
        lg:py-12
      ">
        <h1 className="text-3xl lg:text-[3.2vw] uppercase font-heading font-semibold">
          Faiz Khan
        </h1>

        <h2 className="text-6xl lg:text-[8vw] font-heading font-bold leading-[1] tracking-tight mt-3 mb-6">
          Web Developer <br /> &{" "}
          <span className="text-stroke">Designer</span>
        </h2>

        <GradientButton
          text="Let's Talk"
          link="mailto:fkuser@gmail.com"
          className="gradien-btn"
        />
      </div>

      <div className="star absolute -z-10 top-80 lg:top-32 right-[-35%] lg:right-[-12%]">
        <img
          src="https://cdn.pixabay.com/photo/2012/11/05/07/51/ice-crystal-64157_1280.jpg"
          alt=""
          className="h-[48vh] lg:h-[80vh]"
        />
      </div>

    </section>
  );
};

export default Hero;
