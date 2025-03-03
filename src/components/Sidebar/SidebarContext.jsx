"use client";

import { createContext, useContext, useEffect, useState } from "react";

// Create Context
const SidebarContext = createContext();

// Provider Component
export const SidebarProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(true);
  const [isLgScreen, setIsLgScreen] = useState(false); // Initialize as false

  // Function to toggle sidebar
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  // Function to close sidebar (only works on sm - lg screens)
  const closeSidebar = () => {
    if (!isLgScreen) {
      setIsOpen(false);
    }
  };

  // Run on mount to check screen size
  useEffect(() => {
    if (typeof window === "undefined") return; // Ensure it runs only on the client

    const handleResize = () => {
      const isLarge = window.innerWidth > 1024;
      setIsLgScreen(isLarge);
      setIsOpen(isLarge); // Open sidebar on large screens, close it otherwise
    };

    handleResize(); // Call initially after mount
    window.addEventListener("resize", handleResize); // Listen for resize event

    return () => window.removeEventListener("resize", handleResize); // Cleanup
  }, []);

  return (
    <SidebarContext.Provider value={{ isOpen, toggleSidebar, closeSidebar }}>
      {children}
    </SidebarContext.Provider>
  );
};

// Custom hook to use SidebarContext
export const useSidebar = () => useContext(SidebarContext);
