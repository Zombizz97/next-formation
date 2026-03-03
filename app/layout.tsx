import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import ScrollTop from "@/components/layout/ScrollTop";
import { Inter } from "next/font/google";
import "@/styles/globals.css";
import type { Metadata } from "next";

const inter = Inter({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Next Exo",
  description: "Next.js formation project",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined"
        />
      </head>
      <body className="bg-light">
        <div className={`flex flex-col min-h-dvh ${inter.className}`}>
          <Header />
          {children}
          <ScrollTop />
          <Footer />
        </div>
      </body>
    </html>
  );
}

