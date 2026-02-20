"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-20 right-[-10%] w-[40%] h-[40%] bg-accent/20 rounded-full blur-[120px] -z-10 animate-pulse-slow" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-500/10 rounded-full blur-[120px] -z-10" />

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative z-10"
        >
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-block px-4 py-1.5 rounded-full glass border border-white/10 text-xs font-semibold tracking-wider uppercase text-accent mb-6"
          >
            Available for new projects
          </motion.span>
          
          <h1 className="text-5xl md:text-7xl font-display font-bold leading-[1.1] mb-8 tracking-tight">
            <span className="block text-xl md:text-2xl text-accent mb-4 font-semibold uppercase tracking-widest">Fayis Kooni</span>
            Full-Stack Developer <br />
            <span className="text-muted-foreground italic font-medium">Building Scalable</span> <br />
            SaaS Platforms
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-xl mb-10 leading-relaxed font-light">
            I specialize in building production-ready web applications with 
            React, Next.js, and Node.js, delivering scalable, secure, and AI-powered 
            digital experiences.
          </p>

          <div className="flex flex-wrap gap-4">
            <motion.a
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href="#work"
              className="group flex items-center gap-2 px-8 py-4 rounded-full accent-gradient text-white font-semibold hover:shadow-[0_0_30px_rgba(139,92,246,0.5)] transition-all duration-300"
            >
              View My Work
              <ArrowUpRight size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </motion.a>
            
            <motion.a
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href="#contact"
              className="px-8 py-4 rounded-full glass border border-white/10 text-foreground font-semibold hover:bg-white/5 transition-all duration-300"
            >
              Let's Build Something
            </motion.a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: 10 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          className="relative hidden lg:block"
        >
          <div className="relative w-full aspect-square max-w-md mx-auto">
            {/* Abstract 3D Element (CSS based) */}
            <div className="absolute inset-0 bg-gradient-to-tr from-accent to-blue-500 rounded-[30% 70% 70% 30% / 30% 30% 70% 70%] opacity-20 blur-2xl animate-pulse-slow" />
            
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 border-[1px] border-white/5 rounded-full"
            />
            
            <motion.div 
              animate={{ rotate: -360 }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              className="absolute inset-4 border-[1px] border-white/10 rounded-full"
            />

            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-64 h-64 glass-card rounded-3xl flex items-center justify-center overflow-hidden border-white/20 shadow-2xl skew-x-3 skew-y-3">
                <div className="w-full h-full p-6 font-mono text-sm overflow-hidden">
                  <div className="text-accent mb-2">export const Portfolio = () ={">"} (</div>
                  <div className="pl-4 text-blue-400">{"<ProductDesign>"}</div>
                  <div className="pl-8 text-foreground">{"<UserExperience />"}</div>
                  <div className="pl-8 text-foreground">{"<ScalableSystem />"}</div>
                  <div className="pl-4 text-blue-400">{"</ProductDesign>"}</div>
                  <div className="text-accent">);</div>
                  
                  <div className="mt-8 text-muted-foreground opacity-50">
                    {"// Performance optimized"}
                    {"\n// 100 Lighthouse score"}
                  </div>
                </div>
              </div>
            </div>
            
            {/* floating elements */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute top-10 right-10 p-3 glass rounded-xl border-white/10"
            >
              <div className="w-3 h-3 rounded-full bg-green-500" />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
