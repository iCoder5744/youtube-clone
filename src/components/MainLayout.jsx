"use client";

import Navbar from "./Navbar";
import Sidebar from "./Sidebar/Sidebar";
import { useSidebar } from "./Sidebar/SidebarContext";

function MainLayout({ children }) {
  const { isOpen } = useSidebar(); // Get sidebar state

  return (
    <>
      <Navbar />
      <div className="flex">
        {/* Sidebar (Fixed, dynamic width based on toggle state) */}
        <div>
          <Sidebar />
        </div>

        {/* Main Content (Adjust margin dynamically) */}
        <div
          className={`flex-1 overflow-y-auto mt-14 min-h-screen transition-all duration-300 w-full ${
            isOpen ? "md:ml-[220px]"  : "sm:ml-[80px]"
          }`}
        >
          {children}
        </div>
      </div>
    </>
  );
}

export default MainLayout;