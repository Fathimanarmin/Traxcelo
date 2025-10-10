// components/TeamMembers.tsx
"use client";

import { motion } from "framer-motion";

const teamMembers = [
  { name: "Alice Johnson", field: "Frontend Developer" },
  { name: "Bob Smith", field: "Backend Developer" },
  { name: "Clara Lee", field: "UI/UX Designer" },
  { name: "David Kim", field: "Project Manager" },
];

export default function TeamMembers() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold mb-8 text-center">Our Team</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {teamMembers.map((member, index) => (
          <motion.div
            key={index}
            className="bg-white rounded-xl shadow-md p-6 text-center border border-gray-200 cursor-pointer"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, type: "spring", stiffness: 100 }}
            whileHover={{
              scale: 1.05,
              borderColor: "#FFD700", // gold color
              boxShadow: "0 8px 20px rgba(0,0,0,0.15)",
            }}
          >
            <h3 className="text-xl font-bold text-indigo-600 mb-2">
              {member.name}
            </h3>
            <p className="text-gray-600">{member.field}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
