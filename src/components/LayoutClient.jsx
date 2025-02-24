"use client";

import { useState } from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

import ThemeProviderWrapper from "@/components/ThemeProviderWrapper";


export default function LayoutClient({ children }) {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <ThemeProviderWrapper>
      <div style={{ display: "flex", height: "100vh" }}>
        <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />

        <div className="w-full">
          <Navbar />
          <div
            className={"transition-all duration-300  [w-100%] mt-14 flex-1"}
          >
            {children}
          </div>
        </div>
      </div>
    </ThemeProviderWrapper>
  );
}
