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
  { label: "SERVICES", path: "/services" },
  { label: "WORKS", path: "/works" },
  { label: "BLOGS", path: "/blogs" },
  { label: "CONTACT", path: "/contact" },
];

export const SidebarLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="flex bg-[#ececec] overflow-x-hidden" style={{ minHeight: 'calc(100vh / 1.5)', width: 'calc(100vw / 1.5)' }}>
      <aside className="flex w-[118px] shrink-0 flex-col bg-[#0f0b0f] text-white">
        <div className="flex h-full flex-col px-5 pb-5 pt-6">
          <header className="mb-[38px]">
            <NavLink
              to="/"
              className="w-fit [font-family:'IBM_Plex_Serif',Helvetica] text-[17px] font-bold leading-none tracking-[0] text-white"
            >
              {data.profile.initials}
            </NavLink>
          </header>
          <nav aria-label="Sidebar navigation" className="mt-1">
            <ul className="flex flex-col gap-[8px]">
              {navItems.map((item) => (
                <li key={item.label} className="relative">
                  <NavLink
                    to={item.path}
                    end={item.path === "/"}
                    className={({ isActive }) =>
                      `relative block h-auto p-0 text-left [font-family:'IBM_Plex_Sans',Helvetica] text-[10px] leading-[22px] tracking-[0] transition-opacity ${
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
                          <span className="pointer-events-none absolute left-0 top-1/2 h-1 w-[95px] -translate-y-1/2 bg-gradient-to-r from-[#ffb147] via-[#ff6c63] to-[#b86adf]" />
                        )}
                      </>
                    )}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
          <div className="mt-auto">
            <div className="flex flex-col gap-[6px]">
              {data.socials.slice(0, 3).map((social, index) => {
                const Icon = IconMap[social.icon];
                const colors = ["hover:text-[#ffb147]", "hover:text-[#ff6c63]", "hover:text-[#b86adf]"];
                return (
                  <a key={index} href={social.url} className={`text-white/30 transition-colors ${colors[index % colors.length]}`}>
                    {Icon && <Icon className="h-3 w-3" strokeWidth={2} />}
                  </a>
                );
              })}
            </div>
            <p className="mt-5 max-w-[84px] [font-family:'IBM_Plex_Sans',Helvetica] text-[10px] font-normal leading-[14px] tracking-[0] text-white">
              Copyright &copy;2022 {data.profile.name}. All right reserved.
            </p>
          </div>
        </div>
      </aside>
      <div className="flex min-w-0 flex-1 flex-col">{children}</div>
    </main>
  );
};
