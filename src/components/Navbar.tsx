"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { toast } from "sonner";
import { PdfViewer } from "./PdfViewer";

const navLinks = [
  { name: "Work", href: "#work" },
  { name: "About", href: "#about" },
  { name: "Stack", href: "#stack" },
  { name: "Process", href: "#process" },
  { name: "Contact", href: "#contact" },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isPdfViewerOpen, setIsPdfViewerOpen] = useState(false);

  const handleDownload = () => {
    toast.success("Resume downloaded", {
      description: "Would you like to view it now?",
      action: {
        label: "View",
        onClick: () => setIsPdfViewerOpen(true),
      },
      duration: 10000,
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4",
        isScrolled ? "py-3" : "py-6"
      )}
    >
      <div className={cn(
        "max-w-7xl mx-auto flex items-center justify-between px-6 py-3 rounded-full transition-all duration-300",
        isScrolled ? "glass shadow-xl" : "bg-transparent"
      )}>
        <a href="#" className="text-xl font-display font-bold tracking-tight">
          Fayis<span className="text-accent">.</span>K
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a
            href="/Muhammed_Fayis_CV.pdf"
            download
            onClick={handleDownload}
            className="px-5 py-2 rounded-full accent-gradient text-white text-sm font-semibold hover:shadow-[0_0_20px_rgba(139,92,246,0.5)] transition-all duration-300"
          >
            Download CV
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-foreground"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-6 right-6 mt-4 p-6 glass rounded-2xl md:hidden flex flex-col gap-4 shadow-2xl"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-lg font-medium text-muted-foreground hover:text-foreground transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a
              href="/Muhammed_Fayis_CV.pdf"
              download
              className="mt-2 w-full text-center px-6 py-3 rounded-xl accent-gradient text-white font-semibold"
              onClick={() => {
                setIsMobileMenuOpen(false);
                handleDownload();
              }}
            >
              Download CV
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
    <PdfViewer
        isOpen={isPdfViewerOpen}
        onClose={() => setIsPdfViewerOpen(false)}
        pdfUrl="/Muhammed_Fayis_CV.pdf"
      />
    </>
  );
};
