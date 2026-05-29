import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { SpeedInsights } from "@vercel/speed-insights/react";
import { SidebarLayout } from "./components/SidebarLayout";
import { About } from "./screens/About/About";
import { Blogs } from "./screens/Blogs/Blogs";
import { ElementContact } from "./screens/ElementContact";
import { Home } from "./screens/Home/Home";
import { Services } from "./screens/Services/Services";
import { Works } from "./screens/Works/Works";
import { ProjectDetail } from "./screens/ProjectDetail/ProjectDetail";

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <BrowserRouter>
      <SidebarLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Services />} />
          <Route path="/projects" element={<Works />} />
          <Route path="/projects/:slug" element={<ProjectDetail />} />
          <Route path="/contact" element={<ElementContact />} />
        </Routes>
      </SidebarLayout>
    </BrowserRouter>
    <SpeedInsights />
  </StrictMode>,
);
