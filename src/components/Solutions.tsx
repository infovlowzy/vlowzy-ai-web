import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, Workflow, Code, Mic, Lightbulb, ChevronLeft, ChevronRight, X, ArrowRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";

export const Solutions = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [planetsReady, setPlanetsReady] = useState(false);
  const [expandedCard, setExpandedCard] = useState<number | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Delay planet appearance for birth animation
          setTimeout(() => setPlanetsReady(true), 800);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Auto-rotate through solutions - fast auto-scroll
  useEffect(() => {
    if (!isVisible || isPaused || !planetsReady || expandedCard !== null) return;
    
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % solutions.length);
    }, 2000); // 2 seconds per planet

    return () => clearInterval(interval);
  }, [isVisible, isPaused, planetsReady, expandedCard]);

  const whatsappNumber = "6285102629999";
  const getWhatsappHref = (solution: string) => {
    const message = `Halo, saya ingin menanyakan lebih lanjut tentang ${solution}`;
    return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
  };

  const solutions = [
    {
      icon: MessageCircle,
      title: "AI Chat Agent",
      shortDesc: "Chatbot pintar yang berinteraksi layaknya manusia dan menjalankan tugas bisnis secara otomatis.",
      description: "Chatbot pintar yang bisa berinteraksi layaknya manusia — memahami konteks percakapan, menjawab pertanyaan secara akurat, dan memberikan solusi real-time di berbagai platform. Bukan sekadar chatbot biasa, tapi agen cerdas yang bisa menjadwalkan meeting, mengirim email, memperbarui data, dan menjalankan tugas-tugas bisnis secara otomatis.",
      features: [
        "Human-like & Contextual Conversation",
        "24/7 Availability",
        "Lead Qualification & Scoring",
        "Multi-channel Integration (WhatsApp, Website, dll)",
        "Supports 96+ Languages",
        "Centralized Funneling Dashboard",
        "Seamless System Integration (CRM, Calendar, Email, dll)",
        "Customizable Tone & Personality",
      ],
      color: "from-blue-500 to-cyan-500",
      shadowColor: "shadow-blue-500/30",
    },
    {
      icon: Mic,
      title: "Smart Voice Agent",
      shortDesc: "Asisten suara pintar yang berbicara natural dan merespons secara real-time.",
      description: "Asisten suara pintar yang bisa berbicara layaknya manusia, memahami konteks pembicaraan, dan merespons secara real-time. Cocok untuk bisnis yang ingin memberikan pengalaman pelanggan modern — dari menjawab pertanyaan, melakukan panggilan otomatis, hingga follow-up prospek tanpa perlu tenaga manusia.",
      features: [
        "Natural Human-like Voice Conversations",
        "Real-Time Response & Context Understanding",
        "Lead Qualification via Phone Calls",
        "Automated Call Follow-Ups & Reminders",
        "Integration with Existing CRM / Customer Database",
      ],
      color: "from-purple-500 to-pink-500",
      shadowColor: "shadow-purple-500/30",
    },
    {
      icon: Workflow,
      title: "Operational Automation",
      shortDesc: "Otomasi proses internal bisnis dari laporan hingga koordinasi tim.",
      description: "Semua proses internal bisnis berjalan otomatis, mulai dari laporan, reminder, approval, hingga koordinasi tim. Lebih efisien, minim error, dan hemat waktu.",
      features: [
        "Automated Daily & Weekly Reports",
        "Smart Reminders & Notifications",
        "Task Assignment & Tracking",
        "Email & Document Automation",
        "Dashboard Summary & Analytics",
      ],
      color: "from-green-500 to-emerald-500",
      shadowColor: "shadow-green-500/30",
    },
    {
      icon: Code,
      title: "Custom AI Systems",
      shortDesc: "Solusi AI yang dirancang khusus sesuai kebutuhan unik bisnis Anda.",
      description: "Solusi AI yang dirancang khusus sesuai kebutuhan unik bisnis Anda, dari konsep hingga implementasi penuh.",
      features: [
        "Tailored AI Solutions",
        "System Integration",
        "Custom Model Training",
        "API Development",
        "Ongoing Support & Maintenance",
      ],
      color: "from-orange-500 to-yellow-500",
      shadowColor: "shadow-orange-500/30",
    },
    {
      icon: Lightbulb,
      title: "AI Consulting",
      shortDesc: "Konsultasi strategi AI untuk transformasi digital bisnis Anda.",
      description: "Konsultasi dan pengembangan strategi AI untuk mengidentifikasi peluang otomasi dan transformasi digital bisnis Anda.",
      features: [
        "AI Readiness Assessment",
        "Use Case Identification",
        "ROI Analysis & Planning",
        "Implementation Roadmap",
        "Team Training & Enablement",
      ],
      color: "from-primary to-blue-400",
      shadowColor: "shadow-primary/30",
    },
  ];

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % solutions.length);
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + solutions.length) % solutions.length);
  };

  // Calculate card positions for 3D carousel effect
  const getCardStyle = (index: number) => {
    const diff = index - activeIndex;
    const totalCards = solutions.length;
    
    // Normalize diff to handle wrap-around
    let normalizedDiff = diff;
    if (diff > totalCards / 2) normalizedDiff = diff - totalCards;
    if (diff < -totalCards / 2) normalizedDiff = diff + totalCards;

    const isActive = normalizedDiff === 0;
    const absPos = Math.abs(normalizedDiff);
    
    // Only show 3 cards at a time (active + 1 on each side)
    if (absPos > 2) {
      return {
        opacity: 0,
        scale: 0.6,
        x: normalizedDiff > 0 ? 400 : -400,
        z: -300,
        rotateY: normalizedDiff > 0 ? -45 : 45,
      };
    }

    return {
      opacity: isActive ? 1 : 0.5 - absPos * 0.15,
      scale: isActive ? 1 : 0.85 - absPos * 0.1,
      x: normalizedDiff * 280,
      z: isActive ? 0 : -150 * absPos,
      rotateY: normalizedDiff * -15,
    };
  };

  return (
    <section ref={sectionRef} className="py-24 relative overflow-hidden min-h-screen">
      {/* Space background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/10 via-background to-background" />
      
      {/* Stars */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(60)].map((_, i) => (
          <div
            key={i}
            className="absolute w-0.5 h-0.5 bg-white/50 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `pulse ${2 + Math.random() * 2}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-20"
        >
          <p className="text-sm uppercase tracking-widest text-primary mb-4 font-medium">
            Our Solutions
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-6 tracking-tight">
            Solusi yang Kami <span className="text-primary">Tawarkan</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Berbagai solusi AI yang dapat disesuaikan dengan kebutuhan bisnis Anda
          </p>
        </motion.div>

        {/* 3D Carousel */}
        <div 
          className="relative max-w-5xl mx-auto"
          style={{ perspective: "1200px" }}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Planet Birth Animation - Central explosion */}
          <AnimatePresence>
            {isVisible && !planetsReady && (
              <motion.div
                initial={{ scale: 0, opacity: 1 }}
                animate={{ scale: [0, 1.5, 2], opacity: [1, 0.8, 0] }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20"
              >
                {/* Core explosion */}
                <div className="w-32 h-32 rounded-full bg-gradient-to-r from-primary via-blue-400 to-cyan-400 blur-xl" />
              </motion.div>
            )}
          </AnimatePresence>
          
          {/* Expanding rings during birth */}
          <AnimatePresence>
            {isVisible && !planetsReady && (
              <>
                {[...Array(3)].map((_, i) => (
                  <motion.div
                    key={`ring-${i}`}
                    initial={{ scale: 0, opacity: 0.6 }}
                    animate={{ scale: [0, 3, 5], opacity: [0.6, 0.3, 0] }}
                    transition={{ 
                      duration: 1, 
                      delay: i * 0.15,
                      ease: "easeOut" 
                    }}
                    className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 pointer-events-none"
                  >
                    <div className="w-24 h-24 rounded-full border-2 border-primary/50" />
                  </motion.div>
                ))}
              </>
            )}
          </AnimatePresence>

          {/* Cards Container */}
          <div className="relative h-[400px] md:h-[420px] flex items-center justify-center">
            <AnimatePresence mode="sync">
              {planetsReady && solutions.map((solution, index) => {
                const style = getCardStyle(index);
                const isActive = index === activeIndex;
                
                return (
                  <motion.div
                    key={solution.title}
                    initial={{ 
                      opacity: 0, 
                      scale: 0.3, 
                      x: 0, 
                      y: 0,
                      rotateY: 0,
                    }}
                    animate={{
                      opacity: style.opacity,
                      scale: style.scale,
                      x: style.x,
                      z: style.z,
                      rotateY: style.rotateY,
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 60,
                      damping: 20,
                      mass: 1.2,
                      delay: index * 0.1,
                    }}
                    onClick={() => {
                      if (isActive) {
                        setExpandedCard(index);
                      } else {
                        setActiveIndex(index);
                      }
                    }}
                    className={`absolute w-[280px] md:w-[340px] cursor-pointer`}
                    style={{
                      transformStyle: "preserve-3d",
                      zIndex: isActive ? 10 : 5 - Math.abs(index - activeIndex),
                    }}
                  >
                    <div 
                      className={`
                        relative p-6 rounded-2xl backdrop-blur-xl
                        bg-gradient-to-br from-neutral-900/90 to-neutral-950/90
                        border transition-all duration-300
                        ${isActive ? 'border-primary/50 shadow-2xl ' + solution.shadowColor : 'border-white/10'}
                      `}
                    >
                      {/* Glow effect for active card */}
                      {isActive && (
                        <div className={`absolute -inset-1 rounded-2xl bg-gradient-to-r ${solution.color} opacity-20 blur-xl`} />
                      )}
                      
                      <div className="relative z-10">
                        {/* Icon */}
                        <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${solution.color} mb-4`}>
                          <solution.icon className="w-6 h-6 text-white" />
                        </div>
                        
                        {/* Title */}
                        <h3 className="text-lg md:text-xl font-semibold text-white mb-2">
                          {solution.title}
                        </h3>
                        
                        {/* Short Description */}
                        <p className="text-neutral-400 mb-4 text-xs md:text-sm leading-relaxed line-clamp-2">
                          {solution.shortDesc}
                        </p>
                        
                        {/* CTA - only show on active */}
                        {isActive && (
                          <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                          >
                            <button
                              className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r ${solution.color} text-white text-xs md:text-sm font-medium hover:opacity-90 transition-opacity`}
                            >
                              Learn More
                              <ArrowRight className="w-4 h-4" />
                            </button>
                          </motion.div>
                        )}
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>

          {/* Navigation Arrows */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={planetsReady ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex justify-center gap-4 mt-8"
          >
            <Button
              variant="outline"
              size="icon"
              onClick={prevSlide}
              className="rounded-full border-white/20 hover:bg-white/10"
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>
            
            {/* Dots */}
            <div className="flex items-center gap-2">
              {solutions.map((solution, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === activeIndex 
                      ? `w-8 bg-gradient-to-r ${solution.color}` 
                      : 'w-2 bg-white/20 hover:bg-white/40'
                  }`}
                />
              ))}
            </div>
            
            <Button
              variant="outline"
              size="icon"
              onClick={nextSlide}
              className="rounded-full border-white/20 hover:bg-white/10"
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Expanded Card Modal - OUTSIDE the overflow container */}
      <AnimatePresence>
        {expandedCard !== null && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setExpandedCard(null)}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[100]"
            />
            
            {/* Planet rings animation */}
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: [0, 1.5, 1], opacity: [0, 0.5, 0] }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-[101] pointer-events-none"
            >
              <div className={`w-[400px] h-[400px] rounded-full border-2 border-dashed opacity-30 ${solutions[expandedCard].color.includes('blue') ? 'border-blue-400' : solutions[expandedCard].color.includes('purple') ? 'border-purple-400' : solutions[expandedCard].color.includes('green') ? 'border-green-400' : solutions[expandedCard].color.includes('orange') ? 'border-orange-400' : 'border-primary'}`} />
            </motion.div>
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: [0, 2, 1.2], opacity: [0, 0.3, 0] }}
              transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
              className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-[101] pointer-events-none"
            >
              <div className={`w-[500px] h-[500px] rounded-full border opacity-20 ${solutions[expandedCard].color.includes('blue') ? 'border-cyan-400' : solutions[expandedCard].color.includes('purple') ? 'border-pink-400' : solutions[expandedCard].color.includes('green') ? 'border-emerald-400' : solutions[expandedCard].color.includes('orange') ? 'border-yellow-400' : 'border-blue-400'}`} />
            </motion.div>
            
            {/* Core glow burst */}
            <motion.div
              initial={{ scale: 0, opacity: 1 }}
              animate={{ scale: [0, 1, 0.8], opacity: [1, 0.6, 0] }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-[101] pointer-events-none"
            >
              <div className={`w-32 h-32 rounded-full bg-gradient-to-r ${solutions[expandedCard].color} blur-3xl`} />
            </motion.div>
            
            {/* Modal Container */}
            <div className="fixed inset-0 z-[102] flex items-center justify-center p-4 pointer-events-none">
              <motion.div
                initial={{ opacity: 0, scale: 0.5, y: 50 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.8, y: 30 }}
                transition={{ 
                  type: "spring", 
                  stiffness: 200, 
                  damping: 20,
                  delay: 0.15
                }}
                className="w-full max-w-lg max-h-[90vh] overflow-y-auto pointer-events-auto"
              >
                <div 
                  className="relative p-6 md:p-8 rounded-2xl bg-gradient-to-br from-neutral-900 to-neutral-950 border border-primary/30 shadow-2xl"
                >
                  {/* Glow */}
                  <div className={`absolute -inset-1 rounded-2xl bg-gradient-to-r ${solutions[expandedCard].color} opacity-20 blur-xl -z-10`} />
                  
                  {/* Close button */}
                  <button
                    onClick={() => setExpandedCard(null)}
                    className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors z-10"
                  >
                    <X className="w-5 h-5 text-white" />
                  </button>
                  
                  <div className="relative z-10">
                    {/* Icon with planet glow */}
                    <motion.div 
                      initial={{ scale: 0, rotate: -180 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.2 }}
                      className="relative inline-block"
                    >
                      <div className={`absolute inset-0 rounded-xl bg-gradient-to-r ${solutions[expandedCard].color} blur-lg opacity-50`} />
                      <div className={`relative inline-flex p-4 rounded-xl bg-gradient-to-r ${solutions[expandedCard].color} mb-4`}>
                        {(() => {
                          const IconComponent = solutions[expandedCard].icon;
                          return <IconComponent className="w-8 h-8 text-white" />;
                        })()}
                      </div>
                    </motion.div>
                    
                    {/* Title */}
                    <motion.h3 
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.25 }}
                      className="text-2xl md:text-3xl font-bold text-white mb-3 tracking-tight"
                    >
                      {solutions[expandedCard].title}
                    </motion.h3>
                    
                    {/* Full Description */}
                    <motion.p 
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                      className="text-neutral-300 mb-6 text-sm md:text-base leading-relaxed"
                    >
                      {solutions[expandedCard].description}
                    </motion.p>

                    {/* Features List */}
                    <ul className="space-y-2 mb-6">
                      {solutions[expandedCard].features.map((feature, idx) => (
                        <motion.li 
                          key={idx} 
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.35 + idx * 0.05 }}
                          className="flex items-center gap-3 text-sm text-neutral-200"
                        >
                          <motion.div 
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: 0.4 + idx * 0.05, type: "spring" }}
                            className={`w-2 h-2 rounded-full bg-gradient-to-r ${solutions[expandedCard].color} shrink-0`} 
                          />
                          {feature}
                        </motion.li>
                      ))}
                    </ul>
                    
                    {/* CTA */}
                    <motion.a
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 }}
                      href={getWhatsappHref(solutions[expandedCard].title)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r ${solutions[expandedCard].color} text-white font-medium hover:opacity-90 transition-opacity`}
                    >
                      Pelajari Lebih Lanjut
                      <ArrowRight className="w-5 h-5" />
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            </div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
};
