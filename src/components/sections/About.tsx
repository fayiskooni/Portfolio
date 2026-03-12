"use client";

import { Section } from "@/components/Section";
import { motion } from "framer-motion";

const stats = [
  { value: "4 Live", label: "Projects Deployed" },
  { value: "3+", label: "SaaS & Full-Stack Apps" },
  { value: "RAG +", label: "Real-Time Systems" },
  { value: "Full-Stack", label: "(React to PostgreSQL)" },
];

export const About = () => {
  return (
    <Section id="about" className="overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="relative">
          <div className="absolute -top-20 -left-20 w-64 h-64 bg-accent/10 rounded-full blur-3xl -z-10" />
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-8">Engineering with <br /><span className="text-accent italic">Precision & Speed</span></h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            Muhammed Fayis K is a Full-Stack Developer with hands-on experience building 
            production-ready web applications and SaaS platforms. With a strong background 
            in React, Next.js, Node.js, and TypeScript, he has a proven ability to deliver 
            scalable, secure, end-to-end applications.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-8">
            His expertise spans across RESTful APIs, real-time systems using WebSockets, 
            and AI-powered features like RAG pipelines. He focuses on creating 
            seamless user experiences backed by robust, optimized infrastructure.
          </p>
          
          <div className="p-6 glass rounded-2xl border border-white/5">
            <h4 className="text-xs font-bold text-accent uppercase tracking-widest mb-3">Education</h4>
            <div className="flex justify-between items-start">
              <div>
                <p className="font-bold">Bharathidasan University (BDU)</p>
                <p className="text-sm text-muted-foreground">Bachelor of Arts (BA), English</p>
              </div>
              <span className="text-sm font-medium text-accent">2022 — 2025</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card p-5 rounded-2xl text-center flex flex-col justify-center"
            >
              <div className="text-2xl font-display font-bold text-white mb-1">{stat.value}</div>
              <div className="text-[10px] font-bold text-accent uppercase tracking-widest leading-relaxed">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
};
