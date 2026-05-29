import { ArrowUpRight, Link as LinkIcon, Mail, Instagram, Dribbble, Facebook, Sparkles, Linkedin, Twitter } from "lucide-react";
import data from "../../data/portfolioData.json";

const IconMap: Record<string, any> = {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Dribbble
};

export const Home = () => (
  <section className="relative flex flex-1 flex-col justify-center bg-white overflow-hidden py-4">
    <div className="flex flex-1 flex-col lg:flex-row items-center justify-center">
      {/* Left Column (Text & CTA) */}
      <div className="flex flex-col justify-center px-12 lg:pl-32 lg:pr-12 z-10">
        <h1 className="[font-family:'IBM_Plex_Sans',Helvetica] text-[70px] lg:text-[100px] font-bold leading-[0.9] tracking-[-2px] text-[#141313] uppercase">
          <span className="font-normal text-[#141313]/80 text-[60px] lg:text-[80px]">MY NAME</span><br />
          <span className="font-normal text-[#141313]/80 text-[60px] lg:text-[80px]">IS </span>
          {data.profile.firstName}<br />
          {data.profile.lastName}...
        </h1>
        <p className="mt-6 [font-family:'IBM_Plex_Sans',Helvetica] text-[24px] font-bold italic text-[#141313]">
          {data.profile.title} <span className="font-normal">based in</span> {data.profile.location}
        </p>
        
        <div className="mt-12">
          <button className="flex items-center gap-3 bg-[#141313] px-6 py-4 text-white hover:bg-black transition-colors">
            <span className="[font-family:'IBM_Plex_Sans',Helvetica] text-[14px] font-medium">Let's talk</span>
            <div className="bg-gradient-to-r from-[#ffb147] via-[#ff6c63] to-[#b86adf] p-1">
              <ArrowUpRight className="h-4 w-4 text-white" />
            </div>
          </button>
        </div>

        <div className="mt-16 flex flex-col gap-6 sm:flex-row sm:items-center sm:gap-12">
          <div className="flex items-center gap-3 font-bold [font-family:'IBM_Plex_Sans',Helvetica] text-[14px]">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-100">
              <LinkIcon className="h-4 w-4 text-gray-600" />
            </div>
            {data.profile.phone}
          </div>
          <div className="flex items-center gap-3 font-bold [font-family:'IBM_Plex_Sans',Helvetica] text-[14px]">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-100">
              <Mail className="h-4 w-4 text-gray-600" />
            </div>
            {data.profile.email}
          </div>
        </div>
      </div>

      {/* Right Column (Image & Gradient Shapes) */}
      <div className="relative flex flex-1 items-center justify-center">
        {/* Decorative Shapes */}
        <div className="absolute top-1/4 -left-8 h-64 w-64 -rotate-12 rounded-full bg-gradient-to-br from-[#b86adf] to-transparent opacity-80 z-0" />
        <div className="absolute bottom-1/4 -right-8 h-64 w-64 rounded-full bg-gradient-to-br from-[#ff6c63] to-[#ffb147] opacity-80 z-0" />
        <div className="absolute top-1/2 left-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-tr from-[#b86adf] via-[#ff6c63] to-transparent opacity-60 mix-blend-multiply blur-xl z-0" />
        
        {/* Stars */}
        <Sparkles className="absolute top-8 right-8 h-6 w-6 text-black z-20" strokeWidth={1} />
        <Sparkles className="absolute bottom-20 left-4 h-6 w-6 text-black z-20" strokeWidth={1} />
        
        {/* Dot pattern */}
        <div className="absolute bottom-8 right-4 h-24 w-24 z-20" style={{ backgroundImage: 'radial-gradient(#141313 2px, transparent 2px)', backgroundSize: '12px 12px' }} />

      </div>
      
      {/* Right Edge Social Icons */}
      <div className="flex absolute right-4 top-1/2 -translate-y-1/2 flex-col items-center gap-6 z-30">
        {data.socials.slice(0, 3).map((social, index) => {
          const Icon = IconMap[social.icon];
          return (
            <a key={index} href={social.url} className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 text-gray-500 bg-white hover:border-black hover:text-black transition-colors">
              {Icon && <Icon className="h-4 w-4" />}
            </a>
          );
        })}
        <div className="mt-4 h-24 w-[1px] bg-gray-300" />
      </div>
    </div>
  </section>
);
