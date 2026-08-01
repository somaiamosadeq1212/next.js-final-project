import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SaveProvider from "./contexts/SaveContext";
import ToastProvider from "@/components/providers/ToastProvider";
import ThemeProvider from "@/components/providers/ThemeProvider";

export const metadata: Metadata = {
  title: "KaarYab Afghanistan",
  description: "Find jobs, internships, scholarships, and opportunities in Afghanistan",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en"
      suppressHydrationWarning>
      <body
        className="
            min-h-screen
            flex
            flex-col
            bg-background
            text-default
            transition-theme
        ">
          
        <ThemeProvider>
          <SaveProvider>
            <Navbar />

            <main className="flex-1 container mx-auto px-4 py-6">
              <ToastProvider />
              {children}
            </main>

            <Footer />
          </SaveProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}