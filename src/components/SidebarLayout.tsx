import { NavLink } from "react-router-dom";
import { Facebook, Twitter, Instagram, Linkedin, Dribbble } from "lucide-react";
import data from "../data/portfolioData.json";

const IconMap: Record<string, any> = {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Dribbble
};
const navItems = [
  { label: "HOME", path: "/" },
  { label: "ABOUT", path: "/about" },
  { label: "SKILLS", path: "/skills" },
  { label: "PROJECTS", path: "/projects" },
  { label: "CONTACT", path: "/contact" },
];

export const SidebarLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="flex flex-col md:flex-row bg-[#ececec] overflow-x-hidden min-h-screen w-full pb-[60px] md:pb-0">
      <aside className="fixed bottom-0 left-0 right-0 z-50 flex h-[60px] w-full flex-row items-center justify-between bg-[#0f0b0f] text-white md:sticky md:top-0 md:h-screen md:w-[118px] md:flex-col md:justify-start border-t border-white/10 md:border-none shadow-[0_-4px_20px_rgba(0,0,0,0.3)] md:shadow-none">
        <div className="flex h-full w-full flex-row items-center justify-between px-2 md:flex-col md:px-5 md:pb-5 md:pt-6">
          <header className="hidden md:block mb-[38px]">
            <NavLink
              to="/"
              className="w-fit [font-family:'IBM_Plex_Serif',Helvetica] text-[17px] font-bold leading-none tracking-[0] text-white"
            >
              {data.profile.initials}
            </NavLink>
          </header>
          <nav aria-label="Sidebar navigation" className="w-full md:mt-1">
            <ul className="flex w-full flex-row justify-around md:flex-col md:gap-[8px]">
              {navItems.map((item) => (
                <li key={item.label} className="relative">
                  <NavLink
                    to={item.path}
                    end={item.path === "/"}
                    className={({ isActive }) =>
                      `relative flex h-[60px] flex-1 items-center justify-center p-2 text-center md:block md:h-auto md:p-0 md:text-left [font-family:'IBM_Plex_Sans',Helvetica] text-[10px] md:text-[12px] md:leading-[22px] tracking-[0] transition-opacity z-10 ${
                        isActive
                          ? "font-bold text-white"
                          : "font-normal text-white hover:opacity-80"
                      }`
                    }
                  >
                    {({ isActive }) => (
                      <>
                        {item.label}
                        {isActive && (
                          <span className="pointer-events-none absolute left-1/2 bottom-[8px] h-[3px] w-1/2 -translate-x-1/2 bg-gradient-to-r from-[#ffb147] via-[#ff6c63] to-[#b86adf] rounded-full md:left-0 md:top-1/2 md:h-1 md:w-[95px] md:-translate-x-0 md:-translate-y-1/2 md:opacity-40 md:-z-10 md:rounded-none" />
                        )}
                      </>
                    )}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
          <div className="hidden md:block mt-auto">
            <div className="flex flex-col gap-[6px]">
              {data.socials.slice(0, 3).map((social, index) => {
                const Icon = IconMap[social.icon];
                const colors = ["hover:text-[#ffb147]", "hover:text-[#ff6c63]", "hover:text-[#b86adf]"];
                return (
                  <a key={index} href={social.url} target="_blank" rel="noopener noreferrer" className={`text-white/30 transition-colors ${colors[index % colors.length]}`}>
                    {Icon && <Icon className="h-3 w-3" strokeWidth={2} />}
                  </a>
                );
              })}
            </div>
            <p className="mt-5 max-w-[84px] [font-family:'IBM_Plex_Sans',Helvetica] text-[10px] font-normal leading-[14px] tracking-[0] text-white/50">
              Copyright &copy;2024 {data.profile.name}. All rights reserved.
            </p>
          </div>
        </div>
      </aside>
      <div className="flex min-w-0 flex-1 flex-col">{children}</div>
    </main>
  );
};
