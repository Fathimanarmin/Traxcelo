"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import React from "react";

// AchievementPage.tsx
// Animated version of the Achievement page using Framer Motion

export default function AchievementPage() {
  return (
    <main className="min-h-screen bg-muted/30 flex items-start justify-center p-8">
      <motion.div
        className="max-w-5xl w-full"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      ><br/><br/>
        <header className="mb-8 text-center">
          <motion.h1
            className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4"
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Achievement
          </motion.h1>
          <div className="h-1 w-20 bg-secondary rounded-full mx-auto mb-6" />
        </header>
        <br/><br/><br/>

        

        <section className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-5">
          {/* Card 1 */}
          <motion.article
            className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
            whileHover={{ scale: 1.03 }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            <div className="relative h-72 sm:h-72 w-full">
              <Image
                src={"/images/achievement1.jpg"}
                alt="Achievement 1"
                fill
                sizes="(max-width: 640px) 100vw, 50vw"
                className="object-cover"
                priority
              />
            </div>
            
          </motion.article>

          {/* Card 2 */}
          <motion.article
            className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
            whileHover={{ scale: 1.03 }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
          >
            <div className="relative h-72 sm:h-72 w-full">
              <Image
                src={"/images/achievement2.jpg"}
                alt="Achievement 2"
                fill
                sizes="(max-width: 640px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            {/* <div className="p-4">
              <h2 className="text-xl font-semibold">Achievement Title 2</h2>
              <p className="mt-1 text-gray-600 text-sm">Short description about the second achievement. Add date or any detail here.</p>
            </div> */}
          </motion.article>
        </section>

       
      </motion.div>
    </main>
  );
}
