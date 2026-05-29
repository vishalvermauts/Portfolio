import { Plus, Minus } from "lucide-react";
import data from "../../data/portfolioData.json";
export const Services = () => (
  <section className="relative flex flex-1 w-full flex-col justify-start items-center bg-white px-6 md:px-12 py-0 lg:px-20 overflow-hidden">
    <div className="flex flex-1 w-full max-w-[1000px] flex-col items-start justify-center">
      <p className="mb-2 [font-family:'IBM_Plex_Sans',Helvetica] text-[14px] font-semibold italic text-[#141313]">
        Skills
      </p>
      <h1 className="mb-8 [font-family:'IBM_Plex_Sans',Helvetica] text-[40px] font-bold leading-[1.15] text-[#141313] uppercase">
        MY SPECIALTIES
      </h1>

      <div className="w-full flex flex-col">
        {data.services.map((service, index) => {
          const isOpen = service.image !== null && service.image !== undefined;
          
          if (isOpen) {
            return (
              <div key={index} className={`flex flex-col border-t ${index === data.services.length - 1 ? 'border-b' : ''} border-[#141313]/10 py-6`}>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4 md:gap-6">
                    <span className="h-2 w-2 rounded-full bg-[#b86adf] shrink-0" />
                    <span className="bg-gradient-to-r from-[#b86adf] to-[#ffb147] bg-clip-text [font-family:'IBM_Plex_Sans',Helvetica] text-[20px] md:text-[24px] font-bold text-transparent uppercase">
                      {service.title}
                    </span>
                  </div>
                  <Minus className="h-6 w-6 md:h-8 md:w-8 text-[#141313] font-light shrink-0 ml-4" strokeWidth={1} />
                </div>
                <div className="mt-8 flex flex-col md:flex-row gap-8 md:pl-8">
                  <div className="md:w-1/2">
                    <img 
                      src={service.image} 
                      alt={service.title} 
                      className="w-full h-auto object-cover max-h-48"
                    />
                  </div>
                  <div className="md:w-1/2 flex items-center">
                    <p className="text-[12px] leading-relaxed text-[#141313]/60">
                      {service.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          }

          return (
            <div key={index} className={`flex items-center justify-between border-t ${index === data.services.length - 1 ? 'border-b' : ''} border-[#141313]/10 py-6`}>
              <div className="flex items-center gap-4 md:gap-6">
                <span className="h-2 w-2 rounded-full bg-[#141313] shrink-0" />
                <span className="[font-family:'IBM_Plex_Sans',Helvetica] text-[20px] md:text-[24px] font-bold text-[#141313] uppercase">
                  {service.title}
                </span>
              </div>
              <div className="flex items-center gap-6 md:gap-12">
                <p className="hidden md:block max-w-[360px] text-[12px] leading-relaxed text-[#141313]/60">
                  {service.description}
                </p>
                <Plus className="h-6 w-6 md:h-8 md:w-8 text-[#141313] font-light shrink-0 ml-4" strokeWidth={1} />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  </section>
);
