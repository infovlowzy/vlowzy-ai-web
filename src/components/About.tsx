import DisplayCards from "@/components/ui/display-cards";
import { Bot, Clock, Zap, Puzzle } from "lucide-react";
import { motion } from "framer-motion";

export const About = () => {
  // 4 features as DisplayCards data
  const displayCardsData = [
    {
      icon: <Bot className="size-4 text-blue-400" />,
      title: "24/7 Smart Agents",
      description: "AI yang bekerja tanpa henti",
      date: "Always Online",
      iconClassName: "text-blue-500",
      titleClassName: "text-blue-400",
      className:
        "[grid-area:stack] hover:-translate-y-10 before:absolute before:w-[100%] before:outline-1 before:rounded-xl before:outline-border before:h-[100%] before:content-[''] before:bg-blend-overlay before:bg-background/50 grayscale-[100%] hover:before:opacity-0 before:transition-opacity before:duration-700 hover:grayscale-0 before:left-0 before:top-0",
    },
    {
      icon: <Zap className="size-4 text-yellow-400" />,
      title: "Custom Automation",
      description: "Solusi sesuai kebutuhan Anda",
      date: "Tailored",
      iconClassName: "text-yellow-500",
      titleClassName: "text-yellow-400",
      className:
        "[grid-area:stack] translate-x-12 translate-y-10 hover:-translate-y-1 before:absolute before:w-[100%] before:outline-1 before:rounded-xl before:outline-border before:h-[100%] before:content-[''] before:bg-blend-overlay before:bg-background/50 grayscale-[100%] hover:before:opacity-0 before:transition-opacity before:duration-700 hover:grayscale-0 before:left-0 before:top-0",
    },
    {
      icon: <Clock className="size-4 text-green-400" />,
      title: "80% Time Saved",
      description: "Efisiensi maksimal",
      date: "Proven Results",
      iconClassName: "text-green-500",
      titleClassName: "text-green-400",
      className:
        "[grid-area:stack] translate-x-24 translate-y-20 hover:translate-y-10 before:absolute before:w-[100%] before:outline-1 before:rounded-xl before:outline-border before:h-[100%] before:content-[''] before:bg-blend-overlay before:bg-background/50 grayscale-[100%] hover:before:opacity-0 before:transition-opacity before:duration-700 hover:grayscale-0 before:left-0 before:top-0",
    },
    {
      icon: <Puzzle className="size-4 text-purple-400" />,
      title: "Easy Integration",
      description: "Terintegrasi dengan sistem Anda",
      date: "Seamless",
      iconClassName: "text-purple-500",
      titleClassName: "text-purple-400",
      className:
        "[grid-area:stack] translate-x-36 translate-y-[7.5rem] hover:translate-y-[5rem]",
    },
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Two-column layout: Text + DisplayCards */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center max-w-6xl mx-auto">
          {/* Left: Text content */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true, margin: "-100px" }}
            className="order-2 lg:order-1"
          >
            <p className="text-sm uppercase tracking-widest text-primary mb-4 font-medium">
              Why Vlowzy?
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-6 leading-tight tracking-tight">
              Everything we do, we believe in creating a future where businesses{" "}
              <span className="text-primary">
                think faster, act smarter, and grow effortlessly.
              </span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Vlowzy, bagian dari <span className="text-foreground">PT Tritech Dynamic Indonesia</span>, adalah
              partner terpercaya dalam transformasi digital bisnis Anda dengan solusi AI yang powerful.
            </p>
          </motion.div>

          {/* Right: DisplayCards */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true, margin: "-100px" }}
            className="flex justify-center lg:justify-end order-1 lg:order-2 min-h-[350px]"
          >
            <DisplayCards cards={displayCardsData} />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
