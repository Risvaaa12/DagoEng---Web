'use client'
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import NavLink from './NavLink';
import Image from 'next/image';
import hydrohealthLogo from '../../../src/img/hydrohealthImg3.png';
import Auth from '../Authentication';
import { auth } from '../../app/firebase';

const NavBar = () => {
  const [isClick, setClick] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isModalOpen, setModalOpen] = useState(false);
  const isLogin = false;

  const toggleNavbar = () => {
    setClick(!isClick);
  };

  const toggleModal = () => {
    setModalOpen(!isModalOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const position = window.pageYOffset;
      setScrollPosition(position);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navbarStyles = {
    backgroundColor: `rgba(237, 255, 228, ${scrollPosition > 0 ? 0.8 : 1})`,
  };

  const handleLogout = async () => {
    try {
      await auth.signOut();
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };

  return (
    <nav className="fixed z-50 w-full border-b-2 border-[#c2efa8]" style={navbarStyles}>
      <div className="px-4 mx-auto max-w-7xl">
        <div className="flex items-center justify-between h-16">
          <button className="relative">
            <Image 
              src={hydrohealthLogo} 
              alt="Hydrohealth Logo"
              className="w-auto h-32"
            />
          </button>
          <div className="hidden md:flex items-center space-x-4">
            <NavLink href="#product" label="Product" />
            <NavLink href="#feature" label="Feature" />
            <NavLink href="#contact" label="Contact" />
            <NavLink href="/blog" label="Blog" />
            {!isLogin &&
              <button onClick={toggleModal} className="font-bold text-slate-400 border-2 border-slate-400 rounded-xl px-6 py-2">
              Login
              </button>
            }
            {isLogin &&
              <button onClick={toggleModal} className="font-bold text-slate-400 border-2 border-slate-400 rounded-xl px-6 py-2">
              Log Out
              </button>
            }
            
          </div>
          <div className='md:hidden'>
            <button
              className="p-4 rounded-md bg-[#d6ffbe] transition-all"
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
      <div className={` ${isClick ? 'block' : 'hidden'}`}>
        <div className="px-6 pt-2 pb-3 space-y-1 flex flex-col items-center"> 
          <NavLink href="#product" label="Product" />
          <NavLink href="#feature" label="Feature" />
          <NavLink href="#contact" label="Contact" />
          <NavLink href="/blog" label="Blog" />
          {!isLogin &&
              <button onClick={toggleModal} className="font-bold text-slate-400 border-2 border-slate-400 rounded-xl px-6 py-2">
              Login
            </button>
            }
            {!isLogin &&
              <button onClick={toggleModal} className="font-bold text-slate-400 border-2 border-slate-400 rounded-xl px-6 py-2">
              Profile
            </button>
            }
        </div>
      </div>
      <Auth isOpen={isModalOpen} toggleModal={toggleModal} />
    </nav>
  );
}

export default NavBar;
