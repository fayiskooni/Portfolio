import type { Metadata } from "next";
import { identity, techStack, coreTech, specializations, bio, allTechFlat } from "@/lib/data";
import { featuredProjects } from "@/lib/github";

const pageTitle = `Who is ${identity.shortName}? | ${identity.fullName} — ${identity.role}`;
const pageDescription = `${identity.firstName} (${identity.fullName}), also known as ${identity.alias}, is a ${identity.role} from ${identity.location} specializing in ${coreTech.join(", ")}.`;

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: {
    canonical: "https://fayiskooni.xyz/who-is-fayis",
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "https://fayiskooni.xyz/who-is-fayis",
    type: "article",
    images: [{ url: "/cover-new.png", width: 1200, height: 630 }],
  },
};

// FAQ data — reused for both HTML rendering and JSON-LD schema
const faqData = [
  {
    question: `Who is ${identity.firstName}?`,
    answer: `${identity.firstName} (${identity.fullName}), also known as ${identity.alias}, is a ${identity.role} from ${identity.location}. He specializes in building scalable SaaS platforms, real-time systems, and AI-powered web applications using ${coreTech.join(", ")}.`,
  },
  {
    question: `What does ${identity.shortName} do?`,
    answer: `${identity.shortName} builds production-ready web applications and SaaS platforms. His work includes ${featuredProjects.map((p) => p.name).join(", ")}. He specializes in ${specializations.join(", ")}.`,
  },
  {
    question: `What technologies does ${identity.firstName} use?`,
    answer: `${identity.firstName} works with ${allTechFlat.slice(0, 10).join(", ")}, and more. His frontend stack includes ${techStack.Frontend.join(", ")}, while his backend expertise covers ${techStack.Backend.join(", ")}.`,
  },
  {
    question: `Where can I see ${identity.alias}'s projects?`,
    answer: `You can view ${identity.alias}'s projects on his portfolio at ${identity.website} or on GitHub at ${identity.github}. His featured projects include ${featuredProjects.filter((p) => p.featured).map((p) => p.name).join(", ")}.`,
  },
  {
    question: `How can I contact ${identity.shortName}?`,
    answer: `You can reach ${identity.shortName} via email at ${identity.email}, through LinkedIn at ${identity.linkedin}, or through the contact form on his portfolio website.`,
  },
];

export default function WhoIsFayisPage() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqData.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: `Who is ${identity.shortName}? — ${identity.fullName} (${identity.alias})`,
    description: pageDescription,
    author: {
      "@id": "https://fayiskooni.xyz/#person",
    },
    publisher: {
      "@id": "https://fayiskooni.xyz/#person",
    },
    mainEntityOfPage: "https://fayiskooni.xyz/who-is-fayis",
    datePublished: "2025-01-01",
    dateModified: new Date().toISOString().split("T")[0],
  };

  const featuredProjectsList = featuredProjects.filter((p) => p.featured);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />

      <main className="min-h-screen bg-[#030303] text-[#f8fafc] px-6 py-20">
        <article className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-8 tracking-tight">
            Who is {identity.firstName}?
          </h1>

          {/* Direct answer paragraph — critical for AI extraction */}
          <p className="text-lg text-[#94a3b8] leading-relaxed mb-12">
            {identity.firstName} ({identity.fullName}), also known as{" "}
            {identity.alias}, is a {identity.role} from {identity.location}. He
            specializes in {coreTech.join(", ")} and focuses on building scalable
            SaaS platforms, real-time systems, and AI-powered web applications.
          </p>

          {/* About section — reuses bio from shared data */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">
              About {identity.shortName}
            </h2>
            <p className="text-[#94a3b8] leading-relaxed mb-4">{bio.short}</p>
            <p className="text-[#94a3b8] leading-relaxed">{bio.expertise}</p>
          </section>

          {/* Education */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Education</h2>
            <p className="text-[#94a3b8] leading-relaxed">
              {identity.fullName} holds a {identity.education.degree} from{" "}
              {identity.education.institution} ({identity.education.years}).
            </p>
          </section>

          {/* Technologies — dynamically rendered from shared data */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6">
              Technologies {identity.firstName} Uses
            </h2>
            <div className="space-y-4">
              {Object.entries(techStack).map(([category, items]) => (
                <div key={category}>
                  <h3 className="text-sm font-bold text-[#8b5cf6] uppercase tracking-widest mb-2">
                    {category}
                  </h3>
                  <p className="text-[#94a3b8]">{items.join(", ")}</p>
                </div>
              ))}
            </div>
            <p className="text-[#94a3b8] mt-4">
              He also specializes in {specializations.join(", ")}.
            </p>
          </section>

          {/* Projects — dynamically rendered from existing project data */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6">
              Projects by {identity.shortName}
            </h2>
            <div className="space-y-6">
              {featuredProjectsList.map((project) => (
                <div key={project.name}>
                  <h3 className="text-xl font-semibold mb-2">{project.name}</h3>
                  <p className="text-[#94a3b8] leading-relaxed mb-2">
                    {project.description} {project.problem}
                  </p>
                  <p className="text-sm text-[#64748b]">
                    Built with: {project.tech.join(", ")}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* FAQ section */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6">
              Frequently Asked Questions
            </h2>
            <div className="space-y-6">
              {faqData.map((faq, i) => (
                <div key={i}>
                  <h3 className="text-lg font-semibold mb-2">
                    {faq.question}
                  </h3>
                  <p className="text-[#94a3b8] leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Back to portfolio link */}
          <nav className="pt-8 border-t border-white/10">
            <a
              href="/"
              className="text-[#8b5cf6] hover:underline font-medium"
            >
              ← Back to Portfolio
            </a>
          </nav>

          {/* Author attribution */}
          <footer className="mt-12 pt-8 border-t border-white/10 text-sm text-[#64748b]">
            <p>
              Written by {identity.fullName} ({identity.alias}) —{" "}
              <a href={identity.website} className="text-[#8b5cf6] hover:underline">
                {identity.website}
              </a>
            </p>
          </footer>
        </article>
      </main>
    </>
  );
}
