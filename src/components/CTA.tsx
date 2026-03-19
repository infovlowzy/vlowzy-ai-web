import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import { Button } from "@/components/ui/button";
import { ArrowRight, MessageCircle, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { TextShimmer } from "@/components/ui/text-shimmer";

export const CTA = () => {
  const whatsappNumber = "6285102629999";

  const handleWhatsApp = (message: string) => {
    const encodedMessage = encodeURIComponent(message);
    window.open(
      `https://wa.me/${whatsappNumber}?text=${encodedMessage}`,
      "_blank"
    );
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-background via-background to-neutral-950">
      <ContainerScroll
        titleComponent={
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex flex-col items-center"
          >
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-sm uppercase tracking-widest text-primary mb-4 font-medium"
            >
              Transform Your Business
            </motion.p>
            <motion.h1 
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4"
            >
              Unleash the Power of
            </motion.h1>
            <motion.div 
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
              viewport={{ once: true }}
            >
              <TextShimmer
                as="span"
                duration={3}
                spread={3}
                className="text-4xl md:text-[5rem] lg:text-[6rem] font-bold mt-1 leading-none [--base-color:theme(colors.blue.500)] [--base-gradient-color:theme(colors.cyan.300)]"
              >
                Artificial Intelligence
              </TextShimmer>
            </motion.div>
          </motion.div>
        }
      >
        {/* CTA Content inside the iPad/Card */}
        <div className="h-full w-full bg-gradient-to-br from-primary/20 via-neutral-900 to-blue-900/20 p-6 md:p-12 flex flex-col items-center justify-center text-center relative overflow-hidden">
          {/* Background effects */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/20 via-transparent to-transparent" />
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/20 rounded-full blur-[100px]" />
          <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-blue-500/20 rounded-full blur-[80px]" />
          
          {/* Content */}
          <div className="relative z-10 max-w-2xl mx-auto">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 mb-8">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Free Consultation</span>
            </div>

            {/* Headline */}
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4">
              Siap Transformasi Bisnis Anda?
            </h2>

            {/* Description */}
            <p className="text-neutral-300 text-base md:text-lg mb-8 leading-relaxed">
              Jadwalkan sesi konsultasi gratis dan temukan bagaimana AI dapat meningkatkan efisiensi bisnis Anda hingga 80%.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="group text-base px-8 py-6 bg-primary hover:bg-primary/90 shadow-lg shadow-primary/25 rounded-full"
                onClick={() =>
                  handleWhatsApp(
                    "Halo, saya ingin menjadwalkan free consultation bagaimana AI bisa diterapkan di bisnis saya."
                  )
                }
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                Jadwalkan Demo Gratis
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-base px-8 py-6 border-white/20 hover:bg-white/10 rounded-full text-white"
                onClick={() =>
                  handleWhatsApp(
                    "Halo, saya ingin bertanya lebih lanjut tentang AI solution yang ditawarkan Vlowzy."
                  )
                }
              >
                Hubungi Kami
              </Button>
            </div>

            {/* Contact info */}
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 text-sm text-neutral-400">
              <span>Atau hubungi langsung:</span>
              <a
                href="mailto:info@vlowzy.com"
                className="text-primary hover:underline"
              >
                info@vlowzy.com
              </a>
              <span className="hidden sm:inline">•</span>
              <a
                href={`https://wa.me/${whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                +62 851-0262-9999
              </a>
            </div>
          </div>
        </div>
      </ContainerScroll>

      {/* Dramatic Tagline with Stars */}
      <div className="relative py-32 md:py-40 overflow-hidden -mt-16">
        {/* Starry background */}
        <div className="absolute inset-0">
          {[...Array(120)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute bg-white rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                width: Math.random() > 0.8 ? '2px' : '1px',
                height: Math.random() > 0.8 ? '2px' : '1px',
              }}
              animate={{
                opacity: [0, 1, 0],
                scale: [0.5, 1.5, 0.5],
              }}
              transition={{
                duration: 2 + Math.random() * 4,
                repeat: Infinity,
                delay: Math.random() * 3,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>

        {/* Shooting stars */}
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={`shooting-${i}`}
            className="absolute w-1 h-1 bg-white rounded-full"
            style={{
              left: `${20 + i * 30}%`,
              top: '20%',
            }}
            animate={{
              x: [0, 200],
              y: [0, 100],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              delay: i * 4 + 2,
              ease: "easeOut",
            }}
          >
            <div className="absolute w-20 h-0.5 bg-gradient-to-r from-white to-transparent -left-20 top-0" />
          </motion.div>
        ))}

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-neutral-950/50" />

        {/* Multiple glows */}
        <motion.div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-48 bg-primary/30 rounded-full blur-[120px]"
          animate={{
            opacity: [0.2, 0.5, 0.2],
            scale: [0.9, 1.1, 0.9],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute left-1/3 top-1/2 -translate-y-1/2 w-64 h-32 bg-blue-500/20 rounded-full blur-[80px]"
          animate={{
            opacity: [0.3, 0.6, 0.3],
            x: [-20, 20, -20],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute right-1/3 top-1/2 -translate-y-1/2 w-64 h-32 bg-cyan-500/20 rounded-full blur-[80px]"
          animate={{
            opacity: [0.3, 0.6, 0.3],
            x: [20, -20, 20],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />

        {/* Tagline with dramatic POP entrance */}
        <div className="relative z-10 text-center px-4">
          <motion.h3
            initial={{ opacity: 0, y: 80, scale: 0.5 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ 
              duration: 0.6, 
              type: "spring",
              stiffness: 200,
              damping: 12,
            }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight"
          >
            Building AI Systems
          </motion.h3>
          <motion.h3
            initial={{ opacity: 0, y: 80, scale: 0.5 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ 
              duration: 0.6, 
              delay: 0.15,
              type: "spring",
              stiffness: 200,
              damping: 12,
            }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl lg:text-6xl font-bold mt-3"
          >
            <motion.span
              className="bg-gradient-to-r from-primary via-blue-400 to-cyan-400 bg-clip-text text-transparent inline-block"
              initial={{ scale: 1 }}
              whileInView={{ 
                scale: [1, 1.05, 1],
              }}
              transition={{
                duration: 0.4,
                delay: 0.6,
                ease: "easeOut",
              }}
              viewport={{ once: true }}
            >
              that Works for You.
            </motion.span>
          </motion.h3>
          
          {/* Emphasis burst effect */}
          <motion.div
            initial={{ scale: 0, opacity: 0.8 }}
            whileInView={{ scale: 2.5, opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
            viewport={{ once: true }}
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full bg-primary/40 blur-xl pointer-events-none"
          />
          
          {/* Subtle underline glow */}
          <motion.div
            initial={{ scaleX: 0, opacity: 0 }}
            whileInView={{ scaleX: 1, opacity: 1 }}
            transition={{ 
              duration: 0.5, 
              delay: 0.7, 
              type: "spring",
              stiffness: 150,
              damping: 15,
            }}
            viewport={{ once: true }}
            className="mx-auto mt-6 h-1 w-32 md:w-48 bg-gradient-to-r from-transparent via-primary to-transparent rounded-full"
          />
        </div>
      </div>
    </section>
  );
};
