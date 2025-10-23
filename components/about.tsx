

"use client";

import Image from "next/image";
import { Shield, Clock, Award, MapPin } from "lucide-react";
import { motion, Variants } from "framer-motion";

export default function About() {
  const features = [
    { icon: Shield, label: "Reliable & Safe" },
    { icon: Clock, label: "24/7 Service" },
    { icon: Award, label: "Premium Quality" },
    { icon: MapPin, label: "Local Expertise" },
  ];

  // Motion Variants
  const containerVariants: Variants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.2 } },
  };

  const textVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const featureVariants: Variants = {
    hidden: { opacity: 0, y: 20, scale: 0.8 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { type: "spring", stiffness: 200, damping: 20 },
    },
  };

  const imageVariants: Variants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 1 } },
  };

  return (
    <section id="about" className="py-20 sm:py-32 bg-background relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text Content */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            variants={containerVariants}
            className="space-y-6"
          >
            <motion.h2
              variants={textVariants}
              className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-tight"
            >
              Experience <span className="text-primary">Wayanad</span>
              <br />
              <span className="text-secondary">Like Never Before</span>
            </motion.h2>

            <motion.div
              variants={textVariants}
              className="h-1 w-20 bg-secondary rounded-full"
            />

            <motion.p
              variants={textVariants}
              className="text-lg text-muted-foreground leading-relaxed"
            >
              Welcome to TRAXELO, your gateway to the mesmerizing beauty of
              Wayanad! Nestled amidst lush hills, cascading waterfalls, and
              verdant forests, Wayanad is a land where nature whispers its
              secrets and every corner holds a new adventure.
            </motion.p>

            <motion.p
              variants={textVariants}
              className="text-lg text-muted-foreground leading-relaxed"
            >
              At TRAXELO, we are passionate about making your journey through
              this enchanting region truly unforgettable. From the serene
              landscapes to the vibrant wildlife and misty valleys, every moment
              in Wayanad promises to captivate your senses and create memories
              that last a lifetime. Step into Wayanad with TRAXELO, and let the
              magic of nature, the thrill of exploration, and the tranquility of
              the hills turn your travel experience into an extraordinary
              journey.
            </motion.p>

            {/* Feature Icons */}
            <motion.div
              variants={containerVariants}
              className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6"
            >
              {features.map((feature) => (
                <motion.div
                  key={feature.label}
                  variants={featureVariants}
                  className="flex flex-col items-center text-center space-y-2"
                >
                  <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center group hover:bg-secondary transition-colors duration-300">
                    <feature.icon className="w-6 h-6 text-secondary group-hover:text-secondary-foreground transition-colors" />
                  </div>
                  <span className="text-sm font-medium text-foreground">
                    {feature.label}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            variants={imageVariants}
            className="relative"
          >
            <div className="relative h-[400px] sm:h-[500px] lg:h-[600px] rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="/images/wayanad.jpg"
                alt="TRAXELO Vehicles in Wayanad"
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
            </div>
            {/* Decorative Elements */}
            <div className="absolute -bottom-6 -right-6 w-40 h-40 bg-secondary/20 rounded-full blur-3xl -z-10" />
            <div className="absolute -top-6 -left-6 w-40 h-40 bg-primary/10 rounded-full blur-3xl -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}


