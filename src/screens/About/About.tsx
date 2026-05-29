import { Phone, Mail, User, MapPin, ArrowUpRight } from "lucide-react";
import data from "../../data/portfolioData.json";

export const About = () => (
  <section className="flex flex-1 flex-col bg-white">
    <div className="flex flex-col lg:flex-row px-6 md:px-12 py-10 lg:px-20 gap-16 xl:gap-32">
      {/* Left Column */}
      <div className="flex flex-1 flex-col items-center lg:items-start lg:max-w-md">
        <p className="mb-4 [font-family:'IBM_Plex_Sans',Helvetica] text-[14px] font-semibold italic text-[#141313]">
          Nice to meet you!
        </p>
        <h1 className="mb-12 [font-family:'IBM_Plex_Sans',Helvetica] text-[40px] font-bold leading-[1.15] text-[#141313] uppercase">
          WELCOME TO...
        </h1>

        <div className="relative w-72 h-72">
          {/* Decorative dots */}
          <div className="absolute top-4 -left-8 h-16 w-16" style={{ backgroundImage: 'radial-gradient(#141313 2px, transparent 2px)', backgroundSize: '10px 10px' }} />
          
          {/* Orange/Purple shapes */}
          <div className="absolute top-1/2 -left-4 h-32 w-32 -translate-y-1/2 rounded-full bg-[#ffb147]" />
          <div className="absolute top-1/4 -right-8 h-48 w-48 rounded-full bg-[#b86adf]" />
          
          {/* Signature overlay */}
          <div className="absolute -bottom-8 right-0 z-20 font-[cursive] text-5xl text-[#141313] opacity-80 -rotate-12">
            {data.profile.name}
          </div>
        </div>

        <div className="mt-16 text-center lg:text-left w-full">
          <h2 className="mb-2 bg-gradient-to-r from-[#b86adf] via-[#ff6c63] to-[#ffb147] bg-clip-text [font-family:'IBM_Plex_Sans',Helvetica] text-[32px] font-bold text-transparent">
            {data.profile.name}
          </h2>
          <p className="mb-6 [font-family:'IBM_Plex_Sans',Helvetica] text-[16px] font-bold italic text-[#141313]">
            {data.profile.title} <span className="font-normal">based in</span> {data.profile.location}
          </p>
          <a href={data.profile.cvLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 font-bold text-[14px] border-b-2 border-black pb-1 hover:text-gray-600 transition-colors">
            Download CV
            <div className="bg-black p-0.5 text-white">
              <ArrowUpRight className="h-4 w-4" />
            </div>
          </a>
        </div>
      </div>

      {/* Right Column */}
      <div className="flex flex-1 flex-col justify-center pt-8 lg:pt-32">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-12 border-b border-[#141313]/10 pb-8">
          <div className="flex items-center gap-4 font-bold text-[14px]">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100">
              <Phone className="h-4 w-4 text-gray-600" />
            </div>
            {data.profile.phone}
          </div>
          <div className="flex items-center gap-4 font-bold text-[14px]">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100">
              <User className="h-4 w-4 text-gray-600" />
            </div>
            {data.profile.age}
          </div>
          <div className="flex items-center gap-4 font-bold text-[14px]">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100">
              <Mail className="h-4 w-4 text-gray-600" />
            </div>
            {data.profile.email}
          </div>
          <div className="flex items-center gap-4 font-bold text-[14px]">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100">
              <MapPin className="h-4 w-4 text-gray-600" />
            </div>
            {data.profile.location}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 mt-8">
          <div>
            <div className="flex items-baseline gap-2 mb-2">
              <p className="bg-gradient-to-r from-[#ffb147] to-[#ff6c63] bg-clip-text text-[40px] font-bold text-transparent">
                {data.profile.stats.years}
              </p>
              <p className="text-[14px] font-bold italic leading-tight max-w-[80px]">
                Years<br />experience...
              </p>
            </div>
            <p className="text-[12px] leading-relaxed text-[#141313]/80">
              {data.profile.bio[0]}
            </p>
          </div>
          
          <div>
            <div className="flex items-baseline gap-2 mb-2">
              <p className="bg-gradient-to-r from-[#b86adf] to-[#ff6c63] bg-clip-text text-[40px] font-bold text-transparent">
                {data.profile.stats.clients}
              </p>
              <p className="text-[14px] font-bold italic leading-tight max-w-[80px]">
                Clients<br />Worldwide...
              </p>
            </div>
            <p className="text-[12px] leading-relaxed text-[#141313]/80">
              {data.profile.bio[1]}
            </p>
          </div>
        </div>


      </div>
    </div>

    {/* Experience Section */}
    <div className="bg-gradient-to-r from-[#b86adf] via-[#ff6c63] to-[#ffb147] px-6 md:px-12 py-16 lg:py-20 text-white lg:px-20 mt-10">
      <div className="flex flex-col lg:flex-row gap-16 lg:gap-32">
        <div className="lg:w-1/3">
          <p className="mb-4 text-[14px] font-semibold italic">
            Experience
          </p>
          <h2 className="text-[40px] font-bold leading-[1.1] mb-6">
            MY EXPERIENCE
          </h2>
          <p className="text-[14px] leading-relaxed mb-8 opacity-90 max-w-sm">
            {data.profile.bio[0]}
          </p>
          <a href={data.profile.cvLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 bg-[#141313] px-6 py-4 text-white hover:bg-black transition-colors w-fit">
            <span className="[font-family:'IBM_Plex_Sans',Helvetica] text-[14px] font-medium">Download my resume</span>
            <div className="bg-gradient-to-r from-[#ffb147] via-[#ff6c63] to-[#b86adf] p-1">
              <ArrowUpRight className="h-4 w-4 text-white" />
            </div>
          </a>
        </div>

        <div className="flex-1 flex flex-col gap-12">
          {data.experience.map((exp, index) => (
            <div key={index} className={`flex flex-col sm:flex-row sm:items-baseline justify-between ${index !== data.experience.length - 1 ? 'border-b border-white/20 pb-6' : 'pb-6'}`}>
              <div className="flex-1">
                <p className="text-[14px] italic opacity-80 mb-2">-{exp.period}</p>
                <h3 className="text-[24px] font-bold">{exp.role}</h3>
              </div>
              <p className="text-[14px] italic opacity-80 mt-2 sm:mt-0">-{exp.company}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);
