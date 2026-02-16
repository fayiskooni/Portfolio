import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/sections/Hero";
import { ValueProp } from "@/components/sections/ValueProp";
import { Projects } from "@/components/sections/Projects";
import { TechStack } from "@/components/sections/TechStack";
import { Process } from "@/components/sections/Process";
import { About } from "@/components/sections/About";
import { Contact, Footer } from "@/components/sections/Contact";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#030303] selection:bg-accent/30">
      <Navbar />
      <Hero />
      <ValueProp />
      <div className="relative">
        {/* Subtle decorative background elements */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[120px] -z-10" />
        <div className="absolute bottom-1/4 left-0 w-[300px] h-[300px] bg-blue-500/5 rounded-full blur-[100px] -z-10" />
        
        <Projects />
      </div>
      <TechStack />
      <Process />
      <About />
      <Contact />
      <Footer />
    </main>
  );
}
