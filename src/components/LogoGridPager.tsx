import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

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

const LogoGridPagerInner = () => {
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

export const LogoGridPager = () => {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Our <span className="text-primary">Clients</span>
          </h2>
          <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
            Dipercaya oleh berbagai bisnis
          </p>
        </div>

        <LogoGridPagerInner />
      </div>
    </section>
  );
};
