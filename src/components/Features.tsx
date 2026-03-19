import { motion } from "framer-motion";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import {
  Bot,
  MessageSquare,
  Zap,
  Clock,
  TrendingUp,
  Shield,
} from "lucide-react";

// Animated skeleton components for visual interest
const SkeletonOne = () => {
  const variants = {
    initial: { x: 0 },
    animate: { x: 10, rotate: 5, transition: { duration: 0.2 } },
  };
  const variantsSecond = {
    initial: { x: 0 },
    animate: { x: -10, rotate: -5, transition: { duration: 0.2 } },
  };

  return (
    <motion.div
      initial="initial"
      whileHover="animate"
      className="flex flex-1 w-full h-full min-h-[6rem] flex-col space-y-2"
    >
      <motion.div
        variants={variants}
        className="flex flex-row rounded-full border border-white/[0.1] p-2 items-center space-x-2 bg-white/[0.03]"
      >
        <div className="h-6 w-6 rounded-full bg-gradient-to-r from-blue-500 to-primary shrink-0" />
        <div className="w-full bg-white/[0.1] h-4 rounded-full" />
      </motion.div>
      <motion.div
        variants={variantsSecond}
        className="flex flex-row rounded-full border border-white/[0.1] p-2 items-center space-x-2 w-3/4 ml-auto bg-white/[0.03]"
      >
        <div className="w-full bg-white/[0.1] h-4 rounded-full" />
        <div className="h-6 w-6 rounded-full bg-gradient-to-r from-primary to-blue-400 shrink-0" />
      </motion.div>
      <motion.div
        variants={variants}
        className="flex flex-row rounded-full border border-white/[0.1] p-2 items-center space-x-2 bg-white/[0.03]"
      >
        <div className="h-6 w-6 rounded-full bg-gradient-to-r from-blue-500 to-primary shrink-0" />
        <div className="w-full bg-white/[0.1] h-4 rounded-full" />
      </motion.div>
    </motion.div>
  );
};

const SkeletonTwo = () => {
  const variants = {
    initial: { width: 0 },
    animate: { width: "100%", transition: { duration: 0.2 } },
  };
  const arr = [40, 70, 55, 90, 65];

  return (
    <motion.div
      initial="initial"
      whileHover="animate"
      className="flex flex-1 w-full h-full min-h-[6rem] flex-col space-y-2"
    >
      {arr.map((width, i) => (
        <motion.div
          key={`skeleton-two-${i}`}
          variants={variants}
          style={{ maxWidth: `${width}%` }}
          className="flex flex-row rounded-full border border-white/[0.1] p-2 items-center space-x-2 bg-white/[0.03] w-full h-4"
        />
      ))}
    </motion.div>
  );
};

const SkeletonThree = () => {
  const variants = {
    initial: { backgroundPosition: "0 50%" },
    animate: {
      backgroundPosition: ["0 50%", "100% 50%", "0 50%"],
    },
  };

  return (
    <motion.div
      initial="initial"
      animate="animate"
      variants={variants}
      transition={{ duration: 5, repeat: Infinity, repeatType: "reverse" }}
      className="flex flex-1 w-full h-full min-h-[6rem] rounded-lg flex-col space-y-2"
      style={{
        background: "linear-gradient(-45deg, #3b82f6, #8b5cf6, #06b6d4, #3b82f6)",
        backgroundSize: "400% 400%",
      }}
    >
      <motion.div className="h-full w-full rounded-lg flex items-center justify-center">
        <Zap className="h-12 w-12 text-white/80" />
      </motion.div>
    </motion.div>
  );
};

const SkeletonFour = () => {
  const first = {
    initial: { x: 20, rotate: -5 },
    hover: { x: 0, rotate: 0 },
  };
  const second = {
    initial: { x: -20, rotate: 5 },
    hover: { x: 0, rotate: 0 },
  };

  return (
    <motion.div
      initial="initial"
      animate="animate"
      whileHover="hover"
      className="flex flex-1 w-full h-full min-h-[6rem] flex-row space-x-2"
    >
      <motion.div
        variants={first}
        className="h-full w-1/3 rounded-2xl bg-white/[0.03] border border-white/[0.1] p-4 flex flex-col items-center justify-center"
      >
        <Clock className="h-8 w-8 text-blue-400" />
        <p className="text-xs text-center font-semibold text-neutral-400 mt-2">
          24/7
        </p>
      </motion.div>
      <motion.div className="h-full relative z-20 w-1/3 rounded-2xl bg-gradient-to-br from-primary/20 to-blue-500/20 border border-primary/30 p-4 flex flex-col items-center justify-center">
        <Bot className="h-10 w-10 text-primary" />
        <p className="text-xs text-center font-semibold text-neutral-300 mt-2">
          AI Agent
        </p>
      </motion.div>
      <motion.div
        variants={second}
        className="h-full w-1/3 rounded-2xl bg-white/[0.03] border border-white/[0.1] p-4 flex flex-col items-center justify-center"
      >
        <TrendingUp className="h-8 w-8 text-green-400" />
        <p className="text-xs text-center font-semibold text-neutral-400 mt-2">
          +80%
        </p>
      </motion.div>
    </motion.div>
  );
};

const SkeletonFive = () => {
  const variants = {
    initial: { x: 0, y: 0 },
    hover: { x: -5, y: -5 },
  };
  const variantsSecond = {
    initial: { x: 0, y: 0 },
    hover: { x: 5, y: 5 },
  };

  return (
    <motion.div
      initial="initial"
      whileHover="hover"
      className="flex flex-1 w-full h-full min-h-[6rem] flex-col space-y-2"
    >
      <motion.div
        variants={variants}
        className="flex flex-row rounded-xl border border-white/[0.1] p-3 items-start space-x-2 bg-white/[0.03]"
      >
        <div className="h-8 w-8 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 shrink-0 flex items-center justify-center">
          <Shield className="h-4 w-4 text-white" />
        </div>
        <p className="text-xs text-neutral-400">
          Data Anda aman dengan enkripsi end-to-end
        </p>
      </motion.div>
      <motion.div
        variants={variantsSecond}
        className="flex flex-row rounded-xl border border-primary/30 p-3 items-start justify-end space-x-2 w-3/4 ml-auto bg-primary/10"
      >
        <p className="text-xs text-neutral-300">Compliance GDPR ✓</p>
      </motion.div>
    </motion.div>
  );
};

const items = [
  {
    title: "AI Chat Assistant",
    description:
      "Chatbot cerdas yang memahami konteks dan memberikan respons natural untuk customer service 24/7.",
    header: <SkeletonOne />,
    className: "md:col-span-1",
    icon: <MessageSquare className="h-4 w-4 text-primary" />,
  },
  {
    title: "Workflow Automation",
    description:
      "Otomasi tugas repetitif seperti data entry, scheduling, dan reporting secara otomatis.",
    header: <SkeletonTwo />,
    className: "md:col-span-1",
    icon: <Zap className="h-4 w-4 text-yellow-400" />,
  },
  {
    title: "Smart Processing",
    description:
      "Proses dokumen, invoice, dan data dengan AI yang akurat dan cepat.",
    header: <SkeletonThree />,
    className: "md:col-span-1",
    icon: <TrendingUp className="h-4 w-4 text-blue-400" />,
  },
  {
    title: "24/7 AI Agents",
    description:
      "Agent AI yang bekerja tanpa henti, meningkatkan produktivitas hingga 80%.",
    header: <SkeletonFour />,
    className: "md:col-span-2",
    icon: <Bot className="h-4 w-4 text-primary" />,
  },
  {
    title: "Enterprise Security",
    description:
      "Keamanan data tingkat enterprise dengan enkripsi dan compliance standar internasional.",
    header: <SkeletonFive />,
    className: "md:col-span-1",
    icon: <Shield className="h-4 w-4 text-green-400" />,
  },
];

export const Features = () => {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-sm uppercase tracking-widest text-primary mb-4 font-medium">
            Fitur Unggulan
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-4 tracking-tight">
            Bagaimana AI Membantu Bisnis
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Solusi AI yang dirancang khusus untuk meningkatkan efisiensi dan produktivitas bisnis Anda
          </p>
        </motion.div>

        {/* Bento Grid */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <BentoGrid className="max-w-5xl mx-auto">
            {items.map((item, i) => (
              <BentoGridItem
                key={i}
                title={item.title}
                description={item.description}
                header={item.header}
                className={item.className}
                icon={item.icon}
              />
            ))}
          </BentoGrid>
        </motion.div>
      </div>
    </section>
  );
};
