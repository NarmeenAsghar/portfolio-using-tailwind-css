import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/main/Navbar";
import Skills from "@/components/main/Skills";
import Projects from "@/components/main/Projects";
import Footer from "@/components/main/Footer";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Portfolio",
  description: "This is Portfolio ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#030014] overflow-y-scroll overflow-x-hidden`}
      >
        <Navbar />
        {children}
        <Skills />
        <Projects />
        <Footer />
      </body>
    </html>
  );
}
