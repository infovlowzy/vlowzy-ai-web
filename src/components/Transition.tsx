import { motion, useScroll, useTransform } from "framer-motion";
import { Sparkles } from "lucide-react";
import { useRef } from "react";

export const Transition = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  // Smooth transforms based on scroll
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 1.1]);
  const y = useTransform(scrollYProgress, [0, 0.5, 1], [100, 0, -50]);
  
  // Ring animations
  const ring1Scale = useTransform(scrollYProgress, [0.2, 0.8], [0.5, 1.5]);
  const ring2Scale = useTransform(scrollYProgress, [0.2, 0.8], [0.3, 1.8]);
  const ring3Scale = useTransform(scrollYProgress, [0.2, 0.8], [0.2, 2.2]);
  const ringOpacity = useTransform(scrollYProgress, [0.2, 0.5, 0.8], [0, 0.6, 0]);

  return (
    <section 
      ref={sectionRef}
      className="py-32 relative overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
      
      {/* Animated rings */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <motion.div 
          style={{ scale: ring1Scale, opacity: ringOpacity }}
          className="absolute w-64 h-64 rounded-full border border-primary/40"
        />
        <motion.div 
          style={{ scale: ring2Scale, opacity: ringOpacity }}
          className="absolute w-64 h-64 rounded-full border border-primary/30"
        />
        <motion.div 
          style={{ scale: ring3Scale, opacity: ringOpacity }}
          className="absolute w-64 h-64 rounded-full border border-primary/20"
        />
      </div>

      {/* Center glow */}
      <motion.div 
        style={{ opacity: ringOpacity, scale }}
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-primary/30 rounded-full blur-3xl"
      />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          style={{ opacity, scale, y }}
          className="flex flex-col items-center justify-center text-center"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-sm mb-8"
          >
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Explore Our Solutions</span>
          </motion.div>
          
          {/* Main text */}
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground max-w-2xl mb-4"
          >
            Temukan Solusi{" "}
            <span className="text-primary">Terbaik</span>
          </motion.h3>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-muted-foreground text-lg max-w-md"
          >
            Berbagai solusi AI yang siap membantu transformasi bisnis Anda
          </motion.p>
        </motion.div>
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.5 }}
            transition={{ delay: i * 0.1 }}
            viewport={{ once: true }}
            className="absolute w-1 h-1 bg-primary/60 rounded-full"
            style={{
              left: `${20 + (i % 4) * 20}%`,
              top: `${30 + Math.floor(i / 4) * 40}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.3, 0.6, 0.3],
            }}
            // @ts-ignore
            transition={{
              duration: 3 + i * 0.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>
    </section>
  );
};
