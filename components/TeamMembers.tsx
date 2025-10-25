"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect } from "react";

const teamMembers = [
  { name: "Arun Jith", field: "Managing Director", image: "/images/arun.png" , alt:""},
  { name: "Noushad", field: "Manager", image: "/images/noushad.jpg", alt:"" },
  { name: "Shihab", field: "Assistant Manager", image: "/" , alt:""},
  {
    name: "AnilKumar T P",
    field: "Field Assistant",
    image: "/images/anil.png",
    alt:""
  },
  {
    name: "Sinesh",
    field: "Field Assistant & Tourism Badge Driver",
    image: "/images/sinesh.jpg",
    alt:""
  },
  {
    name: "Jaseel",
    field: "Field Assistant & Tourism Badge Driver",
    image: "/",
    alt:""
  },
  {
    name: "Krishnan",
    field: "Field Assistant & Tourism Badge Driver",
    image: "/images/krishnan.png",
    alt:""
  },
];

export default function TeamMembers() {
  useEffect(() => {
    // Remove accidental text cursor on load
    if (document.activeElement instanceof HTMLElement) {
      document.activeElement.blur();
    }
  }, []);
  return (
    <div id="teamMembers" className="max-w-6xl mx-auto px-4 py-16 mt-8">
      {/* ========================= Heading Section ========================= */}
      <div className="relative max-w-3xl mx-auto flex items-center justify-center gap-6 mb-10">
        {/* Title text */}
        <div style={{ textAlign: "center" }}>
          <h2 className="select-none pointer-events-none font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-center text-black">
            Our <span className="text-primary">Team</span>{" "}
            <span className="text-secondary">Members</span>
          </h2>

          {/* Underline bar */}
          <div
            style={{
              height: 6,
              width: 88,
              backgroundColor: "#b8860b", // same gold accent
              margin: "14px auto 0",
              borderRadius: 8,
              transition: "none",
              animation: "none",
            }}
          />
        </div>
      </div>

      {/* ========================= Team Cards Section ========================= */}
      <div
        className={`flex overflow-x-auto md:overflow-visible gap-6 pb-4 md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 scrollbar-hide`}
      >
        {teamMembers.map((member, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: index * 0.15, duration: 0.6 }}
            whileHover={{
              scale: 1.05,
              boxShadow: "0 15px 30px rgba(0,0,0,0.2)",
            }}
            className="relative min-w-[250px] sm:min-w-[280px] md:min-w-0 overflow-hidden rounded-2xl shadow-lg cursor-pointer group h-72 sm:h-80"
          >
            <Image
              src={member.image}
              alt={member.name}
              fill
              className="object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent transition-all duration-500 group-hover:from-black/90 group-hover:via-black/60" />

            <div className="absolute bottom-0 w-full text-center p-4">
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-1 tracking-wide drop-shadow-md">
                {member.name}
              </h3>
              <p className="text-gray-200 text-sm sm:text-base drop-shadow-md">
                {member.field}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* ========================= Scrollbar Hide CSS ========================= */}
      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
}
