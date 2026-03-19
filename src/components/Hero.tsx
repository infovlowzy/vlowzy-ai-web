import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import ShaderBackground from "@/components/ui/shader-background";

export const Hero = () => {
  const [titleNumber, setTitleNumber] = useState(0);
  const whatsappNumber = "6285102629999";

  const titles = useMemo(
    () => ["AI Agents", "AI Automation", "AI Smart Systems", "AI Assistant"],
    []
  );

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (titleNumber === titles.length - 1) {
        setTitleNumber(0);
      } else {
        setTitleNumber(titleNumber + 1);
      }
    }, 2500);
    return () => clearTimeout(timeoutId);
  }, [titleNumber, titles]);

  const handleClick = (message: string) => {
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${whatsappNumber}?text=${encodedMessage}`, "_blank");
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Dark base background */}
      <div className="absolute inset-0 bg-[#030712] z-0" />
      
      {/* Shader Background - positioned lower */}
      <div className="absolute inset-0 z-[1]" style={{ top: '35%' }}>
        <ShaderBackground />
      </div>

      {/* Top gradient overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#030712] via-[#030712]/70 to-transparent z-[2]" />
      
      {/* Bottom gradient for smooth transition */}
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-background to-transparent z-[3]" />

      <div className="container relative z-[5] mx-auto px-4 pt-24 pb-20">
        <div className="flex gap-6 items-center justify-center flex-col max-w-4xl mx-auto">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col sm:flex-row items-center gap-3"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-sm">
              <Sparkles className="w-3.5 h-3.5 text-primary" />
              <span className="text-xs font-medium text-primary tracking-wide uppercase">
                AI-Powered Business Automation
              </span>
            </div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 backdrop-blur-sm">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
                <path d="M12 2C6.477 2 2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.989C18.343 21.129 22 16.99 22 12c0-5.523-4.477-10-10-10z" fill="#1877F2"/>
              </svg>
              <span className="text-xs font-medium text-blue-400 tracking-wide">
                Meta Tech Provider
              </span>
            </div>
          </motion.div>

          {/* Main Headline with Animated Words */}
          <div className="flex gap-4 flex-col">
            <motion.h1 
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl max-w-3xl tracking-tight text-center font-semibold"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <span className="text-white">Transformasi Bisnis Anda dengan</span>
              <span className="relative flex w-full justify-center text-center h-[1.3em]">
                &nbsp;
                {titles.map((title, index) => (
                  <motion.span
                    key={index}
                    className="absolute font-bold bg-gradient-to-r from-blue-400 via-primary to-blue-400 bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(59,130,246,0.5)]"
                    initial={{ opacity: 0, y: "-100" }}
                    transition={{ type: "spring", stiffness: 50 }}
                    animate={
                      titleNumber === index
                        ? { y: 0, opacity: 1, scale: 1 }
                        : { y: titleNumber > index ? -150 : 150, opacity: 0, scale: 0.9 }
                    }
                  >
                    {title}
                  </motion.span>
                ))}
              </span>
            </motion.h1>

            {/* Subtext */}
            <motion.p 
              className="text-base sm:text-lg text-white/60 max-w-xl mx-auto leading-relaxed text-center mt-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Otomasi cerdas yang bekerja 24/7 untuk meningkatkan efisiensi dan produktivitas bisnis Anda.
            </motion.p>
          </div>

          {/* CTA Buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-3 justify-center items-center pt-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Button
              size="lg"
              className="group text-sm sm:text-base px-6 py-5 bg-primary hover:bg-primary/90 shadow-lg shadow-primary/20 rounded-full"
              onClick={() =>
                handleClick("Halo, saya ingin menjadwalkan free consultation bagaimana AI bisa diterapkan di bisnis saya.")
              }
            >
              Jadwalkan Demo Gratis
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="ghost"
              className="text-sm sm:text-base px-6 py-5 text-white/70 hover:text-white hover:bg-white/5 rounded-full"
              onClick={() =>
                handleClick("Halo, saya ingin bertanya lebih lanjut tentang AI solution yang ditawarkan Vlowzy.")
              }
            >
              Pelajari Lebih Lanjut
            </Button>
          </motion.div>

          {/* Stats - Compact */}
          <motion.div 
            className="flex flex-wrap justify-center gap-8 sm:gap-12 pt-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-semibold text-white">50+</div>
              <div className="text-xs text-white/40 mt-0.5 uppercase tracking-wider">Klien Aktif</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-semibold text-white">80%</div>
              <div className="text-xs text-white/40 mt-0.5 uppercase tracking-wider">Waktu Terhemat</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-semibold text-white">24/7</div>
              <div className="text-xs text-white/40 mt-0.5 uppercase tracking-wider">AI Support</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
