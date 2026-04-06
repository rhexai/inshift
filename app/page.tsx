import Image from "next/image";
import Header from "@/components/Header";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white text-black selection:bg-blue-600 selection:text-white">
      {/* Navigation Header */}
      <Header />

      <main className="flex-grow pt-32">
        {/* Typography Hero Section */}
        <section className="flex flex-col items-center justify-center px-6 py-20 text-center md:py-32">
          <div className="w-12 h-1 bg-blue-700 mb-12"></div>
          <h1 className="text-5xl md:text-7xl lg:text-[6.5rem] font-bold tracking-tighter leading-[0.95] max-w-5xl">
            We build and sustain the most influential brands of the 21st century.
          </h1>
        </section>

        {/* Video / Reel Section */}
        <section className="relative w-full h-[60vh] md:h-[80vh] bg-black group cursor-pointer flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image
              src="/hero_reel.png"
              alt="Inshift Showreel"
              fill
              className="object-cover opacity-70 group-hover:opacity-90 transition-opacity duration-700"
              priority
            />
          </div>
          <div className="relative z-10 flex flex-col items-center justify-center h-full w-full bg-black/20 group-hover:bg-transparent transition-colors duration-500">
            <h2 className="text-4xl md:text-6xl font-bold text-white tracking-wide opacity-80 group-hover:opacity-100 transition-opacity">Play with Audio</h2>
          </div>
        </section>

        {/* Purpose Statement Section */}
        <section className="flex flex-col items-center justify-center px-6 py-24 md:py-32 text-center max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-medium tracking-tight leading-snug mb-12">
            Our goal is to create purposeful work that works for your audience and your business.
          </h2>
          <button className="bg-black text-white px-8 py-4 font-semibold hover:bg-blue-700 transition-colors duration-300">
            See what we do
          </button>
        </section>

        {/* Our DNA Section */}
        <section className="px-6 py-24 md:px-12 md:py-32 bg-gray-50 border-t border-gray-200">
          <div className="flex flex-col items-center mb-20 text-center">
            <span className="text-gray-500 uppercase tracking-widest text-xs font-semibold mb-4">Our DNA</span>
            <div className="w-12 h-1 bg-blue-700"></div>
          </div>

          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-y-16 gap-x-12">
            {[
              { title: "Creatively Led", text: "Ambition for the best creative leads all of us. We care about the quality and integrity of our work above all else." },
              { title: "Strategically Driven", text: "We believe the path to world-class work is through rigorous creative strategy that has clear and measurable objectives and is rooted in Brand Purpose." },
              { title: "Systems Thinkers", text: "From product innovation to performance marketing, we believe all our work needs to work in concert to connect every element at every phase of the customer journey." },
              { title: "Humanity Obsessed", text: "We strive to create work that adds value to people's lives, not noise. We believe our industry needs to be transformed to create things people actually want and welcome." }
            ].map((dna, idx) => (
              <div key={idx} className="flex flex-col md:flex-row gap-4 md:gap-8 border-b md:border-none border-gray-200 pb-8 md:pb-0">
                <h3 className="text-2xl md:text-3xl font-medium md:min-w-[200px] lg:min-w-[250px] md:text-right">{dna.title}</h3>
                <p className="text-gray-600 leading-relaxed text-lg flex-1">{dna.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Featured Work / News Grid */}
        <section className="flex flex-col w-full">
          {/* Feature 1 */}
          <div className="relative w-full h-[70vh] md:h-[80vh] group">
            <Image src="/feature_1.png" alt="Bosch 2025" fill className="object-cover object-top" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent group-hover:from-black/90 transition-all"></div>
            <div className="absolute inset-0 flex flex-col justify-end px-8 py-16 md:px-24 md:py-24">
              <span className="text-white text-xs font-bold tracking-[0.2em] mb-4 uppercase drop-shadow-md">Work</span>
              <h2 className="text-4xl md:text-6xl text-white font-bold leading-tight mb-4 max-w-2xl drop-shadow-lg">Bosch 2025 Big Game Debut</h2>
              <p className="text-white text-lg md:text-xl max-w-xl mb-8 drop-shadow-md">Making a table-slamming first impression on the Big Game.</p>
              <button className="bg-white text-black px-6 py-3 w-fit font-bold hover:bg-black hover:text-white transition-colors">Read More</button>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="relative w-full h-[70vh] md:h-[80vh] group">
            <Image src="/feature_2.png" alt="Creative Edge" fill className="object-cover object-center" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent group-hover:from-black/90 transition-all"></div>
            <div className="absolute inset-0 flex flex-col justify-end px-8 py-16 md:px-24 md:py-24">
              <span className="text-white text-xs font-bold tracking-[0.2em] mb-4 uppercase drop-shadow-md">News</span>
              <h2 className="text-4xl md:text-6xl text-white font-bold leading-tight mb-4 max-w-3xl drop-shadow-lg">Inshift Has a Plan to Regain Its Creative Edge</h2>
              <p className="text-white text-lg md:text-xl max-w-2xl mb-8 drop-shadow-md">The agency is bracing for a new era under new leadership—and it's not looking backward.</p>
              <button className="bg-white text-black px-6 py-3 w-fit font-bold hover:bg-black hover:text-white transition-colors">Read More</button>
            </div>
          </div>

          {/* Feature 3 */}
          <div className="relative w-full h-[70vh] md:h-[80vh] group">
            <Image src="/feature_3.png" alt="Neon Pulse Energy" fill className="object-cover object-center" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent group-hover:from-black/90 transition-all"></div>
            <div className="absolute inset-0 flex flex-col justify-end px-8 py-16 md:px-24 md:py-24">
              <span className="text-white text-xs font-bold tracking-[0.2em] mb-4 uppercase drop-shadow-md">Work</span>
              <h2 className="text-4xl md:text-6xl text-white font-bold leading-tight mb-4 max-w-3xl drop-shadow-lg">Neon Pulse: The Future of Energy</h2>
              <p className="text-white text-lg md:text-xl max-w-2xl mb-8 drop-shadow-md">Launching a revolutionary brand in the global market.</p>
              <button className="bg-white text-black px-6 py-3 w-fit font-bold hover:bg-black hover:text-white transition-colors">See the Campaign</button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white text-black px-6 py-12 md:px-12 flex flex-col md:flex-row justify-between items-center border-t border-gray-200 mt-auto">
        <div className="mb-6 md:mb-0">
          <Image src="/logo.png" alt="Inshift Media Logo" width={800} height={500} className="w-auto h-12 sm:h-16 md:h-28 object-contain mix-blend-multiply" quality={100} />
        </div>
        <div className="flex space-x-6 text-sm font-medium text-gray-500">
          <a href="#" className="hover:text-black transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-black transition-colors">Terms of Service</a>
          <a href="#" className="hover:text-black transition-colors">Contact</a>
        </div>
      </footer>
    </div>
  );
}
