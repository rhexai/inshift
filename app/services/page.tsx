import Header from "@/components/Header";
import Image from "next/image";

export default function Services() {
  const services = [
    { title: "Animation", icon: "M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z M21 12a9 9 0 11-18 0 9 9 0 0118 0z" },
    { title: "Interactives", icon: "M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" },
    { title: "Video", icon: "M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" },
    { title: "Photography", icon: "M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" },
    { title: "Research", icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" },
    { title: "Strategy", icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" }
  ];

  const blogs = [
    { image: "/feature_1.png", tag: "Agencies", date: "Oct 16, 2025", readTime: "8 min read", title: "The 10 Best Content Creation Services" },
    { image: "/feature_2.png", tag: "Agencies", date: "Mar 16, 2026", readTime: "9 min read", title: "The 13 Best Content Marketing Agencies To Boost Your Brand" },
    { image: "/feature_3.png", tag: "Creation", date: "Jun 16, 2025", readTime: "12 min read", title: "23 Interactive Content Examples Worth the Effort" }
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
      <section className="px-6 md:px-12 lg:px-24 py-24 md:py-32 bg-white text-center">
        <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-20">
          More content creation services we offer:
        </h2>
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-12">
          {services.map((service, idx) => (
            <div key={idx} className="flex flex-col items-center">
              <div className="w-full aspect-video bg-[#f3f4f6] flex items-center justify-center mb-6 hover:bg-[#eaff00]/20 transition-colors cursor-pointer group">
                {/* SVG Icon using brand Violet and a red accent like reference but tailored to user */}
                <svg className="w-20 h-20 text-[#7c3aed] group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                   <path strokeLinecap="round" strokeLinejoin="round" d={service.icon} />
                </svg>
              </div>
              <h3 className="text-xl md:text-2xl font-medium text-gray-800">{service.title}</h3>
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
          {['Fintech', 'Ecom', 'SaaS', 'Health'].map((tab, idx) => (
            <button 
              key={tab} 
              className={`px-6 py-2.5 font-bold text-sm md:text-base focus:outline-none transition-colors
                ${idx === 0 ? "border-2 border-black rounded-full" : "text-gray-500 hover:text-black hover:bg-gray-50"}
              `}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Logo Grid Placeholder */}
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-y-16 gap-x-8 items-center justify-items-center opacity-60">
           {/* Purely typographical placeholder logos */}
           {["TransUnion", "chime", "QuickenLoans", "mint", "Zillow", "Veterans United", "hippo", "Lemonade", "kraken", "the zebra", "bluevine", "PayPal"].map((logo) => (
              <div key={logo} className="text-xl md:text-2xl font-black tracking-tighter filter grayscale">
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
      <section className="w-full bg-black py-40 px-6 flex flex-col items-center justify-center text-center group cursor-pointer">
         <h2 className="text-white text-5xl md:text-6xl lg:text-[5rem] font-bold tracking-tight mb-12 max-w-4xl leading-tight">
           Let's create something amazing together
         </h2>
         <svg className="w-12 h-12 text-white group-hover:text-[#7c3aed] group-hover:translate-x-4 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
         </svg>
      </section>

    </div>
  );
}
