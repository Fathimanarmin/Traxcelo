
"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Preloader() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(false), 4000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-black"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
        >
          {/* Background zoom effect */}
          <motion.div
            className="absolute inset-0"
            initial={{ scale: 1 }}
            animate={{ scale: 1.05 }}
            transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
          >
            <Image
              src="/images/waya.png"
              alt="Wayanad Landscape"
              fill
              className="object-cover opacity-80"
              priority
            />
          </motion.div>

          {/* Overlay Gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

          {/* Logo and Text */}
          <motion.div className="relative z-10 flex flex-col items-center px-4">
            {/* Big Logo with bounce */}
            <motion.div
              className="relative w-100 h-65 "
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 120, damping: 10 }}
            >
              <Image
                src="/images/traxelo-logo.png"
                alt="TRAXELO"
                fill
                className="object-contain"
              />
            </motion.div>

            {/* "Explore Wayanad" fades in */}
            <motion.h1
              className="text-4xl sm:text-6xl font-serif font-bold text-white text-center -mt-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, type: "spring", stiffness: 100, damping: 12 }}
            >
              Explore <span className="text-white">Wayanad with</span>
            </motion.h1>

            {/* TRAXELO zoom-out effect */}
            <motion.h1
              className="text-5xl sm:text-7xl font-serif font-extrabold text-secondary text-center mt-5"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1.2, opacity: 1 }}
              transition={{
                delay: 1.5,
                type: "spring",
                stiffness: 150,
                damping: 10,
              }}
              whileTap={{ scale: 1.1 }}
            >
              TRAXELO
            </motion.h1>

            {/* Subtext */}
            <motion.p
              className="text-gray-300 text-lg sm:text-xl mt-5 text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.2, type: "spring", stiffness: 80, damping: 14 }}
            >
              The green paradise of Kerala 🌿
            </motion.p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
