import { ArrowUpRight, ArrowLeft, ArrowRight } from "lucide-react";
import data from "../../data/portfolioData.json";

export const Works = () => (
  <section className="flex flex-1 flex-col justify-center bg-white">
    <div className="px-12 py-4 lg:px-20">
      <p className="mb-2 [font-family:'IBM_Plex_Sans',Helvetica] text-[14px] font-semibold italic text-[#141313]">
        Work
      </p>
      <h1 className="mb-8 [font-family:'IBM_Plex_Sans',Helvetica] text-[40px] font-bold leading-[1.15] text-[#141313] uppercase">
        RECENT PROJECT
      </h1>

      <div className="grid grid-cols-1 gap-12 sm:grid-cols-2">
        {data.projects.map((w, index) => (
          <div key={index} className="group cursor-pointer flex flex-col md:flex-row gap-6 items-center">
            <div className="flex-1 flex flex-col justify-center">
              <p className="mb-2 [font-family:'IBM_Plex_Sans',Helvetica] text-[12px] font-bold italic text-[#141313]/60">
                {w.category}
              </p>
              <h2 className="mb-6 [font-family:'IBM_Plex_Sans',Helvetica] text-[32px] font-bold leading-[1.1] text-[#141313]">
                {w.title.split(' ').map((word, i) => (
                  <span key={i} className="block">{word}</span>
                ))}
              </h2>
              <ArrowUpRight className="h-8 w-8 text-[#141313] transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" strokeWidth={1.5} />
            </div>
            
            <div className="flex-1 w-full aspect-[4/3] bg-gray-100 overflow-hidden">
              <img
                src={w.img}
                alt={w.title}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 flex justify-center">
        <button className="flex items-center gap-3 bg-[#141313] px-6 py-4 text-white hover:bg-black transition-colors">
          <span className="[font-family:'IBM_Plex_Sans',Helvetica] text-[14px] font-medium">Load more</span>
          <div className="bg-gradient-to-r from-[#ffb147] via-[#ff6c63] to-[#b86adf] p-1">
            <ArrowUpRight className="h-4 w-4 text-white" />
          </div>
        </button>
      </div>
    </div>

    {/* Testimonial Section */}
    <div className="mt-4 px-12 pb-4 lg:px-20">
      <div className="bg-gradient-to-r from-[#b86adf] via-[#ff6c63] to-[#ffb147] text-white p-6 lg:p-10 relative overflow-hidden">
        
        <p className="text-center mb-2 text-[14px] font-semibold italic">
          Testimonial
        </p>
        <h2 className="text-center text-[40px] font-bold leading-[1.1] mb-16 uppercase">
          WHAT THEY SAYS
        </h2>

        <div className="flex flex-col lg:flex-row items-center gap-16 relative z-10">
          <div className="lg:w-2/5 relative">
            {/* Background shape behind person */}
            <div className="absolute top-8 -left-8 h-48 w-48 bg-gradient-to-br from-yellow-300 to-transparent opacity-60 mix-blend-overlay" style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%)' }} />
            
            <img 
              src={data.testimonials[1].img} 
              alt={data.testimonials[1].author} 
              className="relative z-10 w-full h-auto object-cover rounded-sm"
              style={{ maskImage: 'linear-gradient(to bottom, black 70%, transparent 100%)', WebkitMaskImage: 'linear-gradient(to bottom, black 70%, transparent 100%)' }}
            />
          </div>
          
          <div className="lg:w-3/5 flex flex-col">
            <p className="text-[28px] lg:text-[32px] font-bold italic leading-snug mb-8">
              "{data.testimonials[1].quote}"
            </p>
            <div className="mb-8">
              <p className="text-[18px] font-bold">-{data.testimonials[1].author}</p>
              <p className="text-[12px] opacity-80">{data.testimonials[1].role}</p>
            </div>
            
            <div className="flex gap-4">
              <button className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#141313] hover:bg-gray-100 transition-colors">
                <ArrowLeft className="h-4 w-4" />
              </button>
              <button className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#141313] hover:bg-gray-100 transition-colors">
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Logos bottom border */}
        <div className="mt-16 border-t border-white/20 pt-8 flex flex-wrap justify-between items-center gap-8 opacity-90">
          <div className="flex items-center gap-2 text-xl font-bold">
            <div className="w-6 h-6 border-2 border-white rounded-sm" /> square
          </div>
          <div className="text-xl font-black tracking-tighter">PAPERZ</div>
          <div className="flex items-center gap-2 text-xl font-bold">
            <span className="text-2xl">⬡</span> cuebiq
          </div>
          <div className="text-xl font-serif italic">Martino</div>
        </div>
      </div>
    </div>
  </section>
);
