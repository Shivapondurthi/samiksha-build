'use client';
import React, { useState, useEffect } from 'react';
 import Image from 'next/image';
const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
 
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
 
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
 
  return (
    <div
      className={`fixed w-full h-[105px] left-0 top-0 flex items-center px-10 z-[100] transition-all duration-300 ${
        isScrolled ? 'bg-white/80 backdrop-blur-md shadow-md' : 'bg-transparent'
      }`}
    >
     <Image
  src="/images/samiksha-logo.jpg"
  alt="Logo"
  width={210} // Set the width of the logo
  height={92} // Set the height of the logo
  layout="intrinsic" // This will make it scale based on the provided width and height
  className="object-contain top-0"
/>

      <nav className="absolute w-[796px] h-[22px] left-[359px] top-[40px] flex space-x-8 text-black font-medium">
        <a href="#" className="hover:text-[#0F6CB4] relative after:content-[''] after:absolute after:w-full after:h-[2px] after:bg-[#0F6CB4] after:left-0 after:bottom-0 after:scale-x-0 after:transition-transform after:duration-300 after:origin-left hover:after:scale-x-100">ALL COURSES</a>
        <a href="#" className="hover:text-[#0F6CB4] relative after:content-[''] after:absolute after:w-full after:h-[2px] after:bg-[#0F6CB4] after:left-0 after:bottom-0 after:scale-x-0 after:transition-transform after:duration-300 after:origin-left hover:after:scale-x-100">TOPPERS</a>
        <a href="#" className="hover:text-[#0F6CB4] relative after:content-[''] after:absolute after:w-full after:h-[2px] after:bg-[#0F6CB4] after:left-0 after:bottom-0 after:scale-x-0 after:transition-transform after:duration-300 after:origin-left hover:after:scale-x-100">STUDY MATERIAL</a>
        <a href="#" className="hover:text-[#0F6CB4] relative after:content-[''] after:absolute after:w-full after:h-[2px] after:bg-[#0F6CB4] after:left-0 after:bottom-0 after:scale-x-0 after:transition-transform after:duration-300 after:origin-left hover:after:scale-x-100">CURRENT AFFAIRS</a>
        <a href="#" className="hover:text-[#0F6CB4] relative after:content-[''] after:absolute after:w-full after:h-[2px] after:bg-[#0F6CB4] after:left-0 after:bottom-0 after:scale-x-0 after:transition-transform after:duration-300 after:origin-left hover:after:scale-x-100">CONTACT</a>
        <a href="#" className="hover:text-[#0F6CB4] relative after:content-[''] after:absolute after:w-full after:h-[2px] after:bg-[#0F6CB4] after:left-0 after:bottom-0 after:scale-x-0 after:transition-transform after:duration-300 after:origin-left hover:after:scale-x-100">FAQ</a>
      </nav>
      <button className="absolute w-[188px] h-[60px] top-[14px] left-[1221px] bg-[#0F6CB4] text-white rounded-[30px] font-medium text-lg transition-all duration-300 ease-in-out transform hover:bg-blue-580 hover:scale-105 hover:shadow-lg cursor-pointer">
        Let&apos;s Talk
      </button>
    </div>
  );
};
 
export default Header;
 