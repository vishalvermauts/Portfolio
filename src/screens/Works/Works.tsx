import { ArrowUpRight, Github } from "lucide-react";
import { Link } from "react-router-dom";
import data from "../../data/portfolioData.json";

export const Works = () => (
  <section className="flex flex-1 flex-col bg-white overflow-y-auto">
    <div className="px-6 md:px-12 py-16 lg:py-20 lg:px-20 max-w-5xl">
      <p className="mb-2 [font-family:'IBM_Plex_Sans',Helvetica] text-[14px] font-semibold italic text-[#141313]">
        Projects
      </p>
      <h1 className="mb-12 [font-family:'IBM_Plex_Sans',Helvetica] text-[40px] font-bold leading-[1.15] text-[#141313] uppercase">
        RECENT PROJECTS
      </h1>

      <div className="flex flex-col gap-12">
        {data.projects.map((w, index) => (
          <div key={index} className="grid grid-cols-1 lg:grid-cols-[1fr_240px] gap-10 items-center border-b border-[#141313]/10 pb-12 last:border-0">
            <div className="flex flex-col">
              <h2 className="mb-4 [font-family:'IBM_Plex_Sans',Helvetica] text-[32px] font-bold leading-[1.1] text-[#141313]">
                {w.title}
              </h2>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {w.stack.map((tech, i) => (
                  <span key={i} className="bg-gray-100 px-3 py-1 text-[12px] font-bold text-[#141313]/70 rounded-full border border-gray-200">
                    {tech}
                  </span>
                ))}
              </div>
              
              <p className="mb-8 [font-family:'IBM_Plex_Sans',Helvetica] text-[18px] font-medium leading-relaxed text-[#141313]/80 max-w-2xl">
                {w.intro}
              </p>
              
              <div className="flex gap-6 mt-auto pt-2">
                <Link
                  to={`/projects/${w.slug}`}
                  className="group flex items-center gap-2 text-[14px] font-bold text-[#141313] hover:text-gray-600 transition-colors w-fit border-b-2 border-[#141313] pb-1 hover:border-gray-600"
                >
                  View Details
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" strokeWidth={2} />
                </Link>

                <a 
                  href={w.githubLink} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="group flex items-center gap-2 text-[14px] font-bold text-gray-500 hover:text-[#141313] transition-colors w-fit pb-1"
                >
                  <Github className="h-4 w-4" />
                  GitHub
                </a>
              </div>
            </div>

            {(w as any).screenshots && (w as any).screenshots.length > 0 && (
              <div className="w-full relative mt-4 lg:mt-0 group">
                <Link to={`/projects/${w.slug}`}>
                  <div className="p-1 bg-gradient-to-r from-[#b86adf] via-[#ff6c63] to-[#ffb147] rounded-xl shadow-md transition-shadow duration-300 group-hover:shadow-xl w-full">
                    <div className="bg-white rounded-lg overflow-hidden relative aspect-video">
                      <img 
                        src={(w as any).screenshots[(w as any).screenshots.length - 1]} 
                        alt={w.title} 
                        className="w-full h-full object-cover object-left-top transform transition-transform duration-700 group-hover:scale-105" 
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300" />
                    </div>
                  </div>
                </Link>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="mt-12 flex justify-start">
        <button className="flex items-center gap-3 bg-[#141313] px-6 py-4 text-white hover:bg-black transition-colors">
          <span className="[font-family:'IBM_Plex_Sans',Helvetica] text-[14px] font-medium">Load more</span>
          <div className="bg-gradient-to-r from-[#ffb147] via-[#ff6c63] to-[#b86adf] p-1">
            <ArrowUpRight className="h-4 w-4 text-white" />
          </div>
        </button>
      </div>
    </div>
  </section>
);
