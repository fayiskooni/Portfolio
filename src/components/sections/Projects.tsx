"use client";

import { useState } from "react";
import { Section } from "@/components/Section";
import { featuredProjects, Project } from "@/lib/github";
import { motion, AnimatePresence } from "framer-motion";
import { Github, ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";

const ProjectCard = ({ project, index }: { project: Project; index: number }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = project.images || [];

  const nextImage = (e: React.MouseEvent) => {
    e.preventDefault();
    if (currentImageIndex < images.length - 1) {
      setCurrentImageIndex(currentImageIndex + 1);
    }
  };

  const prevImage = (e: React.MouseEvent) => {
    e.preventDefault();
    if (currentImageIndex > 0) {
      setCurrentImageIndex(currentImageIndex - 1);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="flex flex-col lg:flex-row gap-12 items-center group"
    >
      {/* Project Image/Preview */}
      <div className="w-full lg:w-1/2 aspect-video glass rounded-3xl overflow-hidden relative border border-white/10 transition-colors group-hover:border-accent/30">
        <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity z-10 pointer-events-none" />
        
        {images.length > 0 ? (
          <div className="relative w-full h-full overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.img
                key={currentImageIndex}
                src={images[currentImageIndex]}
                alt={`${project.name} ${currentImageIndex + 1}`}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="w-full h-full object-cover"
              />
            </AnimatePresence>

            {/* Navigation Buttons */}
            {images.length > 1 && (
              <div className="absolute inset-0 flex items-center justify-between px-4 z-20">
                <div className="flex gap-2 w-full justify-between items-center">
                  {currentImageIndex > 0 ? (
                    <button
                      onClick={prevImage}
                      className="p-2 rounded-full glass border border-white/10 text-white hover:bg-accent hover:border-accent transition-all shadow-xl"
                    >
                      <ChevronLeft size={24} />
                    </button>
                  ) : <div />}

                  {currentImageIndex < images.length - 1 ? (
                    <button
                      onClick={nextImage}
                      className="p-2 rounded-full glass border border-white/10 text-white hover:bg-accent hover:border-accent transition-all shadow-xl"
                    >
                      <ChevronRight size={24} />
                    </button>
                  ) : <div />}
                </div>
              </div>
            )}
            
            {/* Dots indicator */}
            {images.length > 1 && (
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5 z-20">
                {images.map((_, i) => (
                  <div
                    key={i}
                    className={`w-1.5 h-1.5 rounded-full transition-all ${
                      i === currentImageIndex ? "bg-accent w-4" : "bg-white/30"
                    }`}
                  />
                ))}
              </div>
            )}
          </div>
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-[#0a0a0a]">
            {/* Abstract project placeholder */}
            <div className="relative w-2/3 h-2/3 flex flex-col gap-4">
               <div className="h-8 w-1/3 bg-white/5 rounded-lg" />
               <div className="flex-1 w-full bg-white/5 rounded-xl border border-white/10 p-4">
                  <div className="w-1/2 h-4 bg-accent/20 rounded mb-2" />
                  <div className="w-full h-4 bg-white/10 rounded mb-2" />
                  <div className="w-3/4 h-4 bg-white/10 rounded" />
               </div>
            </div>
          </div>
        )}
      </div>

      {/* Project Details */}
      <div className="w-full lg:w-1/2">
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tech.map((t) => (
            <span key={t} className="px-3 py-1 bg-white/5 rounded-full text-[10px] font-bold tracking-widest uppercase text-muted-foreground border border-white/5">
              {t}
            </span>
          ))}
        </div>
        <h3 className="text-3xl md:text-4xl font-display font-bold mb-6">{project.name}</h3>
        
        <div className="space-y-6 mb-8">
          <div>
            <h4 className="text-xs font-bold text-accent uppercase tracking-widest mb-1">Problem</h4>
            <p className="text-muted-foreground leading-relaxed">{project.problem}</p>
          </div>
          <div>
            <h4 className="text-xs font-bold text-accent uppercase tracking-widest mb-1">Solution</h4>
            <p className="text-muted-foreground leading-relaxed">{project.solution}</p>
          </div>
        </div>

        <div className="flex flex-wrap gap-4 items-center">
          <a 
            href={project.link} 
            target="_blank"
            className="flex items-center gap-2 px-8 py-4 rounded-full bg-foreground text-background font-bold text-sm hover:scale-105 transition-transform"
          >
            Live Preview <ExternalLink size={16} />
          </a>
          {project.hostedOn && (
            <div className="flex items-center gap-2 px-5 py-3 rounded-full border border-white/10 glass text-xs font-semibold text-muted-foreground">
              Hosted on <span className="text-accent">{project.hostedOn}</span>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export const Projects = () => {
  return (
    <Section id="work">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
        <div>
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">My Works</h2>
          <p className="text-muted-foreground text-lg max-w-xl">
            A collection of digital products where design meets technical excellence.
          </p>
        </div>
        <a 
          href="https://github.com/fayiskooni" 
          target="_blank" 
          className="flex items-center gap-2 text-accent font-semibold hover:underline"
        >
          View GitHub <Github size={18} />
        </a>
      </div>

      <div className="space-y-24">
        {featuredProjects.map((project, i) => (
          <ProjectCard key={i} project={project} index={i} />
        ))}
      </div>
    </Section>
  );
};
