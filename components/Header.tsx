"use client";

import { useState } from "react";
import Image from "next/image";

export default function Header() {
  const [isCountryOpen, setIsCountryOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState("Ghana");

  const countries = ["United States", "United Kingdom", "Nigeria", "South Africa", "Kenya", "Rwanda", "UAE", "Ghana"];

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-40 flex items-center justify-between px-6 py-4 md:px-12 md:py-6 bg-white/90 text-black backdrop-blur-sm border-b border-gray-100">
        <div className="flex items-center -ml-4 md:-ml-6 lg:-ml-8">
          <Image src="/logo.png" alt="Inshift Media Logo" width={800} height={500} className="w-auto h-12 sm:h-16 md:h-36 lg:h-44 scale-125 origin-left object-contain mix-blend-multiply" quality={100} priority />
        </div>
        
        <div className="flex items-center space-x-6 text-sm font-semibold">
          {/* Top Nav Country Dropdown */ }
          <div className="relative hidden md:block">
            <button 
              className="flex items-center cursor-pointer hover:text-blue-600 transition-colors focus:outline-none"
              onClick={() => setIsCountryOpen(!isCountryOpen)}
            >
              {selectedCountry}
              <svg className={`w-4 h-4 ml-1 transform transition-transform duration-200 ${isCountryOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
            </button>
            
            {/* Country Dropdown Panel */}
            {isCountryOpen && (
              <div 
                className="absolute top-full right-0 mt-6 w-48 bg-white border border-gray-100 shadow-2xl py-4 flex flex-col z-50 rounded-md overflow-hidden animate-in fade-in slide-in-from-top-2 duration-200"
              >
                {countries.map((country) => (
                  <button 
                    key={country} 
                    className={`text-left px-6 py-2.5 text-[13px] transition-colors focus:outline-none ${selectedCountry === country ? 'font-bold text-black bg-gray-50' : 'text-gray-400 hover:text-black hover:bg-gray-50 font-medium'}`}
                    onClick={() => {
                      setSelectedCountry(country);
                      setIsCountryOpen(false);
                    }}
                  >
                    {country}
                  </button>
                ))}
              </div>
            )}
          </div>
          
          {/* Hamburger Menu */}
          <button 
            className="flex flex-col space-y-1.5 focus:outline-none group z-50 p-2"
            onClick={() => setIsSidebarOpen(true)}
          >
            <span className="w-6 h-0.5 bg-black block group-hover:bg-blue-600 transition-colors"></span>
            <span className="w-6 h-0.5 bg-black block group-hover:bg-blue-600 transition-colors"></span>
          </button>
        </div>
      </header>

      {/* Sidebar Overlay */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 z-50 flex justify-end bg-black/20 backdrop-blur-sm transition-opacity" 
          onClick={() => setIsSidebarOpen(false)}
        >
          <div 
            className="w-full max-w-[400px] bg-black text-white h-full flex flex-col p-8 md:p-12 shadow-2xl animate-in slide-in-from-right duration-300 overflow-y-auto" 
            onClick={(e) => e.stopPropagation()}
          >
            {/* Sidebar Header */}
            <div className="flex justify-between items-center mb-16">
              <div className="relative group/side-country">
                <button className="flex items-center text-sm font-bold cursor-pointer text-white hover:text-gray-300 focus:outline-none group">
                  {selectedCountry}
                  <svg className="w-4 h-4 ml-2 transition-transform group-hover/side-country:-rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                </button>
                {/* Simplified internal quick-dropdown for sidebar hover */}
                <div className="absolute top-full left-0 mt-2 w-48 bg-zinc-900 border border-zinc-800 shadow-xl py-2 flex-col z-50 rounded-md hidden group-hover/side-country:flex transition-opacity">
                  {countries.slice(0, 5).map(c => (
                     <button 
                      key={c}
                      className="text-left px-4 py-2 text-xs text-gray-400 hover:text-white hover:bg-zinc-800"
                      onClick={() => { setSelectedCountry(c); /* Close sidebar logic if needed */ }}
                     >{c}</button>
                  ))}
                </div>
              </div>
              
              <button 
                className="text-white hover:text-gray-400 transition-colors focus:outline-none p-2 -mr-2" 
                onClick={() => setIsSidebarOpen(false)}
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
              </button>
            </div>
            
            {/* Sidebar Navigation */}
            <nav className="flex flex-col space-y-6 md:space-y-8 flex-grow">
              {['Home', 'Work', 'Services', 'People', 'News', 'Careers'].map((item) => {
                const subPath = item.toLowerCase() === 'home' ? '' : item.toLowerCase();
                const routeUrl = `/${subPath}`;
                return (
                  <a key={item} href={routeUrl} className="text-2xl md:text-3xl font-medium tracking-tight text-white hover:text-gray-400 transition-colors">
                    {item}
                  </a>
                );
              })}
              <a href="/contact" className="text-2xl md:text-3xl font-medium tracking-tight text-white hover:text-gray-400 transition-colors flex items-center justify-between group pt-2">
                Contact
                <svg className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              </a>
            </nav>
            
            {/* Sidebar Footer */}
            <div className="mt-12 pt-8 border-t border-white/20 text-xs text-gray-400 font-medium leading-relaxed">
              <p className="mb-6 max-w-[250px]">For all new business inquiries, please contact us at parry.rominger@inshift.com or through the &quot;Get in touch&quot; form.</p>
              <p className="max-w-[250px]">
                120 Wall St, Floor 11<br />
                New York, NY 10005<br />
                1 917 237 8888<br />
                newbiz@inshift.com
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
