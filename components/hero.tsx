"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function Hero() {
  const bgRef = useRef<HTMLDivElement | null>(null);

  const photos = [
    { src: "/images/chembra peak.png", alt: "Chembra Peak" },
    { src: "/images/meenmutty.avif", alt: "MeenMutty Waterfalls" },
    { src: "/images/Neelimala_View_Point.avif", alt: "Neelimala View Point" },
    { src: "/images/bamboo forest.png", alt: "Bamboo Forest" },
    { src: "/images/driver1.jpg", alt: "Soochipara Falls" },
  ];

  // ✅ Parallax effect for background
  useEffect(() => {
    const el = bgRef.current;
    if (!el) return;

    const prefersReduced =
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReduced) return;

    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const y = window.scrollY;
        el.style.transform = `translateY(${Math.min(y * 0.15, 80)}px)`;
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <section id="top" className="relative overflow-hidden">
      {/* ✅ Background */}
      <div
        ref={bgRef}
        aria-hidden="true"
        className="absolute inset-0 -z-10 will-change-transform transition-transform duration-700"
      >
        <Image
          src="/images/wayanad-hero.jpg"
          alt="Wayanad Scenic Background"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/10 to-background/80" />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(60% 60% at 50% 20%, rgba(101,29,14,0.12) 0%, transparent 60%)",
          }}
        />
      </div>

      {/* ✅ Hero Content */}
      <div className="mx-auto max-w-6xl px-4 py-24 sm:py-28 md:py-32">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="max-w-2xl"
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-white">
            Experience Wayanad in Comfort & Style
          </h1>
          <p className="mt-4 text-base sm:text-lg text-red-950">
            Breathe in the fresh mountain air, wander through lush forests, and
            find peace amidst nature’s beauty.
          </p>

          {/* ✅ WhatsApp Button */}
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1 }}
            >
              <a
                href="https://wa.me/918921238025"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="bg-accent text-background hover:bg-accent/90">
                  Book a Ride
                </Button>
              </a>
            </motion.div>
          </div>
        </motion.div>

        {/* ✅ Photo Grid with hover animation */}
        <div className="relative mt-12 md:mt-16">
          {/* Mobile horizontal scroll */}
          <div
            className="sm:hidden overflow-x-auto"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            <div className="flex gap-4 px-2">
              {photos.map((p, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + i * 0.2 }}
                  className="rounded-2xl overflow-hidden bg-background/90 shadow-lg ring-1 ring-black/5 hover:-translate-y-2 transition-transform duration-500 flex-shrink-0 w-64"
                >
                  <Image
                    src={p.src}
                    alt={p.alt}
                    width={280}
                    height={420}
                    loading="lazy"
                    className="h-auto w-full aspect-[3/4] object-cover"
                  />
                </motion.div>
              ))}
            </div>
          </div>

          {/* Desktop grid */}
          <div className="hidden sm:grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 sm:gap-6 items-end -mt-8">
            {photos.map((p, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + i * 0.2 }}
                className="rounded-2xl overflow-hidden bg-background/90 shadow-lg ring-1 ring-black/5 hover:-translate-y-2 transition-transform duration-500"
              >
                <Image
                  src={p.src}
                  alt={p.alt}
                  width={280}
                  height={420}
                  loading="lazy"
                  className="h-auto w-full aspect-[3/4] object-cover"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* ✅ Hide scrollbar on mobile */}
      <style jsx>{`
        .sm\\:hidden::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}
