"use client";

import { motion, HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

const sectionLabels: Record<string, string> = {
  values: "Expertise and Quality — Fayis K",
  work: "Projects by Fayis K",
  stack: "Technical Skills — Muhammed Fayis K",
  process: "Development Process — Fayis Kooni",
  about: "About Muhammed Fayis K (Fayis Kooni)",
  contact: "Contact Fayis K",
};

interface SectionProps extends HTMLMotionProps<"section"> {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

export const Section = ({ children, className, id, ...props }: SectionProps) => {
  return (
    <motion.section
      id={id}
      aria-label={id ? sectionLabels[id] : undefined}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={cn("py-20 md:py-32 px-6 max-w-7xl mx-auto w-full", className)}
      {...props}
    >
      {children}
    </motion.section>
  );
};
