import Header from "@/components/Header";
import Link from "next/link";

export default function Careers() {
  return (
    <div className="flex flex-col min-h-screen bg-white text-black selection:bg-[#7c3aed] selection:text-white">
      <Header />
      
      {/* Main Careers Layout */}
      <main className="flex-grow flex flex-col items-center justify-center pt-56 md:pt-72 px-6 pb-24 md:pb-32 text-center w-full max-w-4xl mx-auto flex-1">
         
         {/* Top Accent Line - Using Brand Violet */}
         <div className="w-16 h-1.5 md:w-20 md:h-2 bg-[#7c3aed] mb-16 rounded-full"></div>

         {/* Hero Header */}
         <h1 className="text-5xl md:text-7xl lg:text-[6rem] font-black tracking-tight mb-10 text-gray-900">
           Come work with us.
         </h1>

         {/* Sub Copy */}
         <div className="flex flex-col space-y-6 max-w-2xl mx-auto mb-20 text-base md:text-lg text-gray-500 font-medium leading-relaxed">
            <p>
              People who work here are smart, driven and genuine. They care a lot about each other and what they do. We've been told we're one of the best and most innovative places to work, and we take that to heart.
            </p>
            <p>
              Sound like the kind of place you'd like to be? We'd love to meet you.
            </p>
         </div>

         {/* Alternate Contact Prompt */}
         <div className="pt-12 md:pt-16 max-w-lg mx-auto flex flex-col items-center">
            <h2 className="text-2xl md:text-3xl font-medium tracking-tight mb-4 text-gray-800">
              Don't see something for you?
            </h2>
            <p className="text-sm md:text-base text-gray-400 font-medium">
              Things change quickly around here, so please check back with us soon.
            </p>
         </div>
      </main>
    </div>
  );
}
