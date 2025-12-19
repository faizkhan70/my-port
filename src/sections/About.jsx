import React from 'react'
import { gsap } from "gsap";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(ScrollTrigger, SplitText, useGSAP);
const About = () => {
  
  const aboutRef = useRef(null);
  
  useGSAP (()=>{
    SplitText.create(".about-text",{
      type:"lines, chars",
      onSplit(self){
        gsap.set(self.chars, {
          opacity: 0.25
        });
        
        
        gsap.to(self.chars, {
          opacity: 1,
          stagger: 0.05,
          scrollTrigger:{
            trigger: aboutRef.current,
            start: "top 70%",
            end: "center center",
            scrub: 1,
          }
        })
      }
    })
  });
  
  return (
    <>
    <div ref={aboutRef} className='relative z-20 h-screen bg-white  rounded-tl-[60px] rounded-tr-[60px]'>
        <div className="about-text main-container py-4 lg:py-12 h-full flex justify-center items-center font-heading text-black text-2xl md:text-3xl xl:text-5xl leading-[1.25]">
            My approach combines clean desing, smooth interactions, and thoughtful
            details to ensure every project feels both visually striking and highly
            functional. wether it's designing a portfolio, building a business website,
            or shaping a barand's online persence, I focus on creating work that not only
            looks good but also connects with people in a meaningful way.
        </div>
    </div>
    </>
  )
}

export default About;
