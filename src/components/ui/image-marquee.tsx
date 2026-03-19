"use client";

import { cn } from "@/lib/utils";
import { useEffect, useRef, useState } from "react";

interface ImageMarqueeProps {
  images: string[];
  className?: string;
  speed?: "slow" | "normal" | "fast";
  pauseOnHover?: boolean;
  direction?: "left" | "right";
}

export function ImageMarquee({
  images,
  className,
  speed = "normal",
  pauseOnHover = true,
  direction = "left",
}: ImageMarqueeProps) {
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
        containerRef.current.style.setProperty("--animation-duration", "60s");
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
          "flex w-max min-w-full shrink-0 flex-nowrap gap-12 py-4",
          start && "animate-scroll",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {images.map((src, idx) => (
          <div
            key={idx}
            className="group relative flex items-center justify-center h-14 w-32 md:h-16 md:w-40 overflow-hidden"
          >
            {/* Light backdrop for transparent logos */}
            <div className="absolute inset-0 bg-white/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <img
              src={src}
              alt=""
              className="relative z-10 w-full scale-125 object-contain opacity-70 hover:opacity-100 transition-all duration-500"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export { type ImageMarqueeProps };
