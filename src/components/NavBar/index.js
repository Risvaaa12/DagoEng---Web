"use client";
import React, { useState } from "react";
import links from "./links";
import NavLink from "./NavLink";

const NavBar = () => {
  const [isClick, setClick] = useState(false);

  const toggleNavbar = () => {
    setClick(!isClick);
  };

  return (
    <nav className="fixed z-50 bg-[#edffe4] w-full">
      <div className="px-4 mx-auto max-w-7xl md:px-6">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <a href="/" className="font-extrabold text-[#96c07e]">HydroHealth.</a>
          </div>
          <div className="hidden md:flex">
            <div className="flex items-center ml-4 space-x-4">
              {links.map((link) => (
                <NavLink key={link.label} {...link} />
              ))}
            </div>
          </div>
          <div className="md:hidden">
            <button
              className="p-2 rounded-md hover:bg-[#d6ffbe] transition-all"
              onClick={toggleNavbar}
              aria-label="Toggle navigation"
            >
              {/* Toggle Icon */}
            </button>
          </div>
        </div>
      </div>
      {isClick && (
        <div className="md:hidden">
          <div className="px-6 pt-2 pb-3 space-y-1">
            {links.map((link) => (
              <NavLink key={link.label} {...link} />
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}

export default NavBar;