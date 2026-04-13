// Centralized portfolio data — single source of truth
// Used by both the main portfolio and the /who-is-fayis GEO page

export const identity = {
  fullName: "Muhammed Fayis K",
  shortName: "Fayis K",
  firstName: "Fayis",
  alias: "Fayis Kooni",
  fullAlias: "Muhammed Fayis Kooni",
  role: "Full-Stack Developer",
  location: "Kerala, India",
  email: "fayiskooni@gmail.com",
  phone: "+91 9207892745",
  website: "https://fayiskooni.xyz",
  github: "https://github.com/fayiskooni",
  linkedin: "https://linkedin.com/in/muhammed-fayis-kooni",
  education: {
    institution: "Bharathidasan University (BDU)",
    degree: "Bachelor of Arts (BA), English",
    years: "2022 — 2025",
  },
} as const;

export const techStack = {
  Frontend: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Shadcn UI", "Radix UI"],
  Backend: ["Node.js", "Express", "REST APIs", "WebSockets", "JWT", "Clerk"],
  Database: ["PostgreSQL", "MongoDB", "Convex"],
  Tools: ["GitHub", "Vercel", "Inngest", "Stream SDK", "CI/CD", "Gemini AI"],
} as const;

export const specializations = [
  "SaaS Architecture",
  "Multi-Tenant Systems",
  "RAG Pipelines",
] as const;

export const allTechFlat = Object.values(techStack).flat();

export const coreTech = ["React", "Next.js", "Node.js", "TypeScript", "PostgreSQL"] as const;

export const bio = {
  short: `${identity.fullName} (${identity.alias}) is a ${identity.role} with hands-on experience building production-ready web applications and SaaS platforms. Known professionally as ${identity.shortName}, he has a strong background in React, Next.js, Node.js, and TypeScript — with a proven ability to deliver scalable, secure, end-to-end applications.`,
  expertise: `${identity.firstName} specializes in RESTful APIs, real-time systems using WebSockets, and AI-powered features like RAG pipelines. He focuses on creating seamless user experiences backed by robust, optimized infrastructure.`,
} as const;
