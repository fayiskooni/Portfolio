export interface Project {
  name: string;
  description: string;
  problem: string;
  solution: string;
  tech: string[];
  link: string;
  images?: string[];
  featured?: boolean;
}

export const featuredProjects: Project[] = [
  {
    name: "Echo SaaS — AI Chat Widget",
    description: "Multi-tenant AI customer support SaaS with embeddable widgets.",
    problem: "Businesses need automated, intelligent support that integrates seamlessly into existing platforms without complex setup.",
    solution: "Built a RAG-powered AI platform using Gemini AI and Convex, featuring voice chat, file uploads, and a multi-tenant admin dashboard.",
    tech: ["Next.js", "Convex", "Gemini AI", "Clerk", "TypeScript"],
    link: "https://echo-saas-web.vercel.app",
    images: ["/projects/echo-saas.png", "/projects/echo-saas-2.png", "/projects/echo-saas-3.png","/projects/echo-saas-4.png","/projects/echo-saas-5.png","/projects/echo-saas-6.png"],
    featured: true,
  },
  {
    name: "Real-Time Video & Chat",
    description: "High-performance communication platform for teams.",
    problem: "Real-time communication requires low latency and high scalability for concurrent video and chat sessions.",
    solution: "Integrated Stream SDKs with Node.js to support up to 20 concurrent participants with presence indicators and call controls.",
    tech: ["Node.js", "React", "MongoDB", "Stream SDK", "Express"],
    link: "https://livechat-videocallapp.onrender.com",
    images: ["/projects/video-chat.png","/projects/video-chat-2.png","/projects/video-chat-3.png","/projects/video-chat-4.png","/projects/video-chat-5.png"],
    featured: true,
  },
  {
    name: "Family Tree Generator",
    description: "Interactive lineage visualization tool.",
    problem: "Visualizing complex family structures requires efficient data modeling and high-performance rendering.",
    solution: "Architected a PostgreSQL-backed system supporting 100+ members per tree with automated lineage visualization and <300ms query times.",
    tech: ["React", "PostgreSQL", "Node.js", "Tailwind CSS"],
    link: "https://family-tree.fayiskooni.workers.dev/",
    images: ["/projects/family-tree.png","/projects/family-tree-2.png","/projects/family-tree-3.png","/projects/family-tree-4.png","/projects/family-tree-5.png","/projects/family-tree-6.png"],
    featured: true,
  },
  {
    name: "Stock Market Dashboard",
    description: "Real-time financial data visualization.",
    problem: "Monitoring thousands of tickers in real-time requires optimized server actions and efficient frontend rendering.",
    solution: "Developed a live dashboard for 1,000+ tickers with role-based access control and 30% faster page loads via React Server Components.",
    tech: ["Next.js", "TypeScript", "MongoDB", "Tailwind CSS"],
    link: "#",
    images: ["/projects/stock-market.png"],
    featured: false,
  },
];

export async function getProjects() {
  return featuredProjects;
}
