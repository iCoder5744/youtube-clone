import "@/app/globals.css";
import MainLayout from "@/components/MainLayout";
import { SidebarProvider } from "@/components/Sidebar/SidebarContext";

export const metadata = {
  title: "YouTube",
};

export default function RootLayout({ children }) {
  
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.png" sizes="any" type="image/png" />
      </head>
      <body>      
        <SidebarProvider>          
            <MainLayout>{children}</MainLayout>
        </SidebarProvider>
      </body>
    </html>
  );
}
