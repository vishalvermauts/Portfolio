import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { SidebarLayout } from "./components/SidebarLayout";
import { About } from "./screens/About/About";
import { Blogs } from "./screens/Blogs/Blogs";
import { ElementContact } from "./screens/ElementContact";
import { Home } from "./screens/Home/Home";
import { Services } from "./screens/Services/Services";
import { Works } from "./screens/Works/Works";

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <BrowserRouter>
      <SidebarLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/works" element={<Works />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/contact" element={<ElementContact />} />
        </Routes>
      </SidebarLayout>
    </BrowserRouter>
  </StrictMode>,
);
