"use client";

import { useRef, useState } from "react";
import { Section } from "@/components/Section";
import { Github, Linkedin, Mail, Send, Phone } from "lucide-react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { toast } from "sonner";

export const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    setIsLoading(true);

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "",
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "",
        formRef.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || ""
      )
      .then(
        () => {
          setIsLoading(false);
          toast.success("Message sent successfully!");
          formRef.current?.reset();
        },
        (error) => {
          setIsLoading(false);
          console.error(error);
          toast.error("Failed to send message. Please try again.");
        }
      );
  };

  return (
    <Section id="contact">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
        <div>
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-8">Let's build <br />the future.</h2>
          <p className="text-xl text-muted-foreground mb-12">
            Have an idea for a project or looking for a full-stack developer 
            to join your team? I'm always open to discussing new opportunities.
          </p>

          <div className="space-y-6">
            <a href="mailto:fayiskooni@gmail.com" className="flex items-center gap-4 text-lg hover:text-accent transition-colors group">
              <div className="w-12 h-12 glass rounded-2xl flex items-center justify-center group-hover:bg-accent/10">
                <Mail size={20} />
              </div>
              fayiskooni@gmail.com
            </a>
            <a href="tel:+919207892745" className="flex items-center gap-4 text-lg hover:text-accent transition-colors group">
              <div className="w-12 h-12 glass rounded-2xl flex items-center justify-center group-hover:bg-accent/10">
                <Phone size={20} />
              </div>
              +91 9207892745
            </a>
            <a href="https://github.com/fayiskooni" target="_blank" className="flex items-center gap-4 text-lg hover:text-accent transition-colors group">
              <div className="w-12 h-12 glass rounded-2xl flex items-center justify-center group-hover:bg-accent/10">
                <Github size={20} />
              </div>
              github.com/fayiskooni
            </a>
            <a href="https://linkedin.com/in/muhammed-fayis-kooni" target="_blank" className="flex items-center gap-4 text-lg hover:text-accent transition-colors group">
              <div className="w-12 h-12 glass rounded-2xl flex items-center justify-center group-hover:bg-accent/10">
                <Linkedin size={20} />
              </div>
              linkedin.com/in/muhammed-fayis-kooni
            </a>
          </div>
        </div>

        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="glass-card p-10 rounded-[2.5rem] relative"
        >
          <form ref={formRef} className="space-y-6" onSubmit={handleSubmit}>
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground ml-1">Your Name</label>
              <input 
                type="text" 
                name="name"
                placeholder="John Doe" 
                className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-accent transition-colors text-foreground"
                required
              />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground ml-1">Email Address</label>
              <input 
                type="email" 
                name="user_email"
                placeholder="john@example.com" 
                className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-accent transition-colors text-foreground"
                required
              />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground ml-1">Message</label>
              <textarea 
                rows={4} 
                name="message"
                placeholder="Tell me about your project..." 
                className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-accent transition-colors text-foreground resize-none"
                required
              />
            </div>
            <button 
              type="submit" 
              disabled={isLoading}
              className="w-full accent-gradient text-white font-bold py-5 rounded-2xl flex items-center justify-center gap-3 hover:shadow-[0_0_30px_rgba(139,92,246,0.3)] transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? "Sending..." : (
                <>
                  Send Message <Send size={18} />
                </>
              )}
            </button>
          </form>
        </motion.div>
      </div>
    </Section>
  );
};

export const Footer = () => {
  return (
    <footer className="py-12 border-t border-white/5 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="text-xl font-display font-bold">
          Fayis<span className="text-accent">.</span>K
        </div>
        <div className="text-muted-foreground text-sm font-medium">
          © {new Date().getFullYear()} Muhammed Fayis K. Crafted with precision.
        </div>
        <div className="flex gap-6">
          <a href="https://github.com/fayiskooni" target="_blank" className="text-muted-foreground hover:text-accent transition-colors"><Github size={20} /></a>
          <a href="https://linkedin.com/in/muhammed-fayis-kooni" target="_blank" className="text-muted-foreground hover:text-accent transition-colors"><Linkedin size={20} /></a>
          <a href="mailto:fayiskooni.dev@gmail.com" className="text-muted-foreground hover:text-accent transition-colors"><Mail size={20} /></a>
        </div>
      </div>
    </footer>
  );
};
