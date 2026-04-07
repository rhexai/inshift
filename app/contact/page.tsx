"use client";

import Header from "@/components/Header";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

interface ContactFormData {
  name: string;
  email: string;
  budget: string;
  referral: string;
  website: string;
  services: string[];
  message: string;
}

export default function Contact() {
  const [formData, setFormData] = useState<ContactFormData>({
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

  const handleCheckboxChange = (service: string) => {
    setFormData(prev => ({
      ...prev,
      services: prev.services.includes(service)
        ? prev.services.filter(s => s !== service)
        : [...prev.services, service]
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Thank you for reaching out! We'll be in touch soon.");
  };

  return (
    <div className="flex flex-col min-h-screen bg-white text-black selection:bg-[#7c3aed] selection:text-white pb-12">
      <Header />
      
      {/* 1. Hero Section */}
      <section className="pt-32 md:pt-64 lg:pt-72 px-5 pb-16 md:pb-32 text-center max-w-5xl mx-auto">
        <h1 className="text-4xl md:text-7xl lg:text-[6.5rem] font-bold tracking-tight text-gray-500 leading-[1.05] md:leading-[0.95]">
          Let&apos;s create something amazing together. But first, let&apos;s get introduced.
        </h1>
      </section>

      {/* 2. "Are we right for each other?" Section */}
      <section className="px-5 md:px-12 lg:px-24 py-16 md:py-24 border-t border-gray-100 flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-24 w-full max-w-[1400px] mx-auto overflow-hidden">
        
        {/* Left Column (Text Content) */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center">
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-8">
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

        {/* Right Column (Modern Technical Fit Block) */}
        <div className="w-full lg:w-[45%] bg-[#05050a] aspect-square min-h-[300px] flex items-center justify-center p-8 lg:p-16 shadow-2xl relative overflow-hidden group">
          {/* Animated Mesh Gradient Background */}
          <div className="absolute inset-0 opacity-40 bg-[radial-gradient(circle_at_50%_50%,_#7c3aed_0%,_transparent_60%)] group-hover:scale-110 transition-transform duration-1000 ease-in-out cursor-crosshair"></div>

          {/* Morphing Liquid Orbs */}
          <div className="relative w-64 h-64 md:w-80 md:h-80 filter blur-2xl opacity-60 mix-blend-screen animate-spin-slow pointer-events-none">
            <div className="absolute top-0 left-0 w-32 h-32 md:w-40 md:h-40 bg-[#f43f5e] rounded-full animate-blob"></div>
            <div className="absolute top-0 right-0 w-32 h-32 md:w-40 md:h-40 bg-[#3b82f6] rounded-full animate-blob animation-delay-2000"></div>
            <div className="absolute bottom-0 left-16 w-32 h-32 md:w-40 md:h-40 bg-[#7c3aed] rounded-full animate-blob animation-delay-4000"></div>
          </div>

          {/* Sharp Brutalist Glass Data Panel */}
          <div className="absolute m-auto w-[85%] md:w-[70%] max-w-sm aspect-[4/3] bg-white/5 backdrop-blur-2xl border border-white/10 flex flex-col justify-between -rotate-2 group-hover:rotate-0 transition-transform duration-700 ease-out p-6 shadow-[0_20px_50px_rgba(0,0,0,0.5)] cursor-default">
             
             {/* Header */}
             <div className="w-full flex justify-between items-center z-10">
                <div className="flex gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/80 shadow-[0_0_8px_#ef4444]"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-amber-500/50"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500/50"></div>
                </div>
                <div className="text-white/40 text-[10px] sm:text-xs font-mono tracking-widest uppercase">Fit_Analysis.exe</div>
             </div>

             {/* Center Abstract Geometry (Targeting Reticle) */}
             <div className="flex-grow flex items-center justify-center relative mt-4">
                <div className="relative w-20 h-20 sm:w-24 sm:h-24 flex items-center justify-center">
                   {/* Outer dashed ring */}
                   <div className="absolute inset-0 border border-white/20 rounded-full border-dashed animate-[spin_10s_linear_infinite]"></div>
                   {/* Middle ring pulsating */}
                   <div className="absolute inset-2 border-[1.5px] border-[#7c3aed]/50 rounded-full group-hover:scale-110 transition-transform duration-500"></div>
                   {/* Core energy source */}
                   <div className="w-3 h-3 bg-white rounded-full shadow-[0_0_20px_2px_rgba(255,255,255,0.8)] group-hover:shadow-[0_0_30px_5px_#7c3aed] transition-shadow duration-500"></div>
                </div>
                {/* Connecting nodes */}
                <div className="absolute top-1/2 left-4 right-4 h-[1px] bg-white/10 hidden sm:block"></div>
                <div className="absolute left-1/2 top-4 bottom-4 w-[1px] bg-white/10 hidden sm:block"></div>
             </div>

             {/* Bottom Scanner Line & Stats */}
             <div className="w-full mt-6 flex flex-col gap-3 z-10">
                <div className="flex justify-between text-[10px] font-mono text-white/50 uppercase">
                  <span>Processing variables</span>
                  <span className="text-[#3b82f6] animate-pulse">99.9% match</span>
                </div>
                {/* Laser scan line container */}
                <div className="w-full h-[2px] bg-white/10 relative overflow-hidden rounded-full">
                  <div className="absolute top-0 left-0 h-full w-1/4 bg-gradient-to-r from-transparent via-[#7c3aed] to-transparent shadow-[0_0_10px_#7c3aed] animate-[scan_2s_ease-in-out_infinite_alternate]"></div>
                </div>
             </div>
          </div>

          <style jsx>{`
            .animate-spin-slow { animation: spin 20s linear infinite; }
            @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
            @keyframes blob {
              0% { transform: translate(0px, 0px) scale(1); }
              33% { transform: translate(30px, -50px) scale(1.15); }
              66% { transform: translate(-20px, 20px) scale(0.85); }
              100% { transform: translate(0px, 0px) scale(1); }
            }
            .animate-blob { animation: blob 8s infinite cubic-bezier(0.4, 0, 0.2, 1); }
            .animation-delay-2000 { animation-delay: 2s; }
            .animation-delay-4000 { animation-delay: 4s; }
            @keyframes scan { 0% { transform: translateX(-100%); } 100% { transform: translateX(400%); } }
          `}</style>
        </div>
      </section>

      {/* 3. Form Section */}
      <section className="px-5 md:px-12 lg:px-24 py-16 md:py-24 bg-white w-full max-w-[1400px] mx-auto border-t border-gray-100">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 md:mb-16 gap-6 md:gap-8">
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight">
            Get in touch:
          </h2>
          <a href="https://wa.link/b4z4gt" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 bg-gray-50 border border-gray-100 p-3 rounded-xl hover:shadow-lg transition-all group w-fit no-underline">
            <Image src="/wa-qr.png" alt="WhatsApp QR Code" width={180} height={180} className="rounded" />
            <div className="flex flex-col pr-4">
              <span className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-1">Fastest Response</span>
              <span className="text-lg font-black text-black group-hover:text-[#7c3aed] transition-colors flex items-center">
                Scan or Click to Chat
                <svg className="w-5 h-5 ml-1 opacity-0 group-hover:opacity-100 transition-opacity translate-x-[-10px] group-hover:translate-x-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
              </span>
            </div>
          </a>
        </div>

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
    </div>
  );
}
