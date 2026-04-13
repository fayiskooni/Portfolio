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
  metadataBase: new URL("https://fayiskooni.xyz"),
  title: "Fayis K (Muhammed Fayis K) | Full-Stack Developer — Fayis Kooni",
  description:
    "Fayis K, also known as Muhammed Fayis K or Fayis Kooni, is a Full-Stack Developer specializing in scalable SaaS platforms, real-time systems, and AI-powered web applications using React, Next.js, and Node.js.",
  keywords: [
    "Fayis",
    "Fayis K",
    "Muhammed Fayis K",
    "Fayis Kooni",
    "Muhammed Fayis Kooni",
    "fayiskooni",
    "Full Stack Developer",
    "Full-Stack Developer",
    "Next.js Developer",
    "React Developer",
    "Node.js Developer",
    "SaaS Developer",
    "Web Developer Kerala",
    "Fayis Developer",
    "Fayis K Portfolio",
  ],
  authors: [{ name: "Muhammed Fayis K", url: "https://fayiskooni.xyz" }],
  creator: "Muhammed Fayis K",
  publisher: "Muhammed Fayis K",
  alternates: {
    canonical: "https://fayiskooni.xyz",
  },
  verification: {
    google: "googleca125da0d0bd82f6",
  },
  openGraph: {
    title: "Fayis K (Muhammed Fayis K) — Full-Stack Developer | Fayis Kooni",
    description:
      "Fayis K is a Full-Stack Developer crafting scalable SaaS platforms and AI-powered web applications. Explore the portfolio of Muhammed Fayis K (Fayis Kooni).",
    url: "https://fayiskooni.xyz",
    siteName: "Fayis K — Muhammed Fayis K Portfolio",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/cover-new.png",
        width: 1200,
        height: 630,
        alt: "Fayis K — Muhammed Fayis K, Full-Stack Developer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Fayis K (Muhammed Fayis K) — Full-Stack Developer | Fayis Kooni",
    description:
      "Full-Stack Developer crafting scalable SaaS platforms & AI-powered web apps. Portfolio of Fayis Kooni (Muhammed Fayis K).",
    images: ["/cover-new.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  other: {
    "google-site-name": "Fayis K — Full-Stack Developer",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": "https://fayiskooni.xyz/#person",
    name: "Muhammed Fayis K",
    alternateName: ["Fayis", "Fayis K", "Fayis Kooni", "Muhammed Fayis Kooni"],
    givenName: "Muhammed Fayis",
    familyName: "K",
    jobTitle: "Full Stack Developer",
    description:
      "Fayis K is a Full-Stack Developer specializing in building scalable SaaS platforms, real-time systems, and AI-powered web applications.",
    url: "https://fayiskooni.xyz",
    email: "fayiskooni@gmail.com",
    telephone: "+919207892745",
    image: "https://fayiskooni.xyz/cover-new.png",
    sameAs: [
      "https://github.com/fayiskooni",
      "https://linkedin.com/in/muhammed-fayis-kooni",
    ],
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: "Bharathidasan University",
      alternateName: "BDU",
    },
    knowsAbout: [
      "React",
      "Next.js",
      "Node.js",
      "TypeScript",
      "PostgreSQL",
      "Prisma",
      "REST APIs",
      "WebSockets",
      "AI-powered applications",
      "SaaS Development",
      "Full Stack Development",
    ],
    knowsLanguage: ["en", "ml"],
  };

  const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://fayiskooni.xyz/#website",
    name: "Fayis K — Muhammed Fayis K Portfolio",
    alternateName: ["Fayis Kooni Portfolio", "Fayis K Portfolio"],
    url: "https://fayiskooni.xyz",
    description:
      "Official portfolio of Fayis K (Muhammed Fayis K), a Full-Stack Developer building scalable SaaS platforms and AI-powered web applications.",
    publisher: {
      "@id": "https://fayiskooni.xyz/#person",
    },
  };

  const profilePageJsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    "@id": "https://fayiskooni.xyz/#profilepage",
    name: "Fayis K — Full-Stack Developer Portfolio",
    url: "https://fayiskooni.xyz",
    mainEntity: {
      "@id": "https://fayiskooni.xyz/#person",
    },
    dateCreated: "2025-01-01",
    dateModified: new Date().toISOString().split("T")[0],
    about: {
      "@id": "https://fayiskooni.xyz/#person",
    },
    isPartOf: {
      "@id": "https://fayiskooni.xyz/#website",
    },
  };

  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${outfit.variable} font-sans antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(profilePageJsonLd) }}
        />
        <ScrollProgress />
        {children}
        <BackToTop />
        <Toaster position="bottom-right" theme="dark" />
      </body>
    </html>
  );
}
