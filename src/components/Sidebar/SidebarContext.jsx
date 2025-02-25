"use client";

import { createContext, useContext, useEffect, useState } from "react";

// Create Context
const SidebarContext = createContext();

// Provider Component
export const SidebarProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(true);

    // Run on mount to check screen size
    useEffect(() => {
      if (window.innerWidth < 1024) {
        setIsOpen(false); // Hide sidebar if screen is smaller than lg
      } else {
        setIsOpen(true)
      }
    }, []);
  

  // Function to toggle sidebar
  const toggleSidebar = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <SidebarContext.Provider value={{ isOpen, toggleSidebar }}>
      {children}
    </SidebarContext.Provider>
  );
};

// Custom hook to use SidebarContext
export const useSidebar = () => useContext(SidebarContext);
