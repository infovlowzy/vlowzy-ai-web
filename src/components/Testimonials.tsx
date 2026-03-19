import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";

// Testimonials data - easily scalable, just add more objects to this array
const testimonials = [
  {
    id: 1,
    name: "Dony Susanto",
    role: "CEO",
    company: "PT Genesys Integrated",
    content:
      "Jujur awalnya saya skeptis sama yang namanya AI chatbot. Udah pernah coba beberapa vendor sebelumnya dan hasilnya mengecewakan - jawaban kaku, sering salah, customer malah makin kesal. Tapi Vlowzy beda. Pertama kali demo, saya langsung notice bedanya. AI-nya bisa ngerti konteks percakapan, bahkan bisa handle customer yang komplain dengan cara yang sopan dan solutif. Sekarang response time kami turun dari rata-rata 2 jam jadi cuma 2 menit. Tim CS yang tadinya overwhelmed sekarang bisa fokus handle case yang bener-bener butuh human touch.",
    rating: 5,
    avatar: "",
  },
  {
    id: 2,
    name: "Hartono Gunawan",
    role: "CEO",
    company: "PT Sekawan Samudara",
    content:
      "Problem terbesar kami dulu itu follow-up. Sales team sering kelewatan follow-up lead karena volume inquiry tinggi banget. Banyak potential customer yang akhirnya close di kompetitor karena kita telat respon. Sejak pakai automation system dari Vlowzy, semua lead otomatis di-track dan di-follow up sesuai jadwal. Yang bikin saya impressed, sistemnya smart enough untuk prioritize lead mana yang hot dan perlu didahulukan. Dalam 3 bulan pertama, conversion rate naik 40%. Angka yang dulu cuma mimpi.",
    rating: 5,
    avatar: "",
  },
  {
    id: 3,
    name: "Kevin Setiawan",
    role: "Marketing Manager",
    company: "Multilabel ID",
    content:
      "Kami brand fashion dengan customer base yang lumayan besar. Setiap hari bisa masuk ratusan DM dan chat, dari yang serius mau beli sampai yang cuma tanya-tanya doang. Admin kami kewalahan, dan yang parah, kadang lead yang serius malah kelewat karena tenggelam di antara chat yang lain. Vlowzy bantu kami bikin sistem lead qualification yang otomatis filter dan scoring setiap inquiry. Sekarang admin cuma handle yang udah qualified, sisanya di-handle AI dengan baik. Efisiensi tim naik 3x lipat, dan yang penting, gak ada lagi customer yang ngerasa di-ignore.",
    rating: 5,
    avatar: "",
  },
  {
    id: 4,
    name: "Siti Rahayu",
    role: "Operations Director",
    company: "PT Maju Bersama Logistics",
    content:
      "Di industri logistik, operational efficiency itu segalanya. Dulu tim saya harus spend 2-3 jam setiap pagi cuma untuk compile laporan dari berbagai departemen. Belum lagi reminder-reminder manual yang sering kelewat. Vlowzy bantu kami automate semua itu. Sekarang setiap pagi jam 7, laporan lengkap udah masuk ke inbox saya. Task assignment ke tim juga otomatis dengan reminder yang gak pernah miss. Tim bisa fokus ke problem solving dan improvement, bukan admin work. ROI-nya kerasa banget dalam bulan pertama.",
    rating: 5,
    avatar: "",
  },
  {
    id: 5,
    name: "Michael Tanujaya",
    role: "Founder",
    company: "TechVenture Indonesia",
    content:
      "Sebagai startup yang masih bootstrapping, hiring customer support team itu luxury yang belum bisa kami afford. Tapi di sisi lain, customer experience itu crucial untuk growth. Dilema klasik. Vlowzy jadi solusi yang pas banget. AI agent mereka sekarang handle sekitar 80% customer inquiry - dari product questions, order tracking, sampai basic troubleshooting. Yang butuh human intervention baru di-escalate ke tim kecil kami. Kualitas support tetap terjaga tanpa harus burn cash untuk headcount. Exactly what we needed at this stage.",
    rating: 5,
    avatar: "",
  },
  {
    id: 6,
    name: "Rina Wijaya",
    role: "Head of Customer Experience",
    company: "PT Retail Nusantara",
    content:
      "Saya udah 10 tahun di bidang CX, dan selalu skeptis sama AI untuk handle customer interaction. Takutnya malah bikin customer experience jadi impersonal dan robotic. Tapi Vlowzy prove me wrong. AI Chat Agent mereka bisa handle komplain dengan empati yang surprisingly natural. Bahkan beberapa customer gak sadar mereka lagi chat sama AI. Customer satisfaction score kami naik dari 3.8 ke 4.7 dalam 6 bulan. Yang paling saya appreciate, tim Vlowzy juga sangat responsive dan mau dengerin feedback untuk terus improve AI-nya sesuai kebutuhan spesifik kami.",
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
