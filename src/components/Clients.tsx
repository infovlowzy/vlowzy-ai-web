import { ImageMarquee } from "@/components/ui/image-marquee";
import { motion } from "framer-motion";

// Import all client logos from public/logos
const logoModules = import.meta.glob("/public/logos/*.{png,jpg,jpeg,svg}", {
  eager: true,
});

const allLogos = Object.values(logoModules).map((m: any) => m.default);

// Split logos into two rows for the marquee effect
const firstRowLogos = allLogos.slice(0, Math.ceil(allLogos.length / 2));
const secondRowLogos = allLogos.slice(Math.ceil(allLogos.length / 2));

export const Clients = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-12"
        >
          <p className="text-sm uppercase tracking-widest text-primary/80 mb-3 font-medium">
            Dipercaya oleh
          </p>
          <h2 className="text-2xl md:text-3xl font-semibold text-muted-foreground tracking-tight">
            Berbagai bisnis dari{" "}
            <span className="text-foreground">startup hingga enterprise</span>
          </h2>
        </motion.div>

        {/* Logo Marquees - Auto scrolling */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="space-y-4"
        >
          {/* First row - scrolling left */}
          <ImageMarquee
            images={firstRowLogos}
            speed="slow"
            direction="left"
            pauseOnHover={true}
          />
          
          {/* Second row - scrolling right */}
          <ImageMarquee
            images={secondRowLogos}
            speed="slow"
            direction="right"
            pauseOnHover={true}
          />
        </motion.div>

        {/* Stats bar */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true, margin: "-100px" }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
        >
          {[
            { value: "50+", label: "Klien Aktif" },
            { value: "10+", label: "Industri Terlayani" },
            { value: "99%", label: "Kepuasan Klien" },
            { value: "24/7", label: "Support Tersedia" },
          ].map((stat, index) => (
            <motion.div 
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
              viewport={{ once: true }}
              className="text-center group"
            >
              <div className="text-3xl md:text-4xl font-bold text-primary group-hover:scale-110 transition-transform">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground mt-1">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
