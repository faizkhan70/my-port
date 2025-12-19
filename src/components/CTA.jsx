import React, { useRef } from 'react'
import GradientButton from './GradientButton'
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const CTA = () => {
  
  const ctaRef = useRef(null);
 
  useGSAP(() => {
    gsap.from(ctaRef.current, {
      backgroundColor:"#fff",
      color:"#000",
      scrollTrigger:{
        trigger: ctaRef.current,
        start: "center bottom",
        end: "bottom 60%",
        scrub: 1,
      }
    });
  }, []);
    
  return (
    <>
      <div ref={ctaRef}>
        <div className="main-container py-20 lg:py-28 h-full flex flex-col gap-8 justify-center items-center">
          <h4 className='max-w-6xl text-2xl lg:text-5xl text-center leading-[1.25]'>
            Ready to start your project? Let's collaborate and bring your vision to life!    
          </h4>
          <GradientButton text="Book a Call" link="/" />
        </div>
      </div>
    </>
  )
}

export default CTA;
