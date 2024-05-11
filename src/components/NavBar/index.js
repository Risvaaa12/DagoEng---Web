'use client'

import React, { useState, useEffect } from "react";
import links from "./links";
import NavLink from "./NavLink";
import Image from 'next/image'
import hydrohealthLogo from "../../../src/img/hydrohealthImg3.png";

const NavBar = () => {
  const [isClick, setClick] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);

  const toggleNavbar = () => {
    setClick(!isClick);
  };

  useEffect(() => {
    const handleScroll = () => {
      const position = window.pageYOffset;
      setScrollPosition(position);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navbarStyles = {
    backgroundColor: `rgba(237, 255, 228, ${scrollPosition > 0 ? 0.8 : 1})`,
  };

  return (
    <nav className="fixed z-50 w-full border-b-2 border-[#c2efa8]" style={navbarStyles}>
      <div className="px-4 mx-auto max-w-7xl md:px-6">
        <div className="flex items-center justify-between h-16">
          <div className="relative">
            <Image 
              src={hydrohealthLogo} 
              alt="..." 
              className="w-auto h-32 lg:h-48"
            />
          </div>
          <div className="hidden md:flex items-center space-x-4">
            {links.map((link) => (
              <NavLink key={link.label} {...link} />
            ))}
          </div>
          <div className="md:hidden">
            <button
              className="p-4 rounded-md hover:bg-[#d6ffbe] transition-all"
              onClick={toggleNavbar}
              aria-label="Toggle navigation"
            >
              <div className="block w-5">
                <span className={`block h-0.5 mt-1 rounded bg-black transition-all ${isClick ? 'transform rotate-45 origin-top-left' : ''}`}></span>
                  <span className={`block h-0.5 mt-1 rounded bg-black transition-all ${isClick ? 'opacity-0' : ''}`}></span>
                  <span className={`block h-0.5 mt-1 rounded bg-black transition-all ${isClick ? 'transform -rotate-45 origin-bottom-left' : ''}`}></span>
              </div>
            </button>
          </div>
        </div>
      </div>
      <div className={`md:hidden ${isClick ? 'block' : 'hidden'}`}>
        <div className="px-6 pt-2 pb-3 space-y-1 flex flex-col items-center"> 
          {links.map((link) => (
            <NavLink key={link.label} {...link} />
          ))}
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
