import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SaveProvider from "./contexts/SaveContext";

export const metadata: Metadata = {
  title: "KaarYab Afghanistan",
  description: "Find jobs, internships, scholarships, and opportunities in Afghanistan",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return(
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <SaveProvider>
        <Navbar />

        <main className="flex-1 container mx-auto px-4 py-6">
          {children}
        </main>

        <Footer />
        </SaveProvider>
      </body>
    </html>
  );
}



// import type { Metadata } from "next";
// import "./globals.css";

// export const metadata: Metadata = {
//   title: "Test",
//   description: "Test",
// };

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <html lang="en">
//       <body>{children}</body>
//     </html>
//   );
// }