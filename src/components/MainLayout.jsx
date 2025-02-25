"use client";

import Navbar from "./Navbar";
import Sidebar from "./Sidebar/Sidebar";
import { useSidebar } from "./Sidebar/SidebarContext";

// Separate client-side wrapper
function MainLayout({ children }) {
    const { isOpen } = useSidebar();
  
    return (
      <>
                <Navbar />
                <div className="flex flex-1 overflow-hidden">
              {/* Sidebar (Fixed height, only scrolls when hovered) */}
              <Sidebar />

              {/* Children (Main content should scroll independently) */}
              <div className="flex-1 overflow-hidden hover:overflow-scroll min-h-screen">{children}</div>
      </div>

      </>

    );
  }

  export default MainLayout