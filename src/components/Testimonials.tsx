import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { cn } from "@/lib/utils";

interface Testimonial {
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
  avatar?: string;
}

// Testimonials data - easily scalable, just add more objects to this array
const testimonials: Testimonial[] = [
  {
    name: "Dony Susanto",
    role: "CEO",
    company: "PT Genesys Integrated Indonesia",
    content:
      "Bener-bener game changing. Saya kira awalnya cuma chatbot biasa, tapi ternyata bisa banyak banget fitur-fitur AI yang bisa ditambahkan. Response time customer service kami turun dari 2 jam jadi 2 menit.",
    rating: 5,
  },
  {
    name: "Hartono Gunawan",
    role: "CEO",
    company: "PT Sekawan Samudara Indonesia",
    content:
      "Fitur Auto Follow-Up ke customer dan task assignment sangat membantu. Dalam 3 bulan pertama, conversion rate naik 40% karena tidak ada lagi lead yang terlewat.",
    rating: 5,
  },
  {
    name: "Kevin Setiawan",
    role: "Marketing Manager",
    company: "Multilabel ID",
    content:
      "Awalnya kewalahan handle banyak inquiry customer. Dengan chatbot lead qualification dari Vlowzy, admin bisa fokus pada calon client potensial. Efisiensi tim naik 3x lipat.",
    rating: 5,
  },
  {
    name: "Siti Rahayu",
    role: "Operations Director",
    company: "PT Maju Bersama Logistics",
    content:
      "Operational automation dari Vlowzy mengubah cara kerja tim kami. Laporan harian yang dulu butuh 2 jam sekarang otomatis terkirim setiap pagi. Tim bisa fokus ke hal yang lebih strategis.",
    rating: 5,
  },
  {
    name: "Michael Tanujaya",
    role: "Founder",
    company: "TechVenture Indonesia",
    content:
      "Sebagai startup, kami butuh solusi yang scalable tapi terjangkau. Vlowzy memberikan keduanya. AI agent mereka handle 80% customer inquiry tanpa perlu tambah headcount.",
    rating: 5,
  },
  {
    name: "Rina Wijaya",
    role: "Head of Customer Experience",
    company: "PT Retail Nusantara",
    content:
      "Customer satisfaction score kami naik dari 3.8 ke 4.7 setelah implementasi AI Chat Agent. Yang paling impressive, AI-nya bisa handle komplain dengan empati yang natural.",
    rating: 5,
  },
];

const TestimonialCard = ({
  testimonial,
  index,
}: {
  testimonial: Testimonial;
  index: number;
}) => {
  // Generate initials for avatar
  const initials = testimonial.name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2);

  // Generate a consistent color based on name
  const colors = [
    "from-blue-500 to-primary",
    "from-primary to-purple-500",
    "from-purple-500 to-pink-500",
    "from-green-500 to-emerald-500",
    "from-orange-500 to-red-500",
  ];
  const colorIndex = testimonial.name.length % colors.length;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -8, transition: { duration: 0.2 } }}
      className="group"
    >
      <div
        className={cn(
          "relative h-full p-8 rounded-2xl",
          "bg-gradient-to-br from-neutral-900/80 to-neutral-950/80",
          "border border-white/[0.08]",
          "hover:border-primary/30 transition-all duration-300",
          "hover:shadow-2xl hover:shadow-primary/10"
        )}
      >
        {/* Quote icon */}
        <div className="absolute top-6 right-6 opacity-10 group-hover:opacity-20 transition-opacity">
          <Quote className="w-12 h-12 text-primary" />
        </div>

        {/* Stars */}
        <div className="flex gap-1 mb-6">
          {[...Array(testimonial.rating)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 + i * 0.05 }}
              viewport={{ once: true }}
            >
              <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
            </motion.div>
          ))}
        </div>

        {/* Content */}
        <p className="text-neutral-300 leading-relaxed mb-8 text-base">
          "{testimonial.content}"
        </p>

        {/* Author */}
        <div className="flex items-center gap-4 pt-6 border-t border-white/[0.08]">
          {/* Avatar */}
          <div
            className={cn(
              "w-12 h-12 rounded-full flex items-center justify-center text-white font-semibold text-sm",
              `bg-gradient-to-br ${colors[colorIndex]}`
            )}
          >
            {initials}
          </div>

          <div>
            <div className="font-semibold text-white">{testimonial.name}</div>
            <div className="text-sm text-neutral-400">
              {testimonial.role}, {testimonial.company}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export const Testimonials = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />

      <div className="container relative z-10 mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-sm uppercase tracking-widest text-primary mb-4 font-medium">
            Testimoni
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-4 tracking-tight">
            Apa Kata <span className="text-primary">Mereka</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Kepercayaan dari berbagai bisnis yang telah bertransformasi dengan
            Vlowzy
          </p>
        </motion.div>

        {/* Testimonials Grid - responsive and scalable */}
        <div
          className={cn(
            "grid gap-6 max-w-7xl mx-auto",
            // Responsive grid that scales based on number of testimonials
            testimonials.length === 1 && "md:grid-cols-1 max-w-lg",
            testimonials.length === 2 && "md:grid-cols-2 max-w-3xl",
            testimonials.length === 3 && "md:grid-cols-2 lg:grid-cols-3 max-w-5xl",
            testimonials.length === 4 && "md:grid-cols-2 lg:grid-cols-2 max-w-4xl",
            testimonials.length >= 5 && "md:grid-cols-2 lg:grid-cols-3"
          )}
        >
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={testimonial.name}
              testimonial={testimonial}
              index={index}
            />
          ))}
        </div>

        {/* Trust indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-sm text-muted-foreground">
            Dipercaya oleh{" "}
            <span className="text-primary font-semibold">50+</span> bisnis di
            Indonesia
          </p>
        </motion.div>
      </div>
    </section>
  );
};
