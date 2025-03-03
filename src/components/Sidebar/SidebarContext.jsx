"use client";

import { createContext, useContext, useEffect, useState } from "react";

// Create Context
const SidebarContext = createContext();

// Provider Component
export const SidebarProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(true);

  // Function to toggle sidebar
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

    // Function to close sidebar
    const closeSidebar = () => {
      setIsOpen(false);
    };
  

  // Run on mount to check screen size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 1024) {
        setIsOpen(false); // Hide sidebar when screen is smaller than lg (1024px)
      } else {
        setIsOpen(true); // Show sidebar when screen is larger than lg
      }
    };

    handleResize(); // Call initially
    window.addEventListener("resize", handleResize); // Listen for resize event

    return () => window.removeEventListener("resize", handleResize); // Cleanup
  }, []);

  return (
    <SidebarContext.Provider value={{ isOpen, toggleSidebar , closeSidebar }}>
      {children}
    </SidebarContext.Provider>
  );
};

// Custom hook to use SidebarContext
export const useSidebar = () => useContext(SidebarContext);