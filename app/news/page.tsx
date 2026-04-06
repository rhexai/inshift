import Header from "@/components/Header";
import Image from "next/image";

export default function News() {
  const articles = [
    {
      id: 1,
      image: "/feature_1.png",
      date: "OCT 17, 2024",
      title: "Inshift Partners with Global Lead to Launch Full Scale Operations",
    },
    {
      id: 2,
      image: "/feature_2.png",
      date: "OCT 16, 2024",
      title: "Inshift Releases Version 2.0 of Landmark Brand Reputation Solution",
    },
    {
      id: 3,
      image: "/feature_3.png",
      date: "OCT 10, 2024",
      title: "Inshift Announces Two New Original Series in Partnership with Leading Creators",
    },
    {
      id: 4,
      image: "/feature_1.png",
      date: "OCT 2, 2024",
      title: "Vice Studios Group and Inshift Announce Development of Unscripted Catalog",
    },
    {
      id: 5,
      image: "/feature_2.png",
      date: "SEP 27, 2024",
      title: "Inshift Named One of Canada's Top Growing Companies",
    },
    {
      id: 6,
      image: "/feature_3.png",
      date: "SEP 26, 2024",
      title: "Inshift Debuts Free Digital Creator Guide Series on How to Succeed",
    }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-white text-black selection:bg-[#7c3aed] selection:text-white pb-32">
      <Header />
      
      {/* 
        Dark Hero Section 
        Must accommodate header height via pt-32 or similar. 
        Using bg-black for the top block.
      */}
      <section className="bg-black pt-56 md:pt-72 lg:pt-80 pb-16 px-6 md:px-12 w-full lg:px-24">
        
        {/* Title & Subtitle */}
        <div className="max-w-7xl mx-auto">
          <h1 className="text-white text-5xl md:text-6xl lg:text-[5rem] font-bold tracking-tight mb-4">
            Inshift News & Press
          </h1>
          <p className="text-gray-300 text-lg md:text-xl font-medium mb-16">
            Catch up on the latest news and industry updates.
          </p>

          {/* Featured White Banner */}
          <div className="w-full bg-white p-8 md:p-12 lg:p-16 flex flex-col md:flex-row items-start md:items-center justify-between gap-8 mb-24">
            <div className="max-w-2xl">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Influencer Marketing at Scale: A New Model for the Social Era
              </h2>
              <p className="text-gray-600 text-md md:text-lg">
                Learn what it takes to scale influencer marketing like a performance channel and drive measurable impact.
              </p>
            </div>
            <button className="bg-[#7c3aed] text-white px-8 py-4 font-bold text-sm hover:bg-[#6d28d9] transition-colors whitespace-nowrap">
              Get The Report
            </button>
          </div>

          {/* Minimalist Search */}
          <div className="w-full relative border-b border-gray-500 pb-2 flex items-center">
            <input 
              type="text" 
              placeholder="Search" 
              className="w-full bg-transparent outline-none text-white text-lg md:text-xl placeholder-gray-400 focus:placeholder-gray-200 transition-colors"
            />
          </div>
        </div>
      </section>

      {/* Main Grid Section */}
      <section className="px-6 md:px-12 lg:px-24 py-20 w-full">
        <div className="max-w-7xl mx-auto">
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {articles.map((article) => (
              <div key={article.id} className="flex flex-col border-[3px] border-black h-full group hover:-translate-y-1 transition-transform duration-300 ease-out cursor-pointer">
                
                {/* Card Image Area */}
                <div className="relative w-full aspect-square md:aspect-[4/3] border-b-[3px] border-black bg-gray-100 overflow-hidden">
                   <Image 
                     src={article.image} 
                     alt={article.title} 
                     fill 
                     className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out" 
                   />
                </div>
                
                {/* Card Content Area */}
                <div className="flex flex-col p-6 md:p-8 flex-grow bg-white">
                  <span className="text-gray-500 uppercase tracking-widest text-[10px] md:text-xs font-bold mb-4">
                    {article.date}
                  </span>
                  
                  <h3 className="text-2xl font-bold leading-tight tracking-tight mb-12 flex-grow">
                    {article.title}
                  </h3>
                  
                  <div className="flex items-center text-black font-bold text-sm tracking-wide group-hover:text-[#7c3aed] transition-colors">
                    Read More 
                    <svg className="w-5 h-5 ml-2 text-[#7c3aed]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                  </div>
                </div>

              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex items-center justify-center space-x-3 md:space-x-4">
            <span className="flex items-center justify-center w-8 h-8 rounded-full border-2 border-[#7c3aed] text-[#7c3aed] font-bold text-sm">
              1
            </span>
            <span className="flex items-center justify-center w-8 h-8 text-black font-medium text-sm hover:text-[#7c3aed] cursor-pointer transition-colors">
              2
            </span>
            <span className="flex items-center justify-center w-8 h-8 text-black font-medium text-sm hover:text-[#7c3aed] cursor-pointer transition-colors">
              3
            </span>
            <span className="flex items-center justify-center w-8 h-8 text-black font-medium text-sm hover:text-[#7c3aed] cursor-pointer transition-colors">
              4
            </span>
            <span className="flex items-center justify-center w-8 h-8 text-black font-medium text-sm hover:text-[#7c3aed] cursor-pointer transition-colors">
              5
            </span>
            <button className="flex items-center justify-center ml-2 text-gray-400 hover:text-[#7c3aed] transition-colors focus:outline-none cursor-pointer">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
            </button>
          </div>

        </div>
      </section>

    </div>
  );
}
