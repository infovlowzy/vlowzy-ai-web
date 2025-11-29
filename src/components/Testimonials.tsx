import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

const clientLogos = [
  "/logos/1.svg",
  "/logos/2.svg",
  "/logos/3.svg",
  "/logos/4.svg",
  "/logos/5.svg",
  "/logos/6.svg",
  "/logos/7.svg",
  "/logos/8.svg",
  "/logos/9.svg",
  "/logos/10.svg",
  "/logos/11.svg",
  "/logos/12.svg",
  "/logos/13.svg",
  "/logos/14.svg",
  "/logos/15.svg",
  "/logos/16.svg",
];

const LogosPerPage = 12;

const LogoGridPager = () => {
  const [page, setPage] = useState(0);

  const totalPages = Math.ceil(clientLogos.length / LogosPerPage);

  const startIndex = page * LogosPerPage;
  const currentLogos = clientLogos.slice(
    startIndex,
    startIndex + LogosPerPage
  );

  const goPrev = () => {
    setPage((p) => (p === 0 ? totalPages - 1 : p - 1));
  };

  const goNext = () => {
    setPage((p) => (p === totalPages - 1 ? 0 : p + 1));
  };

  return (
    <div className="w-full">
      {/* Grid logos */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
        {currentLogos.map((logo, idx) => (
          <div
            key={idx}
            className="flex items-center justify-center rounded-xl bg-muted/40 border border-border/40 p-4 hover:bg-muted/70 transition-colors"
          >
            <img
              src={logo}
              alt=""
              className="h-12 w-auto grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-200"
            />
          </div>
        ))}
      </div>

      {/* Page controls */}
      {totalPages > 1 && (
        <div className="flex items-center justify-center gap-4 mt-8">
          <button
            type="button"
            onClick={goPrev}
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border/60 bg-background hover:bg-muted transition-colors"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>

          <div className="flex items-center gap-2">
            {Array.from({ length: totalPages }).map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setPage(i)}
                className={`h-2.5 w-2.5 rounded-full transition-all ${
                  i === page
                    ? "bg-primary w-6"
                    : "bg-border hover:bg-muted-foreground/60"
                }`}
              />
            ))}
          </div>

          <button
            type="button"
            onClick={goNext}
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border/60 bg-background hover:bg-muted transition-colors"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      )}
    </div>
  );
};

export const Testimonials = () => {
  const testimonials = [
    {
      name: "Dony Susanto",
      role: "CEO, PT Genesys Integrated Indonesia",
      content:
        "Bener-bener game changing, saya kira awalnya cuma chatbot biasa, tapi ternyata bisa banyak banget fitur-fitur AI yang bisa ditambahkan.",
      rating: 5,
    },
    {
      name: "Hartono Gunawan",
      role: "CEO, PT Sekawan Samudara Indonesia",
      content:
        "Fitur Auto Follow-Up ke customer dan task assignment sangat membantu, ditambah adanya visualisasi dashboard yang mendukung.",
      rating: 5,
    },
    {
      name: "Kevin Setiawan",
      role: "Marketing Manager, Multilabel ID",
      content:
        "Awalnya kualahan handle banyak inquiry customer, apalagi banyak yang ga serius, dengan adanya chatbot dengan lead qualificaiton dan summarization, admin bisa fokus pada calon client yang memiliki potensi tinggi.",
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
            Kepercayaan dari berbagai bisnis yang telah bertransformasi dengan
            Vlowzy
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
                    <Star
                      key={i}
                      className="w-5 h-5 fill-primary text-primary"
                    />
                  ))}
                </div>

                <p className="text-foreground leading-relaxed italic">
                  "{testimonial.content}"
                </p>

                <div className="pt-6 border-t border-border/50">
                  <div className="font-semibold text-foreground">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {testimonial.role}
                  </div>
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
          <LogoGridPager />
        </div>
      </div>
    </section>
  );
};
