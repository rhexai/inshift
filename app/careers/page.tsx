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

          {/* Apply Now Section */}
          <div className="pt-12 md:pt-16 max-w-lg mx-auto flex flex-col items-center">
             <h2 className="text-3xl md:text-4xl font-black tracking-tight mb-6 text-gray-900 uppercase">
               Ready to Apply?
             </h2>
             <p className="text-base md:text-lg text-gray-600 font-medium mb-10 leading-relaxed">
               Think you&apos;d be a great fit? Send your CV and a brief introduction to our team.
             </p>
             <a 
               href="mailto:inshift.media@scriptlabs.digital" 
               className="bg-[#7c3aed] text-white px-10 py-5 font-black text-sm md:text-base tracking-[0.15em] hover:bg-[#6d28d9] transition-all hover:scale-105 shadow-xl hover:shadow-violet-200"
             >
               INSHIFT.MEDIA@SCRIPTLABS.DIGITAL
             </a>
          </div>
      </main>
    </div>
  );
}
