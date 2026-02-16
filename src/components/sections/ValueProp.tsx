"use client";

import { Section } from "@/components/Section";
import { Layers, ShieldCheck, Palette } from "lucide-react";
import { motion } from "framer-motion";

const values = [
  {
    title: "Scalable Architecture",
    description: "Clean backend structure using modern frameworks and database optimization for high-performance systems.",
    icon: <Layers size={24} className="text-accent" />,
  },
  {
    title: "Secure Auth Systems",
    description: "Experience building robust identity management using NextAuth and modern security best practices.",
    icon: <ShieldCheck size={24} className="text-blue-500" />,
  },
  {
    title: "Premium UI Systems",
    description: "Design-focused development with glassmorphism, smooth animations, and high-end interaction patterns.",
    icon: <Palette size={24} className="text-pink-500" />,
  },
];

export const ValueProp = () => {
  return (
    <Section id="values" className="bg-transparent">
      <div className="text-center mb-20">
        <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">Expertise & Quality</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
          I combine technical depth with design precision to deliver 
          exceptional digital products that scale.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {values.map((v, i) => (
          <motion.div
            key={i}
            whileHover={{ y: -10 }}
            className="p-8 glass-card rounded-3xl"
          >
            <div className="w-12 h-12 rounded-2xl glass mb-6 flex items-center justify-center border-white/10">
              {v.icon}
            </div>
            <h3 className="text-xl font-bold mb-4">{v.title}</h3>
            <p className="text-muted-foreground leading-relaxed">
              {v.description}
            </p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};
