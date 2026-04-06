import Header from "@/components/Header";

export default function Page() {{
  return (
    <div className="flex flex-col min-h-screen bg-white text-black selection:bg-blue-600 selection:text-white">
      <Header />
      <main className="flex-grow pt-32 px-6 flex flex-col items-center justify-center text-center">
        <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6">South Africa Home</h1>
        <p className="text-gray-500 text-lg md:text-xl">This subpage for South Africa Home is under construction.</p>
      </main>
    </div>
  );
}}
