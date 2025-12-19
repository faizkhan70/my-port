import React from "react";
import { gsap } from "gsap";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { useState } from "react";
import { Link } from "react-router-dom";
gsap.registerPlugin(useGSAP);

const Navbar = () => {

const [menuOpen, setMenuOpen] = useState(false);
  
  
  
  
const  navbarRef = useRef(null); 
  
// GSAP hook
  
useGSAP(() => {
  gsap.from(navbarRef.current,{
    opacity: 0,
    y: -100,
    duration: 0.6,
 } )
}
  
);


  return (
    
    <>
    <nav ref={navbarRef} className="fixed top-0 w-full z-30 mix-blend-difference">
      <div className="main-container px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        
        {/* Logo */}
        <img
          src="https://cdn.pixabay.com/photo/2022/03/30/01/44/f-7100393_1280.png"
          alt="Logo"
          className="h-8 sm:h-9 md:h-10 w-auto lg:h-20"
        />

        {/* Hamburger Menu */}
      <div
  onClick={() => setMenuOpen(!menuOpen)}
  className="flex flex-col gap-1.5 cursor-pointer"
>
  <span
    className={`block w-8 sm:w-9 md:w-12 h-0.5 bg-white transition-all duration-300 origin-center
    ${menuOpen ? "rotate-45 translate-y-[4px]" : ""}
    `}
  ></span>

  <span
    className={`block w-8 sm:w-9 md:w-12 h-0.5 bg-white transition-all duration-300 origin-center
    ${menuOpen ? "-rotate-45 -translate-y-[4px]" : ""}
    `}
  ></span>
</div>


      </div>
    </nav>
    
    {/* // full screen menu */}
    <div className={`fixed z-20 inset-0 bg-black text-white flex flex-col justify-center items-center
     gap-8 transition-transform duration-500 ${menuOpen ? "translate-y-0" : '-translate-y-full'} `} onClick={()=> setMenuOpen(false)}>
      <Link to="/" className="menu-link">Home</Link>
     <Link to="/projects" className="menu-link">Project</Link>
    <Link to="/contact" className="menu-link">Contact</Link>
    </div>
    </>
    
  );
};

export default Navbar;
