"use client";

import { useState } from "react";
import Sidebar from "./sidebar";
import ThemeProviderWrapper from "@/components/ThemeProviderWrapper";

export default function LayoutClient({ children }) {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <ThemeProviderWrapper>
      <div style={{ display: "flex", height: "100vh" }}>
        <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
        <div
          className={`transition-all duration-300 ${
            isOpen ? "w-[calc(100%-200px)]" : "w-[95%]"
          } p-20 flex-1`}
        >
          {children}
        </div>
      </div>
    </ThemeProviderWrapper>
  );
}
