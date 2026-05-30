import React, { useState, useEffect } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import data from "../../data/achievementsData.json";
import { Document, Page, pdfjs } from 'react-pdf';

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

export const Achievements = () => {
  const [lightboxImg, setLightboxImg] = useState<string | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    if (data.carousel && data.carousel.length > 0) {
      const timer = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % data.carousel.length);
      }, 4000);
      return () => clearInterval(timer);
    }
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % data.carousel.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + data.carousel.length) % data.carousel.length);

  return (
    <section className="relative flex flex-1 w-full flex-col justify-start items-center bg-white px-6 md:px-12 py-8 lg:px-20 min-h-screen">
      <div className="flex flex-1 w-full max-w-[1200px] flex-col items-start pb-20">
        
        <p className="mb-2 [font-family:'IBM_Plex_Sans',Helvetica] text-[14px] font-semibold italic text-[#141313]">
          Recognition
        </p>
        <h1 className="mb-12 [font-family:'IBM_Plex_Sans',Helvetica] text-[40px] font-bold leading-[1.15] text-[#141313] uppercase">
          ACHIEVEMENTS
        </h1>

        <div className="w-full flex flex-col gap-16">
          
          {/* Volunteering Image Carousel - Moved to Top & Reduced Size */}
          {data.carousel && data.carousel.length > 0 && (
            <div className="flex flex-col mb-4">
              <h2 className="mb-6 [font-family:'IBM_Plex_Sans',Helvetica] text-[24px] font-bold leading-tight text-[#141313] uppercase border-b border-[#141313]/10 pb-4">
                Volunteering Photo Gallery
              </h2>
              <div className="w-full h-[250px] md:h-[400px] relative overflow-hidden rounded-lg bg-black/5 group">
                {data.carousel.map((img, idx) => (
                  <img
                    key={idx}
                    src={img}
                    alt={`Volunteer highlight ${idx + 1}`}
                    className={`absolute inset-0 w-full h-full object-contain transition-opacity duration-700 ease-in-out cursor-pointer ${
                      idx === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
                    }`}
                    onClick={() => setLightboxImg(img)}
                    loading={idx === 0 ? "eager" : "lazy"}
                  />
                ))}
                
                {/* Navigation Arrows */}
                <button 
                  onClick={prevSlide}
                  className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-black/30 text-white opacity-0 group-hover:opacity-100 transition-opacity hover:bg-black/50"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button 
                  onClick={nextSlide}
                  className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-black/30 text-white opacity-0 group-hover:opacity-100 transition-opacity hover:bg-black/50"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>

                {/* Dots */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex gap-2 flex-wrap justify-center w-[90%]">
                  {data.carousel.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentSlide(idx)}
                      className={`h-2 rounded-full transition-all ${
                        idx === currentSlide ? "bg-[#b86adf] w-6" : "bg-black/30 w-2 hover:bg-black/50"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          )}

          {data.categories.map((category) => (
            <div key={category.id} className="flex flex-col">
              <h2 className="mb-6 [font-family:'IBM_Plex_Sans',Helvetica] text-[24px] font-bold leading-tight text-[#141313] uppercase border-b border-[#141313]/10 pb-4">
                {category.title}
              </h2>
              
              <div className="flex flex-col gap-8">
                {category.items.map((item) => (
                  <div 
                    key={item.id}
                    className="grid grid-cols-1 lg:grid-cols-[1fr_240px] gap-10 items-center border-b border-[#141313]/10 pb-8 last:border-0"
                  >
                    <div className="flex flex-col">
                      <h3 className="mb-4 [font-family:'IBM_Plex_Sans',Helvetica] text-[24px] font-bold leading-[1.1] text-[#141313]">
                        {item.title}
                      </h3>
                      <button
                        onClick={() => {
                          if (item.type === "pdf") {
                            window.open(item.fileUrl, "_blank");
                          } else {
                            setLightboxImg(item.fileUrl);
                          }
                        }}
                        className="group flex items-center gap-2 text-[14px] font-bold text-[#141313] hover:text-gray-600 transition-colors w-fit border-b-2 border-[#141313] pb-1 hover:border-gray-600"
                      >
                        {item.type === "pdf" ? "View PDF Document" : "View Certificate"}
                        <svg className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
                      </button>
                    </div>

                    <div className="w-full relative mt-4 lg:mt-0 group cursor-pointer"
                      onClick={() => {
                        if (item.type === "pdf") {
                          window.open(item.fileUrl, "_blank");
                        } else {
                          setLightboxImg(item.fileUrl);
                        }
                      }}
                    >
                      <div className="p-1 bg-gradient-to-r from-[#b86adf] via-[#ff6c63] to-[#ffb147] rounded-xl shadow-md transition-shadow duration-300 group-hover:shadow-xl w-full">
                        <div className="bg-gray-50 rounded-lg overflow-hidden relative aspect-video flex items-center justify-center">
                          {item.type === "pdf" ? (
                            <Document 
                              file={item.fileUrl} 
                              className="w-full h-full flex items-center justify-center"
                              loading={<span className="text-[10px] text-gray-400">Loading preview...</span>}
                            >
                              <Page 
                                pageNumber={1} 
                                width={300} 
                                renderTextLayer={false} 
                                renderAnnotationLayer={false}
                                className="transform transition-transform duration-700 group-hover:scale-105"
                              />
                            </Document>
                          ) : (
                            <img 
                              src={item.fileUrl} 
                              alt={item.title}
                              className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
                              loading="lazy"
                            />
                          )}
                          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300" />
                        </div>
                      </div>
                    </div>

                  </div>
                ))}
              </div>
            </div>
          ))}

        </div>

      </div>

      {/* Lightbox Overlay */}
      {lightboxImg && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 sm:p-8"
          onClick={() => setLightboxImg(null)}
        >
          <button 
            className="absolute top-6 right-6 text-white hover:text-gray-300 transition-colors"
            onClick={(e) => {
              e.stopPropagation();
              setLightboxImg(null);
            }}
          >
            <X className="w-8 h-8" />
          </button>
          <img 
            src={lightboxImg} 
            alt="Expanded view" 
            className="max-w-full max-h-full object-contain cursor-default"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
};
