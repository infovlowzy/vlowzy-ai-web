import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { Clients } from "@/components/Clients";
import { About } from "@/components/About";
import { Features } from "@/components/Features";
import { Solutions } from "@/components/Solutions";
import { Testimonials } from "@/components/Testimonials";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";
import { useEffect } from "react";

// Smooth gradient divider component
const SectionDivider = ({ flip = false }: { flip?: boolean }) => (
  <div className={`h-24 w-full ${flip ? 'rotate-180' : ''}`}>
    <div className="h-full w-full bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
  </div>
);

const Index = () => {
  useEffect(() => {
    // Add smooth scrolling
    document.documentElement.style.scrollBehavior = "smooth";
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <main>
        <Hero />
        <Clients />
        <section id="about">
          <About />
        </section>
        <section id="features">
          <Features />
        </section>
        <section id="solutions">
          <Solutions />
        </section>
        <section id="testimonials">
          <Testimonials />
        </section>
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
