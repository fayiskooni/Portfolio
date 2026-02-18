import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import { ScrollProgress } from "@/components/ScrollProgress";
import { BackToTop } from "@/components/BackToTop";
import { Toaster } from "sonner";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-display",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Muhammed Fayis K | Full-Stack Developer",
  description: "Muhammed Fayis K is a Full-Stack Developer specializing in building scalable SaaS platforms, real-time systems, and AI-powered web applications.",
  keywords: ["Muhammed Fayis K", "Fayis K", "Full Stack Developer", "Next.js", "React", "Node.js", "SaaS Developer"],
  authors: [{ name: "Muhammed Fayis K" }],
  openGraph: {
    title: "Muhammed Fayis K | Full-Stack Developer",
    description: "Full-Stack Developer crafting scalable & visually refined digital products.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${outfit.variable} font-sans antialiased`}
      >
        <ScrollProgress />
        {children}
        <BackToTop />
        <Toaster position="bottom-right" theme="dark" />
      </body>
    </html>
  );
}
