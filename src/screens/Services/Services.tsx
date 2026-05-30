import { useState, useEffect } from "react";
import { Plus, Minus } from "lucide-react";
import data from "../../data/portfolioData.json";

export const Services = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "//cdn.credly.com/assets/utilities/embed.js";
    script.async = true;
    script.type = "text/javascript";
    document.body.appendChild(script);

    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  const defaultOpenIndex = data.services.findIndex(s => s.image !== null && s.image !== undefined);
  const [openIndex, setOpenIndex] = useState<number | null>(defaultOpenIndex !== -1 ? defaultOpenIndex : 0);

  const toggleAccordion = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section className="relative flex flex-1 w-full flex-col justify-start items-center bg-white px-6 md:px-12 py-8 lg:px-20">
      <div className="flex flex-1 w-full max-w-[1200px] flex-col md:flex-row items-start justify-between pb-20 gap-16 lg:gap-24">
        
        {/* Left Column: Specialties */}
        <div className="w-full md:w-2/3 flex flex-col items-start">
          <p className="mb-2 h-[20px] [font-family:'IBM_Plex_Sans',Helvetica] text-[14px] font-semibold italic text-[#141313]">
            Skills
          </p>
          <h1 className="mb-8 [font-family:'IBM_Plex_Sans',Helvetica] text-[32px] md:text-[40px] font-bold leading-[1.15] text-[#141313] uppercase">
            MY SPECIALTIES
          </h1>

          <div className="w-full flex flex-col mb-16 md:mb-0">
            {data.services.map((service, index) => {
              const isOpen = openIndex === index;
              
              if (isOpen) {
                return (
                  <div 
                    key={index} 
                    className={`flex flex-col border-t ${index === data.services.length - 1 ? 'border-b' : ''} border-[#141313]/10 py-6 cursor-pointer`}
                    onClick={() => toggleAccordion(index)}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4 md:gap-6">
                        <span className="h-2 w-2 rounded-full bg-[#b86adf] shrink-0" />
                        <span className="bg-gradient-to-r from-[#b86adf] to-[#ffb147] bg-clip-text [font-family:'IBM_Plex_Sans',Helvetica] text-[20px] md:text-[24px] font-bold text-transparent uppercase">
                          {service.title}
                        </span>
                      </div>
                      <Minus className="h-6 w-6 md:h-8 md:w-8 text-[#141313] font-light shrink-0 ml-4" strokeWidth={1} />
                    </div>
                    <div className="mt-8 flex flex-col md:flex-row gap-8 md:pl-8 cursor-default" onClick={(e) => e.stopPropagation()}>
                      {service.image && (
                        <div className="md:w-1/2">
                          <img 
                            src={service.image} 
                            alt={service.title} 
                            className="w-full h-auto object-cover max-h-48 rounded-lg"
                          />
                        </div>
                      )}
                      <div className={service.image ? "md:w-1/2 flex items-center" : "w-full flex items-center"}>
                        <p className="text-[14px] leading-relaxed text-[#141313]/70 font-medium">
                          {service.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              }

              return (
                <div 
                  key={index} 
                  className={`flex items-center justify-between border-t ${index === data.services.length - 1 ? 'border-b' : ''} border-[#141313]/10 py-6 cursor-pointer hover:bg-gray-50 transition-colors duration-200`}
                  onClick={() => toggleAccordion(index)}
                >
                  <div className="flex items-center gap-4 md:gap-6">
                    <span className="h-2 w-2 rounded-full bg-[#141313] shrink-0" />
                    <span className="[font-family:'IBM_Plex_Sans',Helvetica] text-[20px] md:text-[24px] font-bold text-[#141313] uppercase">
                      {service.title}
                    </span>
                  </div>
                  <div className="flex items-center gap-6 md:gap-12 pointer-events-none">
                    <p className="hidden md:block max-w-[360px] text-[12px] leading-relaxed text-[#141313]/60 line-clamp-2">
                      {service.description}
                    </p>
                    <Plus className="h-6 w-6 md:h-8 md:w-8 text-[#141313] font-light shrink-0 ml-4 pointer-events-auto" strokeWidth={1} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right Column: Certifications */}
        <div className="w-full md:w-1/3 flex flex-col items-start md:mt-[28px]">
          <h2 className="mb-8 [font-family:'IBM_Plex_Sans',Helvetica] text-[32px] md:text-[40px] font-bold leading-[1.15] text-[#141313] uppercase text-center md:text-left w-full">
            CERTIFICATIONS
          </h2>
          <div className="w-full flex flex-col gap-6 items-center justify-start">
            
            {/* CCNA Badge */}
            <div data-iframe-width="150" data-iframe-height="270" data-share-badge-id="7a123b4a-d53c-49a1-bb88-0ff4115ca674" data-share-badge-host="https://www.credly.com"></div>

            {/* Google IT Support Badge */}
            <div data-iframe-width="150" data-iframe-height="270" data-share-badge-id="bd1987a7-8adc-4238-80c4-6bc46d5319e4" data-share-badge-host="https://www.credly.com"></div>

          </div>
        </div>

      </div>
    </section>
  );
};
