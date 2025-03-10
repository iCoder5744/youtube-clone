"use client";

import { SidebarProvider } from "@/components/Sidebar/SidebarContext";
import { SessionProvider } from "next-auth/react";



export default function Providers({ children }) {
    return (


            <SessionProvider>
                <SidebarProvider>
                    {children}
                </SidebarProvider>
            </SessionProvider>


    );
}