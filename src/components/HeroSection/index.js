'use client'

import Link from "next/link"
import Image from 'next/image'
import heroImg from '../../../src/img/hero.png'
import undikshaImg from '../../../src/img/undiksha.png'
import dagoImg from '../../../src/img/dago.png'

const HeroSection = () => {
    return (
        <div className="grid grid-cols-1 gap-2 px-2 py-24 lg:grid-cols-3 md:grid-cols-2 lg:gap-4 auto-fit">
            <div className="ml-6 lg:ml-16 ">
                <h1 className="text-3xl font-bold lg:text-5xl">Collaboration</h1>
                <div className="flex p-4 ml-4 pl-0 lg:pl-6">
                    <div className="relative">
                        <Image
                            src={undikshaImg} 
                            alt="..." 
                            className="w-auto h-16 lg:h-24"
                        />
                    </div>
                    <div className="relative">
                        <Image
                            src={dagoImg} 
                            alt="..." 
                            className="w-auto h-16 lg:h-24"
                        />
                    </div>
                </div>
                <p className="h-auto text-xs text-justify md:text-sm lg:text-base w-80">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                <Link 
                    href="#"
                    target="_blank"
                    rel="noopener" 
                    className="p-4 text-xs text-blue-500 underline hover:opacity-60 ">
                    Selengkapnya ↓
                </Link> 
                </p>
            </div>
            <div className="lg:pt-16 pt-0 lg:h-[400px]">
                <Image 
                    src={heroImg} 
                    alt="..." 
                />
            </div>
            <div className="mt-12 ml-6 lg:ml-24 lg:mt-36 mb-12">
                <h1 className="text-4xl font-bold lg:text-5xl">About</h1>
                <h1 className="text-3xl font-bold lg:text-4xl">Us</h1>
                <p className="h-auto pb-6 text-xs text-justify md:text-sm lg:text-base w-80">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.  
                <Link 
                    href="#"
                    target="_blank"
                    rel="noopener" 
                    className="p-4 text-xs text-blue-500 underline hover:opacity-60 ">
                    Selengkapnya ↓
                </Link>
                </p>
                <button className="hover:opacity-70">
                    <Link
                    href="#"
                    target="_blank"
                    rel="noopener"
                    className="px-8 py-3 text-lg font-bold text-center bg-[#c2efa8] rounded lg ">
                    Join Us👑
                    </Link>
                </button>
            </div>
        </div>
    );
    
}

export default HeroSection;