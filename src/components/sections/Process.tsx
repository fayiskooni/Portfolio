"use client";

import { Section } from "@/components/Section";
import { motion } from "framer-motion";

const steps = [
  {
    num: "01",
    title: "Problem Understanding",
    desc: "Deep diving into business goals and user pain points to establish a solid foundation.",
  },
  {
    num: "02",
    title: "System Architecture Planning",
    desc: "Designing scalable database schemas and efficient API structures for long-term growth.",
  },
  {
    num: "03",
    title: "UI System Design",
    desc: "Crafting a cohesive design language that ensures accessibility, consistency, and premium aesthetics.",
  },
  {
    num: "04",
    title: "Development & Integration",
    desc: "Writing clean, type-safe code and integrating components into a seamless product.",
  },
  {
    num: "05",
    title: "Performance Optimization",
    desc: "Fine-tuning Core Web Vitals, image delivery, and server-side performance for 100/100 scores.",
  },
  {
    num: "06",
    title: "Deployment & Scaling",
    desc: "CI/CD setup and infrastructure monitoring to ensure maximum uptime and reliability.",
  },
];

export const Process = () => {
  return (
    <Section id="process">
      <div className="text-center mb-20">
        <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">Strategic Process</h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          How I bridge the gap between abstract ideas and market-ready digital products.
        </p>
      </div>

      <div className="relative border-l border-white/10 ml-4 md:ml-0 md:border-l-0 md:grid md:grid-cols-3 md:gap-y-16">
        {steps.map((step, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="relative pl-12 md:pl-0 md:pr-12 last:mb-0 mb-16 md:mb-0"
          >
            {/* Desktop Dot */}
            <div className="absolute left-[-5px] top-0 w-[11px] h-[11px] rounded-full bg-accent md:hidden" />
            
            <div className="text-5xl font-display font-black text-white/5 mb-4 group-hover:text-accent/10 transition-colors">
              {step.num}
            </div>
            <h3 className="text-xl font-bold mb-4">{step.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-xs transition-colors hover:text-foreground">
              {step.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};
