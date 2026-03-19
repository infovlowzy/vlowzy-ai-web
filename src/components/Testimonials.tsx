import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";

// Testimonials data - easily scalable, just add more objects to this array
const testimonials = [
  {
    id: 1,
    name: "Dony Susanto",
    role: "CEO",
    company: "PT Genesys Integrated",
    content:
      "Bener-bener game changing. Saya kira awalnya cuma chatbot biasa, tapi ternyata bisa banyak banget fitur-fitur AI yang bisa ditambahkan. Response time customer service kami turun dari 2 jam jadi 2 menit.",
    rating: 5,
    avatar: "",
  },
  {
    id: 2,
    name: "Hartono Gunawan",
    role: "CEO",
    company: "PT Sekawan Samudara",
    content:
      "Fitur Auto Follow-Up ke customer dan task assignment sangat membantu. Dalam 3 bulan pertama, conversion rate naik 40% karena tidak ada lagi lead yang terlewat.",
    rating: 5,
    avatar: "",
  },
  {
    id: 3,
    name: "Kevin Setiawan",
    role: "Marketing Manager",
    company: "Multilabel ID",
    content:
      "Awalnya kewalahan handle banyak inquiry customer. Dengan chatbot lead qualification dari Vlowzy, admin bisa fokus pada calon client potensial. Efisiensi tim naik 3x lipat.",
    rating: 5,
    avatar: "",
  },
  {
    id: 4,
    name: "Siti Rahayu",
    role: "Operations Director",
    company: "PT Maju Bersama Logistics",
    content:
      "Operational automation dari Vlowzy mengubah cara kerja tim kami. Laporan harian yang dulu butuh 2 jam sekarang otomatis terkirim setiap pagi. Tim bisa fokus ke hal yang lebih strategis.",
    rating: 5,
    avatar: "",
  },
  {
    id: 5,
    name: "Michael Tanujaya",
    role: "Founder",
    company: "TechVenture Indonesia",
    content:
      "Sebagai startup, kami butuh solusi yang scalable tapi terjangkau. Vlowzy memberikan keduanya. AI agent mereka handle 80% customer inquiry tanpa perlu tambah headcount.",
    rating: 5,
    avatar: "",
  },
  {
    id: 6,
    name: "Rina Wijaya",
    role: "Head of CX",
    company: "PT Retail Nusantara",
    content:
      "Customer satisfaction score kami naik dari 3.8 ke 4.7 setelah implementasi AI Chat Agent. Yang paling impressive, AI-nya bisa handle komplain dengan empati yang natural.",
    rating: 5,
    avatar: "",
  },
];

export const Testimonials = () => {
  return (
    <AnimatedTestimonials
      title="Apa Kata Mereka"
      subtitle="Kepercayaan dari berbagai bisnis yang telah bertransformasi dengan solusi AI Vlowzy"
      badgeText="Testimoni"
      testimonials={testimonials}
      autoRotateInterval={5000}
      className="bg-transparent"
    />
  );
};
