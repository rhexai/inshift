import Header from "@/components/Header";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { articles } from "../data";

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = articles.find((a) => a.slug === slug);

  if (!article) {
    notFound();
  }

  // To properly render newlines from the raw data text string
  const formattedContent = article.content.split('\n').filter(p => p.trim() !== '');

  return (
    <div className="flex flex-col min-h-screen bg-white text-black selection:bg-[#7c3aed] selection:text-white pb-32">
      <Header />
      
      <main className="pt-24 md:pt-32">
        {/* Article Hero */}
        <section className="px-6 md:px-12 lg:px-24 mb-12 md:mb-20 max-w-5xl mx-auto">
          <Link href="/news" className="inline-flex items-center text-sm font-bold text-gray-500 hover:text-black transition-colors mb-8 md:mb-12 no-underline">
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" /></svg>
            BACK TO NEWS
          </Link>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-tight mb-8">
            {article.title}
          </h1>
          
          <div className="flex items-center space-x-6 text-sm font-bold tracking-widest text-[#7c3aed] uppercase border-t border-b border-gray-100 py-4 mb-12">
            <span>{article.date}</span>
            <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
            <span className="text-gray-400">PRESS RELEASE</span>
          </div>
          
          {/* Main Image */}
          <div className="relative w-full aspect-video md:aspect-[21/9] border-[3px] border-black bg-gray-100 overflow-hidden group">
            <Image 
              src={article.image} 
              alt={article.title} 
              fill 
              className="object-cover object-center group-hover:scale-105 transition-transform duration-1000 ease-out" 
            />
          </div>
        </section>

        {/* Content Body */}
        <section className="px-6 md:px-12 lg:px-24 max-w-3xl mx-auto text-lg md:text-xl text-gray-800 leading-relaxed space-y-8 font-medium">
           {formattedContent.map((paragraph, index) => (
             <p key={index}>{paragraph}</p>
           ))}
        </section>

        {/* End Mark */}
        <div className="max-w-3xl mx-auto px-6 md:px-12 lg:px-24 mt-20 flex justify-center">
          <div className="w-12 h-1 bg-[#7c3aed]"></div>
        </div>
      </main>
    </div>
  );
}
