"use client";

import Header from "@/components/Header";
import Image from "next/image";
import { useState } from "react";

export default function OurJourney() {
  const [activeYear, setActiveYear] = useState("2025");

  const timelineData = [
    {
      year: "2025",
      title: "Inshift Is Born",
      description: "We created Inshift Media to become one of the world's first specialized agencies scaling into a mega content powerhouse.",
      image: "/3f01e8ba-c549-4f80-8420-3153cb178308.png"
    },
    {
      year: "2026",
      title: "",
      description: "",
      image: "/3f01e8ba-c549-4f80-8420-3153cb178308.png"
    },
    {
      year: "2027",
      title: "",
      description: "",
      image: "/3f01e8ba-c549-4f80-8420-3153cb178308.png"
    },
    {
      year: "2028",
      title: "",
      description: "",
      image: "/3f01e8ba-c549-4f80-8420-3153cb178308.png"
    },
    {
      year: "2029",
      title: "",
      description: "",
      image: "/3f01e8ba-c549-4f80-8420-3153cb178308.png"
    },
    {
      year: "2030",
      title: "",
      description: "",
      image: "/3f01e8ba-c549-4f80-8420-3153cb178308.png"
    },
    {
      year: "2031",
      title: "",
      description: "",
      image: "/3f01e8ba-c549-4f80-8420-3153cb178308.png"
    }
  ];

  const activeContent = timelineData.find(item => item.year === activeYear) || timelineData[0];

  return (
    <div className="flex flex-col min-h-screen bg-white text-black selection:bg-[#7c3aed] selection:text-white pb-32">
      <Header />
      
      {/* Dark Hero Section */}
      <section className="bg-black pt-56 md:pt-72 lg:pt-80 pb-24 px-6 md:px-12 w-full lg:px-24 overflow-hidden relative">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-start justify-between gap-16 relative z-10">
          
          {/* Left Hero Content */}
          <div className="flex flex-col max-w-xl">
            <div className="text-gray-400 text-sm font-semibold tracking-wide mb-12 flex space-x-2">
              <span className="hover:text-white cursor-pointer transition-colors">Home</span>
              <span>/</span>
              <span className="hover:text-white cursor-pointer transition-colors">About</span>
              <span>/</span>
              <span className="text-white">Our Story</span>
            </div>
            
            <h1 className="text-white text-5xl md:text-7xl font-bold tracking-tight mb-8">
              Our Story
            </h1>
            
            <p className="text-gray-300 text-xl font-medium mb-12 max-w-md leading-relaxed">
              Disrupting the traditional media and marketing ecosystem with viral contents.
            </p>
            
            <a href="https://wa.link/b4z4gt" target="_blank" rel="noopener noreferrer" className="inline-block no-underline">
              <button className="self-start bg-transparent border-2 border-[#7c3aed] text-white px-8 py-4 font-bold text-sm hover:bg-[#7c3aed] transition-colors">
                Get In Touch
              </button>
            </a>
          </div>

          {/* Right Hero Image w/ Gradient Drop Shadow Block */}
          <div className="relative w-full lg:w-1/2 min-h-[400px] mt-12 lg:mt-0">
             {/* Gradient Backdrop Component */}
             <div className="absolute right-0 bottom-0 w-[90%] h-[90%] bg-gradient-to-br from-[#7c3aed] to-[#c084fc] z-0 translate-x-8 translate-y-8"></div>
             {/* Actual Image Layer */}
             <div className="absolute left-0 top-0 w-full h-full z-10">
                <Image 
                  src="/our-story-hero.jpeg" 
                  alt="Inshift Story" 
                  fill 
                  className="object-cover object-center border border-zinc-800"
                />
             </div>
          </div>
          
        </div>
      </section>

      {/* Global Leader Transition Section */}
      <section className="px-6 md:px-12 py-24 w-full lg:px-24">
         <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-8">
              A Global Leader In Social Media Innovation
            </h2>
            <p className="text-xl md:text-2xl text-gray-800 font-medium leading-relaxed">
              Inshift moves brands away from traditional media-led strategies toward social-first transformations, at scale. We help brands conquer social with the world's largest roster of content creators, crafting award-winning campaigns with <span className="text-[#7c3aed] cursor-pointer hover:underline">End-To-End Marketing Services</span>. Powering everything is <span className="text-[#7c3aed] cursor-pointer hover:underline">Inshift Secure™</span> and <span className="text-[#7c3aed] cursor-pointer hover:underline">CreatorOS</span>, which optimize brand fit and protect brand reputation.
            </p>
         </div>
      </section>

      {/* Landmark Moments Timeline UI */}
      <section className="px-6 md:px-12 w-full lg:px-24 mb-32">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold tracking-tight mb-8">Landmark Moments</h2>
          
          <div className="w-full bg-black text-white p-8 md:p-16 flex flex-col lg:flex-row relative shadow-2xl min-h-[600px] items-stretch">
            
            {/* Timeline Left Image Frame */}
            <div className="w-full lg:w-1/2 relative bg-zinc-900 border border-zinc-800 border-opacity-50 mb-12 lg:mb-0 lg:mr-16 flex-none">
              {/* Fade in transition handled simply by using a key to remount or robust CSS. React handles fast replace fine visually. */}
              <Image 
                key={activeContent.image}
                src={activeContent.image} 
                alt={activeContent.title} 
                fill 
                className="object-cover object-center animate-in fade-in duration-500" 
              />
            </div>

            {/* Timeline Right Content & Nav */}
            <div className="flex-grow flex flex-col justify-between pt-4 relative">
              
              {/* Title Block */}
              <div className="max-w-md pr-16 animate-in slide-in-from-right-4 fade-in duration-500" key={activeContent.title}>
                 <span className="text-white text-xs font-bold tracking-[0.2em] mb-4 block">
                   {activeContent.year}
                 </span>
                 <h3 className="text-3xl lg:text-4xl font-bold leading-tight mb-6">
                   {activeContent.title}
                 </h3>
                 <p className="text-gray-400 text-lg leading-relaxed font-medium">
                   {activeContent.description}
                 </p>
              </div>

              {/* Bottom Right Vertical Nav UI */}
              <div className="absolute right-0 bottom-0 top-[20%] lg:top-[50%] flex justify-end items-end space-x-2 md:space-x-6 pb-2 mr-[-10px]">
                {timelineData.map((item) => (
                  <button 
                    key={item.year}
                    onClick={() => setActiveYear(item.year)}
                    className="flex flex-col items-center justify-end focus:outline-none group pb-4"
                  >
                    <span 
                      className={`font-bold text-lg md:text-xl tracking-wider transition-colors origin-bottom-left -rotate-90 translate-y-[-10px] w-8 translate-x-[15px]
                        ${activeYear === item.year ? 'text-white' : 'text-gray-600 group-hover:text-gray-400'}
                      `}
                    >
                      {item.year}
                    </span>
                  </button>
                ))}
              </div>

            </div>
          </div>
        </div>
      </section>

      
    </div>
  );
}
