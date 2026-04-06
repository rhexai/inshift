"use client";

import Header from "@/components/Header";
import Image from "next/image";
import { useEffect } from "react";

export default function Work() {
  const featuredProjects = [
    {
      id: 1,
      client: "Flowboard Team Future of Work Conference 25",
      title: "Reminding the world of the power of talents to the African economy",
      image: "/amazon-books.jpeg",
      link: "#"
    },
    {
      id: 2,
      client: "Bizo Jon Skit",
      title: "A launch campaign for the Bizo Jon Skit project",
      image: "/creative-edge.jpeg",
      link: "#"
    },
    {
      id: 3,
      client: "Building in Africa Podcast",
      title: "A leading African business podcast primarily targeting ambitious youth audience in Africa.",
      image: "/lidl-project.jpeg",
      link: "#"
    }
  ];

  const gridProjects = [
    {
      id: 4,
      client: "CREATOR AGENCY",
      title: "Short-form videos, podcasts, documentaries, etc.",
      image: "/ancestry-project.jpeg",
      link: "#"
    },
    {
      id: 5,
      client: "PRODUCTION",
      title: "Live Streaming and Events",
      image: "/bulk-powders.jpeg",
      link: "#"
    },
    {
      id: 6,
      client: "INFLUENCER CO-CREATION & UGC",
      title: "Reach more audiences in a new and exciting way.",
      image: "/rustlers.jpeg",
      link: "#"
    }
  ];

  // Scroll to top handler
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="flex flex-col min-h-screen bg-white text-black selection:bg-[#7c3aed] selection:text-white pb-32">
      <Header />

      {/* Massive Hero Typography Section */}
      <section className="pt-56 md:pt-64 lg:pt-72 px-6 pb-24 md:pb-32 flex justify-center text-center">
        <h1 className="text-4xl md:text-6xl lg:text-[5.5rem] font-black tracking-tighter leading-[0.9] max-w-5xl text-gray-900">
          Unrivaled content <br />marketing expertise.
        </h1>
      </section>

      <main className="w-full flex justify-center">
        <div className="max-w-[1600px] w-full px-6 md:px-12 lg:px-24">

          {/* Zig-Zag Featured Projects Array */}
          <div className="flex flex-col space-y-32 md:space-y-48 mb-32">
            {featuredProjects.map((project, index) => {
              // Determine if image should be on the left or right
              const isImageLeft = index % 2 === 0;

              return (
                <div
                  key={project.id}
                  className={`flex flex-col ${isImageLeft ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-12 lg:gap-24`}
                >
                  {/* Image Container */}
                  <div className="w-full md:w-3/5 lg:w-[65%] group cursor-pointer relative aspect-video md:aspect-[4/3] overflow-hidden bg-gray-100">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-[1200ms] ease-[cubic-bezier(0.25,1,0.5,1)]"
                      sizes="(max-width: 768px) 100vw, 65vw"
                    />
                  </div>

                  {/* Typography Container */}
                  <div className="w-full md:w-2/5 lg:w-[35%] flex flex-col justify-center">
                    <span className="text-gray-400 text-xs md:text-sm font-bold tracking-widest uppercase mb-4">
                      {project.client}
                    </span>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight text-gray-900 leading-tight mb-8 max-w-sm">
                      {project.title}
                    </h2>
                    <div className="flex">
                      <a
                        href={project.link}
                        className="group inline-flex items-center text-sm font-bold text-gray-900 focus:outline-none"
                      >
                        {/* Using the brand's violet #7c3aed for the underline accent line logic */}
                        <span className="relative pb-1 border-b-2 border-[#7c3aed]">
                          Learn more
                        </span>
                        <svg className="w-4 h-4 ml-1 opacity-60 group-hover:opacity-100 group-hover:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Secondary 3-Column Grid Array */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-16 mb-24">
            {gridProjects.map((project) => (
              <div key={project.id} className="flex flex-col group cursor-pointer">
                <div className="w-full aspect-[4/5] relative bg-gray-100 mb-6 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-[1200ms] ease-[cubic-bezier(0.25,1,0.5,1)]"
                  />
                </div>
                <span className="text-gray-400 text-xs font-bold tracking-widest uppercase mb-2">
                  {project.client}
                </span>
                <h3 className="text-xl md:text-2xl font-medium tracking-tight text-gray-900 group-hover:text-[#7c3aed] transition-colors">
                  {project.title}
                </h3>
              </div>
            ))}
          </div>

          {/* Footer Interactive Actions */}
          <div className="flex flex-col items-center justify-center pt-16 relative">
            <a href="https://wa.link/b4z4gt" target="_blank" rel="noopener noreferrer" className="inline-block no-underline">
              <button className="bg-black text-white px-8 py-4 font-bold text-sm tracking-wide hover:bg-gray-800 transition-colors">
                Get in touch
              </button>
            </a>

            {/* Sticky 'TOP' Navigator matching reference */}
            <div className="absolute right-0 bottom-0 lg:fixed lg:bottom-12 lg:right-12 z-50 flex flex-col items-center cursor-pointer opacity-70 hover:opacity-100 hover:-translate-y-1 transition-all" onClick={scrollToTop}>
              <svg className="w-8 h-8 md:w-10 md:h-10 text-gray-500 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M5 10l7-7m0 0l7 7m-7-7v18" />
              </svg>
              <span className="text-xs font-black tracking-widest text-gray-500">TOP</span>
            </div>
          </div>

        </div>
      </main>
    </div>
  );
}
