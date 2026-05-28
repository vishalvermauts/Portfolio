import { ArrowUpRight } from "lucide-react";
import data from "../../data/portfolioData.json";

export const Blogs = () => (
  <section className="flex flex-1 flex-col justify-center items-center bg-white px-12 py-4 lg:px-20">
    <div className="w-full max-w-[1200px] flex flex-col items-center">
      <p className="mb-2 [font-family:'IBM_Plex_Sans',Helvetica] text-[14px] font-semibold italic text-[#141313] text-center">
        Blog
      </p>
      <h1 className="mb-6 [font-family:'IBM_Plex_Sans',Helvetica] text-[40px] font-bold leading-[1.15] text-[#141313] text-center uppercase">
        READ MY BLOG
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
        {data.blogs.map((p, i) => (
          <article key={i} className="flex flex-col border-b border-[#141313]/10 pb-4">
            <div className="mb-4 w-full aspect-[16/9] overflow-hidden bg-gray-100">
              <img
                src={p.img}
                alt={p.title}
                className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
            <div>
              <p className="mb-2 [font-family:'IBM_Plex_Sans',Helvetica] text-[12px] font-bold italic text-[#141313]">
                {p.date}
              </p>
              <h2 className="[font-family:'IBM_Plex_Sans',Helvetica] text-[18px] font-bold leading-[1.2] text-[#141313]">
                {p.title}
              </h2>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-6 flex justify-center">
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
