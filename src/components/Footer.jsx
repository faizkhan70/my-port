import React from 'react'
import { FaGithub, FaInstagram, FaEnvelope } from "react-icons/fa";
const Footer = () => {
  return (
    <>
      {/* divider */}
      <div className="max-w-[1500px] m-auto h-[1px] bg-white opacity-10"></div>
      
      <footer className='main-container grid md:grid-cols-2 lg:grid-cols-4 gap-10 py-20'>
        <img
  src="https://cdn.pixabay.com/photo/2022/03/30/01/44/f-7100393_1280.png"
  alt="Logo"
  className="
    h-8          /* mobile */
    sm:h-9
    md:h-10
    lg:h-20      /* desktop */
    w-auto
    object-contain
  "
/>

        <div>
            <h5 className='font-medium mb-5'> Services </h5>
            <ul className='flex flex-col gap-2 text-base lg:text-lg'>
                <li>
                    <a href="">Web Design</a>
                </li>
                
                 <li>
                    <a href="">UI / UX</a>
                </li>
                
                 <li>
                    <a href="">Web Development</a>
                </li>
                
                 <li>
                    <a href="">Branding</a>
                </li>
            </ul>
        </div>
        
        <div>
        <h5 className='font-medium mb-5'> Accessibilty </h5>
 <ul className='flex flex-col gap-2 text-base lg:text-lg'>
                <li>
                    <a href="">Mon - Fri: 9:00 - 5:00</a>
                </li>
                
                 <li>
                    <a href="">24/7 WhatsApp & Email</a>
                </li>
            </ul>
        </div>
           <div>
        <h5 className='font-medium mb-5'> Contact </h5>
 <ul className='flex flex-col gap-2 text-base lg:text-lg'>
                <li>
                    <a href="">fkuser@gmail.com</a>
                </li>
                
                 <li>
                    <a href="">+91 7054856378</a>
                </li>
            </ul>
        </div>
      </footer>
      
      
        {/* divider */}
      <div className="max-w-[1500px] m-auto h-[1px] bg-white opacity-10"></div>
      
      <div className="main-container grid md:grid-cols-2 gap-3 py-6 lg:py-8 max-md:text-center">
        <div className='text-base lg:text-lg'> © 2025 Faiz Khan. All rights reserved. </div>
        
        <div className="flex gap-3 justify-center md:justify-end">
      <a
        href="https://github.com/yourusername"
        target="_blank"
        rel="noopener noreferrer"
        className="text-2xl text-gray-700 hover:text-white transition"
      >
        <FaGithub />
      </a>

      <a
        href="https://instagram.com/yourusername"
        target="_blank"
        rel="noopener noreferrer"
        className="text-2xl text-pink-600 hover:text-pink-700 transition"
      >
        <FaInstagram />
      </a>

      <a
        href="mailto:yourmail@gmail.com"
        className="text-2xl text-white-500 hover:text-red-600 transition"
      >
        <FaEnvelope />
      </a>
    </div>
      </div>
    </>
  )
}

export default Footer
