import { Card } from "@/components/ui/card";
import { Star } from "lucide-react";

const clientLogos = [
  '/logos/1.svg',
  '/logos/2.svg',
  '/logos/3.svg',
  '/logos/4.svg',
  '/logos/5.svg',
  '/logos/6.svg',
  '/logos/7.svg'
];


const LogoCarousel = () => {
  const logosLoop = [...clientLogos, ...clientLogos, ...clientLogos];
  return (
    <div className="overflow-hidden w-full py-6">
      <div className="flex gap-12 animate-infiniteScroll justify-center items-center">
        {logosLoop.map((logo, idx) => (
          <img
            key={idx}
            src={logo}
            alt=""
            className="h-20 w-auto grayscale opacity-50 hover:grayscale-0 transition-all"
          />
        ))}
      </div>
    </div>
  );
};

export const Testimonials = () => {
  const testimonials = [
    {
      name: "Dony Susanto",
      role: "CEO, PT Genesys Integrated Indonesia",
      content: "Bener-bener game changing, saya kira awalnya cuma chatbot biasa, tapi ternyata bisa banyak banget fitur-fitur AI yang bisa ditambahkan.",
      rating: 5,
    },
    {
      name: "Hartono Gunawan",
      role: "CEO, PT Sekawan Samudara Indonesia",
      content: "Fitur Auto Follow-Up ke customer dan task assignment sangat membantu, ditambah adanya visualisasi dashboard yang mendukung.",
      rating: 5,
    },
    {
      name: "Kevin Setiawan",
      role: "Marketing Manager, Multilabel ID",
      content: "Awalnya kualahan handle banyak inquiry customer, apalagi banyak yang ga serius, dengan adanya chatbot dengan lead qualificaiton dan summarization, admin bisa fokus pada calon client yang memiliki potensi tinggi.",
      rating: 5,
    },
  ];

  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Apa Kata <span className="text-primary">Mereka</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Kepercayaan dari berbagai bisnis yang telah bertransformasi dengan Vlowzy
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="p-8 bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="space-y-6">
                <div className="flex gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                  ))}
                </div>
                
                <p className="text-foreground leading-relaxed italic">
                  "{testimonial.content}"
                </p>
                
                <div className="pt-6 border-t border-border/50">
                  <div className="font-semibold text-foreground">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Client Logos */}
        <div className="mt-20 text-center">
          <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-8">
            Dipercaya oleh
          </p>
          <LogoCarousel />
        </div>
      </div>
    </section>
  );
};
