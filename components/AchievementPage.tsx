"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import React from "react";

export default function AchievementPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-muted/20 via-white to-muted/30 flex items-start justify-center px-6 sm:px-12 py-20">
      <motion.div
        className="max-w-6xl w-full"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* --- Header --- */}
        <header className="mb-16 text-center">
          <motion.h1
            className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-800"
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Achievements
          </motion.h1>
          <motion.div
            className="h-1 w-28 bg-yellow-500 rounded-full mx-auto mt-5"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          />
          <p className="mt-4 text-gray-600 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            A showcase of milestones that reflect dedication, teamwork, and
            growth — each one marking a step forward.
          </p>
        </header>

        {/* --- Achievement Cards --- */}
        <section className="grid grid-cols-1 sm:grid-cols-2 gap-10 mt-10">
          {/* Card 1 */}
          <motion.article
            className="group bg-white/80 backdrop-blur-md rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl border border-gray-100 transition-all duration-500"
            whileHover={{ scale: 1.03 }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.7 }}
          >
            <div className="relative h-80 w-full overflow-hidden">
              <Image
                src="/images/achievement1.jpg"
                alt="Achievement 1"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                sizes="(max-width: 640px) 100vw, 50vw"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />
            </div>
            <div className="p-6 text-center">
              <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                KITTS Certificate
              </h2>
              <p className="text-gray-600 text-sm leading-relaxed">
                We are proud to share that our Field Assistant, Anil Kumar T.
                P., has successfully completed a one-day orientation program for
                tourist taxi drivers.
              </p>
            </div>
          </motion.article>

          {/* Card 2 */}
          <motion.article
            className="group bg-white/80 backdrop-blur-md rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl border border-gray-100 transition-all duration-500"
            whileHover={{ scale: 1.03 }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.7 }}
          >
            <div className="relative h-80 w-full overflow-hidden">
              <Image
                src="/images/achievement2.jpg"
                alt="Achievement 2"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                sizes="(max-width: 640px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />
            </div>
            <div className="p-6 text-center">
              <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                KITTS Certificate
              </h2>
              <p className="text-gray-600 text-sm leading-relaxed">
                We are proud to share that our Field Assistant, Anil Kumar T.
                P., has successfully completed a one-day orientation program for
                tourist taxi drivers.
              </p>
            </div>
          </motion.article>
        </section>
      </motion.div>
    </main>
  );
}
