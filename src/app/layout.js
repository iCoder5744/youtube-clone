

// app/layout.js
import "@/app/globals.css";
import MainLayout from "@/components/MainLayout";
import Providers from "@/components/Providers"

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

          <Providers>
            <MainLayout>{children}</MainLayout>
          </Providers>

      </body>
    </html>
  );
}