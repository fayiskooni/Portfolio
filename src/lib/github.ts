export interface Project {
  name: string;
  description: string;
  problem: string;
  solution: string;
  tech: string[];
  link: string;
  hostedOn?: string;
  images?: string[];
  featured?: boolean;
}

export const featuredProjects: Project[] = [
  {
    name: "Echo SaaS — AI Chat Widget",
    description: "Multi-tenant AI customer support SaaS with embeddable widgets.",
    problem: "Businesses need automated intelligent support that integrates into existing platforms without complex setup.",
    solution: "Built a RAG pipeline using Gemini text-embedding-004 generating 768-dimensional vectors, supporting 3 embed types (HTML, React, Next.js) via a JS snippet that injects a cross-origin iframe with postMessage communication. Tenant data is fully isolated by Clerk orgId.",
    tech: ["Next.js 15", "Convex", "Gemini", "Groq", "Clerk", "Stripe", "Vapi", "Turborepo", "TypeScript"],
    link: "https://echo-saas-web.vercel.app",
    hostedOn: "Vercel",
    images: ["/projects/echo-saas.png", "/projects/echo-saas-2.png", "/projects/echo-saas-3.png", "/projects/echo-saas-4.png", "/projects/echo-saas-5.png", "/projects/echo-saas-6.png"],
    featured: true,
  },
  {
    name: "Real-Time Language Exchange Platform",
    description: "Full-stack platform connecting language learners globally via chat and video.",
    problem: "Language learners need a way to find native speakers and practice in real time without switching between multiple tools.",
    solution: "Integrated Stream Chat and Stream Video SDKs with a custom Node.js backend generating secure per-user tokens. Authentication uses HttpOnly JWT cookies to prevent XSS-based token theft, with TanStack React Query managing server state and caching.",
    tech: ["React 19", "Node.js", "Express", "MongoDB", "Stream SDK", "JWT", "TanStack Query", "Zustand", "DaisyUI"],
    link: "https://livechat-videocallapp.onrender.com",
    hostedOn: "Render",
    images: ["/projects/video-chat.png", "/projects/video-chat-2.png", "/projects/video-chat-3.png", "/projects/video-chat-4.png", "/projects/video-chat-5.png"],
    featured: true,
  },
  {
    name: "Family Tree Generator",
    description: "Interactive genealogy platform with DAG-based tree visualization.",
    problem: "Visualizing complex family structures with multiple marriages and half-siblings requires careful data modeling and performant rendering.",
    solution: "Designed a 6-table normalized PostgreSQL schema with a dedicated parent_child table linking couple_id to child_id. Transformed flat relational records into a Directed Acyclic Graph using ELK.js layered layout algorithm rendered with React Flow, supporting vertical and horizontal navigation.",
    tech: ["React 19", "Node.js", "Express", "PostgreSQL", "React Flow", "ELK.js", "TanStack Query", "Zustand", "Shadcn UI"],
    link: "https://family-tree.fayiskooni.workers.dev/",
    hostedOn: "Cloudflare",
    images: ["/projects/family-tree.png", "/projects/family-tree-2.png", "/projects/family-tree-3.png", "/projects/family-tree-4.png", "/projects/family-tree-5.png", "/projects/family-tree-6.png"],
    featured: true,
  },
  {
    name: "Stock Market Dashboard",
    description: "Real-time stock tracking platform with AI-personalized daily digests.",
    problem: "Investors need a single place to track watchlisted stocks and receive personalized market summaries without manual research.",
    solution: "Built a real-time dashboard using TradingView widgets for live price charts and Finnhub API for stock search. Integrated Inngest background jobs with Gemini AI to send daily personalized email digests based on each user's watchlist.",
    tech: ["Next.js 15", "TypeScript", "MongoDB", "Finnhub API", "TradingView", "Inngest", "Gemini", "Nodemailer"],
    link: "https://stock-tacker-app.vercel.app",
    hostedOn: "Vercel",
    images: ["/projects/stock-market.png", "/projects/stock-market-2.png", "/projects/stock-market-3.png", "/projects/stock-market-4.png"],
    featured: false,
  },
];

export async function getProjects() {
  return featuredProjects;
}
