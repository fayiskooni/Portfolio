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
  metadataBase: new URL('https://fayiskooni.xyz'),
  title: "Muhammed Fayis K | Full-Stack Developer",
  description: "Fayis is a Full-Stack Developer specializing in building scalable SaaS platforms, real-time systems, and AI-powered web applications.",
  keywords: ["Muhammed Fayis K", "Full Stack Developer", "Next.js", "React", "Node.js", "SaaS Developer"],
  authors: [{ name: "Muhammed Fayis K" }],
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Muhammed Fayis K | Full-Stack Developer",
    description: "Full-Stack Developer crafting scalable & visually refined digital products.",
    url: 'https://fayiskooni.xyz',
    siteName: 'Muhammed Fayis K Portfolio',
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: 'summary_large_image',
    title: "Muhammed Fayis K | Full-Stack Developer",
    description: 'Full-Stack Developer crafting scalable & visually refined digital products.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Muhammed Fayis K",
    "jobTitle": "Full Stack Developer",
    "url": "https://fayiskooni.xyz"
  };

  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${outfit.variable} font-sans antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <ScrollProgress />
        {children}
        <BackToTop />
        <Toaster position="bottom-right" theme="dark" />
      </body>
    </html>
  );
}
