"use client";

import { Section } from "@/components/Section";
import { motion } from "framer-motion";

const stack = {
  Frontend: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Shadcn UI", "Radix UI"],
  Backend: ["Node.js", "Express", "REST APIs", "WebSockets", "JWT", "Clerk"],
  Database: ["PostgreSQL", "MySQL", "MongoDB", "Convex", "Redis"],
  Tools: ["GitHub", "Vercel", "Inngest", "Stream SDK", "CI/CD", "Gemini AI"],
};

export const TechStack = () => {
  return (
    <Section id="stack">
      <div className="text-center mb-20">
        <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">Technical Arsenal</h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          Expertise in building scalable, real-time, and AI-powered systems using modern industry standards.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {Object.entries(stack).map(([category, items], i) => (
          <motion.div
            key={category}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="p-1 px-1 rounded-3xl group"
          >
            <div className="h-full glass-card rounded-3xl p-8 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <h3 className="text-sm font-bold text-accent uppercase tracking-widest mb-8">{category}</h3>
              <div className="flex flex-col gap-4">
                {items.map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent/40" />
                    <span className="text-muted-foreground hover:text-foreground transition-colors cursor-default">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-20 p-8 glass-card border-dashed border-white/10 rounded-3xl text-center">
        <p className="text-sm text-muted-foreground">
          Specialized in <span className="text-accent underline">SaaS Architecture</span>, <span className="text-accent underline">Multi-Tenant Systems</span> & <span className="text-accent underline">RAG Pipelines</span>
        </p>
      </div>
    </Section>
  );
};
