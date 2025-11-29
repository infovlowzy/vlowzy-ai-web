import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const LogosPerPage = 12; // bisa dinaikkan ke 16 kalau mau

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
