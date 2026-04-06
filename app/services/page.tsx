"use client";

import Header from "@/components/Header";
import Image from "next/image";
import { useState } from "react";

export default function Services() {
  const [activeTab, setActiveTab] = useState('Fintech');

  const brandLogos: Record<string, string[]> = {
    'Fintech': ["Paystack", "M-KOPA", "OPay", "PiggyVest", "Moniepoint", "Paga", "Grey", "Cleva", "BuuPass", "Black Street", "Sote Finance", "Mystock Africa"],
    'Ecom': ["Jumia", "Konga", "Takealot", "Kilimal", "Masoko", "Glovo", "Uber Eats", "Zoobashop", "Tonaton", "Jiji Ghana", "Yango Delivery", "Wasoko"],
    'SaaS': ["Yoco", "BMG Africa", "Gablecorp", "Wave", "Sendy", "Workpay", "SeamlessHR", "Better Brydge", "Built", "Okra", "Mono", "Termii"],
    'Health': ["mPharma", "54gene", "Zipline", "MyDawa", "Pharmarun", "LifeBank", "mTiba", "Calm", "Ilara Health", "Tibu Health", "Vezeeta", "AfyaRekod"]
  };
  const servicesData = [
    {
      title: "Performance Creative",
      icon: "M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.813-6.841m-11.996 0L13.34 8.648",
      items: ["UGC production", "Creative strategy", "Ad Video Scripts", "Hooks & copy"]
    },
    {
      title: "Influencer Marketing",
      icon: "M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z",
      items: ["Instagram", "TikTok Shop", "TikTok", "Nano", "Micro", "Mid Tier", "Macro", "White Label"]
    },
    {
      title: "Research & Panels",
      icon: "M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z",
      items: ["Panel Recruitment", "Focus groups", "Product testing", "Healthcare panels"]
    },
    {
      title: "Performance Branding",
      icon: "M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.83M11.42 15.17l-1.42-1.42m0 0a2 2 0 10-2.828-2.828l-5.657 5.657a2 2 0 102.828 2.828l1.42-1.42m0 0l-1.42-1.42M14.25 9.75v-.008m-.008.008h.008v-.008h-.008M17.25 6.75v-.008m-.008.008h.008v-.008h-.008M21 3.75v-.008m-.008.008h.008v-.008h-.008",
      items: ["Brand Strategy", "Digital Touchpoint Optimization", "Branding and identity", "Creative systems"]
    }
  ];

  const blogs = [
    { image: "/3f01e8ba-c549-4f80-8420-3153cb178308.png", tag: "Agencies", date: "Oct 16, 2025", readTime: "8 min read", title: "The 10 Best Content Creation Services" },
    { image: "/Copy-of-TC-Featured-Image-design-21.png", tag: "Tech", date: "Mar 16, 2026", readTime: "9 min read", title: "Happy Pay raises $5 million to scale ad-supported BNPL across South Africa" },
    { image: "/Jetron-Tickets.png", tag: "Creation", date: "Jun 16, 2025", readTime: "12 min read", title: "“I wasn’t aiming for Eventbrite”" }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-white text-black selection:bg-[#7c3aed] selection:text-white">
      <Header />

      {/* 1. Split Hero Section */}
      <section className="flex flex-col lg:flex-row w-full pt-32 md:pt-48 lg:pt-56 border-b border-gray-100 min-h-[85vh]">

        {/* Left Side (Content) */}
        <div className="w-full lg:w-[55%] bg-[#f8f9fa] pt-16 md:pt-24 lg:pt-32 pb-24 px-6 md:px-16 lg:px-24 flex flex-col justify-center">
          <h1 className="text-4xl md:text-5xl lg:text-[4rem] font-bold leading-tight tracking-tight text-gray-900 mb-12">
            Content is king, but we've got the whole royal court.
          </h1>
          <p className="text-gray-700 text-lg md:text-xl leading-relaxed mb-6 font-medium">
            Sharp copy and world-class design are only the start. We use SEO strategy, natural language processing and more when we create your content. AI is used to intelligently speed up the process, not replace what's needed to make it best-in-class.
          </p>
          <p className="text-gray-700 text-lg md:text-xl leading-relaxed font-medium">
            The result? Your pieces are primed to reach the largest audience possible. After all, our crowning achievement isn't just content — it's content that gets seen.
          </p>
        </div>

        {/* Right Side (Violet Brand Block) */}
        <div className="w-full lg:w-[45%] bg-[#7c3aed] relative flex items-center justify-center p-16 min-h-[400px] lg:min-h-full overflow-hidden">
          {/* Abstract geometric crown equivalent using pure CSS for exact matching vector aesthetics */}
          <div className="relative w-64 h-64 md:w-80 md:h-80 z-10 flex flex-col justify-end items-center mb-16">
            {/* The Crown Base */}
            <div className="w-[80%] h-8 bg-[#5b21b6] border-b-8 border-black"></div>
            {/* Crown Spikes */}
            <div className="absolute bottom-6 flex justify-between w-full h-[60%] items-end">
              <div className="w-1/4 h-full bg-white origin-bottom-left rotate-12" style={{ clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)' }}>
                <div className="w-4 h-4 rounded-full bg-[#312e81] absolute -top-2 left-1/2 -translate-x-1/2"></div>
              </div>
              <div className="w-1/3 h-[130%] bg-[#f3f4f6] z-10" style={{ clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)' }}>
                <div className="w-5 h-5 rounded-full bg-[#1e1b4b] absolute -top-2 left-1/2 -translate-x-1/2"></div>
              </div>
              <div className="w-1/4 h-full bg-white origin-bottom-right -rotate-12" style={{ clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)' }}>
                <div className="w-4 h-4 rounded-full bg-[#312e81] absolute -top-2 left-1/2 -translate-x-1/2"></div>
              </div>
            </div>
            {/* Center diamond geometry */}
            <div className="absolute top-[40%] text-center transform -translate-y-1/2 z-20">
              <div className="w-6 h-6 rotate-45 bg-[#e11d48] border-2 border-black inline-block"></div>
            </div>
          </div>

        </div>
      </section>

      {/* 2. Services Grid */}
      <section className="px-6 md:px-12 lg:px-24 py-24 md:py-32 bg-[#f8f9fa] border-b border-gray-100">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <h2 className="text-3xl md:text-5xl lg:text-5xl font-extrabold tracking-tight max-w-2xl leading-tight text-gray-900 text-left">
            Specialized services to scale your brand.
          </h2>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 text-left">
          {servicesData.map((service, idx) => (
            <div key={idx} className="flex flex-col bg-white p-8 border border-gray-100 hover:border-[#7c3aed]/30 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group rounded-xl">
              <div className="w-16 h-16 bg-[#f3f4f6] flex items-center justify-center mb-8 rounded-xl group-hover:bg-[#7c3aed]/10 transition-colors">
                <svg className="w-8 h-8 text-[#7c3aed]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d={service.icon} />
                </svg>
              </div>
              <h3 className="text-2xl font-bold tracking-tight text-gray-900 mb-6 group-hover:text-[#7c3aed] transition-colors">{service.title}</h3>
              <ul className="flex flex-col space-y-4 flex-grow">
                {service.items.map((item, i) => (
                  <li key={i} className="flex items-start text-gray-600 font-medium">
                    <svg className="w-5 h-5 text-[#7c3aed] mr-3 shrink-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>
                    <span className="group-hover:translate-x-2 transition-transform duration-300 ease-out">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Brands Matrix */}
      <section className="px-6 md:px-12 lg:px-24 pb-32 pt-16 bg-white text-center">
        <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-12">
          We've helped great brands reach new heights.
        </h2>

        {/* Toggle Pills */}
        <div className="flex items-center justify-center space-x-2 md:space-x-4 mb-20 border border-gray-300 rounded-full w-fit mx-auto overflow-hidden">
          {Object.keys(brandLogos).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-2.5 font-bold text-sm md:text-base focus:outline-none transition-colors
                ${activeTab === tab ? "border-2 border-black rounded-full text-black bg-gray-50 shadow-sm" : "text-gray-500 hover:text-black hover:bg-gray-50 border-2 border-transparent"}
              `}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Logo Grid Placeholder */}
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-y-16 gap-x-8 items-center justify-items-center opacity-60 transition-opacity duration-300">
          {brandLogos[activeTab].map((logo) => (
            <div key={logo} className="text-xl md:text-2xl font-black tracking-tighter filter grayscale animate-fade-in-up">
              {logo}
            </div>
          ))}
        </div>
      </section>

      {/* 4. Fresh Out of the Oven Blog Cards */}
      <section className="px-6 md:px-12 lg:px-24 py-24 bg-white text-center border-t border-gray-100">
        <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-16">
          Fresh out of the oven.
        </h2>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
          {blogs.map((blog, idx) => (
            <div key={idx} className="relative w-full aspect-square md:aspect-[4/5] bg-gray-900 overflow-hidden cursor-pointer group">
              <Image
                src={blog.image}
                alt={blog.title}
                fill
                className="object-cover opacity-60 group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              {/* Steep CSS dark gradient from bottom */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent"></div>

              {/* Content overlay */}
              <div className="absolute bottom-0 left-0 p-8 w-full flex flex-col">
                <div className="flex items-center text-xs md:text-sm font-bold text-gray-300 mb-2 whitespace-nowrap">
                  <span className="text-[#7c3aed] tracking-wider">{blog.tag}</span>
                  <span className="mx-2 px-1">&bull;</span>
                  <span>{blog.date}</span>
                  <span className="mx-2 px-1">&bull;</span>
                  <span>{blog.readTime}</span>
                </div>
                <h3 className="text-white text-2xl lg:text-3xl font-extrabold leading-tight tracking-tight">
                  {blog.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. Minimalist CTA Black Footer */}
      <a href="https://wa.link/b4z4gt" target="_blank" rel="noopener noreferrer" className="w-full bg-black py-40 px-6 flex flex-col items-center justify-center text-center group cursor-pointer block no-underline">
        <h2 className="text-white text-5xl md:text-6xl lg:text-[5rem] font-bold tracking-tight mb-8 max-w-4xl leading-tight group-hover:text-[#7c3aed] transition-colors duration-300">
          Let's create something amazing together
        </h2>
        <div className="flex flex-col md:flex-row items-center gap-6 mt-8">
          <svg className="w-12 h-12 text-white group-hover:text-[#7c3aed] group-hover:translate-x-4 transition-all duration-300 hidden md:block" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
          <div className="bg-white p-3 rounded-xl shadow-2xl hover:scale-105 transition-transform duration-300 flex flex-col items-center">
            <Image src="/wa-qr.png" alt="Scan to connect on WhatsApp" width={300} height={300} className="rounded" />
            <span className="text-black font-bold text-xs mt-2 uppercase tracking-wide">Scan to Chat</span>
          </div>
          <svg className="w-12 h-12 text-white group-hover:text-[#7c3aed] group-hover:translate-x-4 transition-all duration-300 md:hidden mt-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </div>
      </a>

    </div>
  );
}
