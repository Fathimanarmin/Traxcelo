"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const teamMembers = [
  { name: "Arun Jith", field: "Managing Director", image: "/images/arun.png" },
  { name: "Noushad", field: "Manager", image: "/images/noushad.jpg" },
  { name: "Shihab", field: "Assistant Manager", image: "/images/team/shihab.jpg" },
  { name: "AnilKumar T P", field: "Field Assistant", image: "/images/anil.png" },
  { name: "Sinesh", field: "Field Assistant & Tourism Badge Driver", image: "/images/sinesh.jpg" },
  { name: "Jaseel", field: "Field Assistant & Tourism Badge Driver", image: "/images/team/jaseel.jpg" },
  { name: "Krishnan", field: "Field Assistant & Tourism Badge Driver", image: "/images/team/krishnan.jpg" },
];

export default function TeamMembers() {
  return (
    <div id="teamMembers" className="max-w-6xl mx-auto px-4 py-16">
      {/* Heading */}
      <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-center text-black">
        Our <span className="text-primary">Team</span>{" "}
        <span className="text-secondary">Members</span>
      </h2><br/>
      <div className="h-1 w-20 bg-secondary rounded-full mx-auto mb-10" />

      {/* Team Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {teamMembers.map((member, index) => (
          <motion.div
  key={index}
  initial={{ opacity: 0, y: 50 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: index * 0.15, duration: 0.6 }}
  whileHover={{
    scale: 1.05,
    boxShadow: "0 15px 30px rgba(0,0,0,0.2)",
  }}
  className="relative overflow-hidden rounded-2xl shadow-lg cursor-pointer group h-72 sm:h-80"
>
  {/* Full Image Background */}
  <Image
    src={member.image}
    alt={member.name}
    fill
    className="object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
  />

  {/* Dark gradient overlay for text readability */}
  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent transition-all duration-500 group-hover:from-black/90 group-hover:via-black/60" />

  {/* Text inside image */}
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
    </div>
  );
}
