"use client";

import { cn } from "@/lib/utils";
import { useEffect, useRef, useState } from "react";

interface LogoItem {
  name: string;
  icon: React.ReactNode;
}

interface LogoMarqueeProps {
  logos: LogoItem[];
  className?: string;
  speed?: "slow" | "normal" | "fast";
  pauseOnHover?: boolean;
  direction?: "left" | "right";
}

export function LogoMarquee({
  logos,
  className,
  speed = "normal",
  pauseOnHover = true,
  direction = "left",
}: LogoMarqueeProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [start, setStart] = useState(false);

  useEffect(() => {
    addAnimation();
  }, []);

  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }

  const getDirection = () => {
    if (containerRef.current) {
      if (direction === "left") {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "forwards"
        );
      } else {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "reverse"
        );
      }
    }
  };

  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "20s");
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "40s");
      } else {
        containerRef.current.style.setProperty("--animation-duration", "80s");
      }
    }
  };

  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20 w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_10%,white_90%,transparent)]",
        className
      )}
    >
      <div
        ref={scrollerRef}
        className={cn(
          "flex w-max min-w-full shrink-0 flex-nowrap gap-8 py-4",
          start && "animate-scroll",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {logos.map((logo, idx) => (
          <div
            key={idx}
            className="group relative flex items-center justify-center w-32 h-16 grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
          >
            <div className="flex items-center gap-2 text-muted-foreground group-hover:text-foreground transition-colors">
              {logo.icon}
              <span className="text-sm font-medium whitespace-nowrap">{logo.name}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export { type LogoItem, type LogoMarqueeProps };
