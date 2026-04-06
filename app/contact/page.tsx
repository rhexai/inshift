"use client";

import Header from "@/components/Header";
import { useState } from "react";
import Link from "next/link";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    budget: "N/A",
    referral: "",
    website: "",
    services: [],
    message: ""
  });

  const services = [
    "Content Marketing",
    "Digital PR",
    "Product SEO",
    "GEO / AEO",
    "Social Media"
  ];

  const handleCheckboxChange = (service) => {
    setFormData(prev => ({
      ...prev,
      services: prev.services.includes(service)
        ? prev.services.filter(s => s !== service)
        : [...prev.services, service]
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Thank you for reaching out! We'll be in touch soon.");
  };

  return (
    <div className="flex flex-col min-h-screen bg-white text-black selection:bg-[#7c3aed] selection:text-white pb-12">
      <Header />
      
      {/* 1. Hero Section */}
      <section className="pt-56 md:pt-64 lg:pt-72 px-6 pb-24 md:pb-32 text-center max-w-5xl mx-auto">
        <h1 className="text-5xl md:text-7xl lg:text-[6.5rem] font-bold tracking-tight text-gray-500 leading-[0.95]">
          Let&apos;s create something amazing together. But first, let&apos;s get introduced.
        </h1>
      </section>

      {/* 2. "Are we right for each other?" Section */}
      <section className="px-6 md:px-12 lg:px-24 py-24 border-t border-gray-100 flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-24 w-full max-w-[1400px] mx-auto overflow-hidden">
        
        {/* Left Column (Text Content) */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-8">
            Are we right for each other?
          </h2>
          {/* Violet Accent Line */}
          <div className="w-1/2 h-1 bg-[#7c3aed] mb-12"></div>
          
          <div className="text-lg md:text-xl text-gray-700 font-medium leading-relaxed space-y-6 max-w-md">
            <p>
              We&apos;re in the business of generating strong ROI for our customers. The best company fits have 50+ employees or $5 million in revenue or funding.
            </p>
            <p className="font-bold">
              Interested? Let&apos;s get to work.
            </p>
          </div>
        </div>

        {/* Right Column (Violet Handshake Block) */}
        <div className="w-full lg:w-[45%] bg-[#7c3aed] aspect-square min-h-[300px] flex items-center justify-center p-12 lg:p-24 shadow-2xl relative overflow-hidden group">
          {/* Abstract Handshake Icon Replacement using geometric SVG paths */}
          <div className="w-48 h-48 lg:w-64 lg:h-64 relative group-hover:scale-110 transition-transform duration-700 ease-out">
            <svg viewBox="0 0 24 24" fill="none" className="w-full h-full text-white drop-shadow-lg" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              {/* Handshake abstraction - purely geometric */}
              <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2 2" className="animate-spin-slow" />
              <path d="M7 13l3 3 7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="animate-dash" />
            </svg>
            <style jsx>{`
              @keyframes spin-slow {
                from { transform: rotate(0deg); }
                to { transform: rotate(360deg); }
              }
              .animate-spin-slow {
                animation: spin-slow 20s linear infinite;
                transform-origin: center;
              }
              .animate-dash {
                stroke-dasharray: 20;
                stroke-dashoffset: 20;
                animation: dash 1s ease-out forwards 0.5s;
              }
              @keyframes dash {
                to { stroke-dashoffset: 0; }
              }
            `}</style>
          </div>
        </div>
      </section>

      {/* 3. Form Section */}
      <section className="px-6 md:px-12 lg:px-24 py-24 bg-white w-full max-w-[1400px] mx-auto border-t border-gray-100">
        <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-16">
          Get in touch:
        </h2>

        <form onSubmit={handleSubmit} className="w-full max-w-4xl flex flex-col space-y-12">
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12">
            
            {/* Name */}
            <div className="flex flex-col space-y-2">
              <label className="text-sm font-black tracking-tight flex items-center">
                Name <span className="text-red-500 ml-1 mt-1 text-xs">*</span>
              </label>
              <input 
                type="text" 
                required
                className="w-full border-b-[2.5px] border-gray-200 py-3 focus:border-[#7c3aed] transition-colors outline-none font-medium text-lg"
                onChange={(e) => setFormData({...formData, name: e.target.value})}
              />
            </div>

            {/* Email */}
            <div className="flex flex-col space-y-2">
              <label className="text-sm font-black tracking-tight flex items-center">
                Email <span className="text-red-500 ml-1 mt-1 text-xs">*</span>
              </label>
              <input 
                type="email" 
                required
                className="w-full border-b-[2.5px] border-gray-200 py-3 focus:border-[#7c3aed] transition-colors outline-none font-medium text-lg"
                onChange={(e) => setFormData({...formData, email: e.target.value})}
              />
            </div>

            {/* Budget Dropdown */}
            <div className="flex flex-col space-y-2">
              <label className="text-sm font-black tracking-tight flex items-center">
                What&apos;s Your Monthly Budget? <span className="text-red-500 ml-1 mt-1 text-xs">*</span>
              </label>
              <select 
                className="w-full border-b-[2.5px] border-gray-200 py-4 focus:border-[#7c3aed] transition-colors outline-none font-medium text-lg bg-transparent"
                onChange={(e) => setFormData({...formData, budget: e.target.value})}
              >
                <option value="N/A">N/A</option>
                <option value="<$5k">&lt;$5k</option>
                <option value="$5k-$15k">$5k - $15k</option>
                <option value="$15k-$30k">$15k - $30k</option>
                <option value="$30k+">$30k+</option>
              </select>
            </div>

            {/* How did you hear about us? */}
            <div className="flex flex-col space-y-2">
              <label className="text-sm font-black tracking-tight flex items-center">
                How Did You Hear About Us? <span className="text-red-500 ml-1 mt-1 text-xs">*</span>
              </label>
              <input 
                type="text" 
                required
                className="w-full border-b-[2.5px] border-gray-200 py-3 focus:border-[#7c3aed] transition-colors outline-none font-medium text-lg"
                onChange={(e) => setFormData({...formData, referral: e.target.value})}
              />
            </div>

            {/* Website */}
            <div className="flex flex-col space-y-2">
              <label className="text-sm font-black tracking-tight flex items-center">
                Website <span className="text-red-500 ml-1 mt-1 text-xs">*</span>
              </label>
              <input 
                type="url" 
                placeholder="https://"
                required
                className="w-full border-b-[2.5px] border-gray-200 py-3 focus:border-[#7c3aed] transition-colors outline-none font-medium text-lg"
                onChange={(e) => setFormData({...formData, website: e.target.value})}
              />
            </div>

            {/* Service Interests */}
            <div className="flex flex-col space-y-4">
              <label className="text-sm font-black tracking-tight">
                Which service(s) are you interested in?
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-4">
                 {services.map(service => (
                   <label key={service} className="flex items-center space-x-3 cursor-pointer group">
                      <div 
                        className={`w-6 h-6 border-[2.5px] rounded-sm flex items-center justify-center transition-all 
                          ${formData.services.includes(service) ? "bg-[#7c3aed] border-[#7c3aed]" : "border-gray-200 group-hover:border-gray-300"}
                        `}
                        onClick={() => handleCheckboxChange(service)}
                      >
                         {formData.services.includes(service) && (
                           <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" strokeWidth={3} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                         )}
                      </div>
                      <span className="text-base font-bold text-gray-700">{service}</span>
                   </label>
                 ))}
              </div>
            </div>
          </div>

          {/* Message Area */}
          <div className="flex flex-col space-y-2">
            <label className="text-sm font-black tracking-tight flex items-center">
              Message <span className="text-red-500 ml-1 mt-1 text-xs">*</span>
            </label>
            <textarea 
              required
              rows={4}
              className="w-full border-[2.5px] border-gray-200 p-4 focus:border-[#7c3aed] transition-colors outline-none font-medium text-lg resize-none"
              onChange={(e) => setFormData({...formData, message: e.target.value})}
            ></textarea>
          </div>

          <button 
            type="submit"
            className="self-start px-16 py-6 bg-[#7c3aed] text-white text-lg font-black tracking-widest hover:bg-[#6d28d9] transition-all hover:scale-[1.02] shadow-xl hover:shadow-violet-200 active:scale-95"
          >
            LET&apos;S TALK
          </button>

        </form>
      </section>

      {/* Matching Careers Footer Replication */}
      <footer className="w-full border-t border-gray-100 py-8 px-6 md:px-12 flex flex-col lg:flex-row items-center justify-between text-xs font-medium text-gray-500 gap-6 mt-32">
         <div className="shrink-0 font-bold tracking-tight">
           &copy;{new Date().getFullYear()} Inshift Media. All rights reserved.
         </div>

         <div className="flex flex-wrap justify-center lg:justify-end gap-x-8 gap-y-4 lg:gap-10">
            <Link href="#" className="hover:text-black transition-colors font-bold">Privacy Policy</Link>
            <Link href="#" className="hover:text-black transition-colors font-bold">Terms and Conditions</Link>
            <Link href="/contact" className="hover:text-black transition-colors font-bold text-black border-b border-black">Contact</Link>
            <Link href="#" className="hover:text-black transition-colors font-bold">Sitemap</Link>
            <Link href="#" className="hover:text-black transition-colors font-bold">Client Privacy</Link>
         </div>
      </footer>
    </div>
  );
}
