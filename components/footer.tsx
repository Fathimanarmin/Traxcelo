
"use client"

import Link from "next/link"
import Image from "next/image"
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from "lucide-react"
import { motion, Variants } from "framer-motion"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const popVariants: Variants = {
    hidden: { opacity: 0, scale: 0.7, rotate: -5 },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: { type: "spring", stiffness: 120, damping: 12 },
    },
  }

  const socialVariants: Variants = {
    hidden: { opacity: 0, rotate: -45, scale: 0 },
    visible: (i: number) => ({
      opacity: 1,
      rotate: 0,
      scale: 1,
      transition: { delay: i * 0.2, type: "spring", stiffness: 150, damping: 15 },
    }),
  }

  const bottomBarVariants: Variants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 100 } },
  }

  return (
    <footer className="bg-[#1c1c1c] text-[#f5f5f5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: false }} variants={popVariants} className="space-y-4">
            <div className="relative w-64 h-32 -mt-6 -mt-10">
  <Image
    src="/images/traxelo-logo.png"
    alt="TRAXELO"
    fill
    className="object-contain"
  />
</div>

            <p className="text-[#cccccc] leading-relaxed">
              Your trusted partner for premium travel solutions in Wayanad.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: false }} variants={popVariants}>
            <h3 className="font-semibold text-lg mb-4 text-[#FFD700]">Quick Links</h3>
            <ul className="space-y-2">
              {["Home", "About", "Vehicles", "Why Us", "Contact"].map((link) => (
                <li key={link} className="group">
                  <Link
                    href={`#${link.toLowerCase().replace(" ", "-")}`}
                    className="text-[#cccccc] relative after:absolute after:left-0 after:-bottom-0.5 after:w-0 after:h-[2px] after:bg-[#FFD700] after:transition-all after:duration-300 hover:after:w-full"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: false }} variants={popVariants}>
            <h3 className="font-semibold text-lg mb-4 text-[#FFD700]">Our Services</h3>
            <ul className="space-y-2 text-[#cccccc]">
              {["Wayanad Sightseeing", "Tour Operating", "Resort & Hotel Booking", "Trucking Tour Packages", "Call Driver & Guide"].map((service) => (
                <li key={service} className="relative group after:absolute after:left-0 after:-bottom-0.5 after:w-0 after:h-[2px] after:bg-[#FFD700] after:transition-all after:duration-300 hover:after:w-full">
                  {service}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: false }} variants={popVariants}>
            <h3 className="font-semibold text-lg mb-4 text-[#FFD700]">Contact Us</h3>
            <ul className="space-y-3 text-[#cccccc]">
              <li className="flex items-start gap-2">
                <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5 text-[#FFD700]" />
                <span>Wayanad, Kerala, India - 673591</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-5 h-5 flex-shrink-0 text-[#FFD700]" />
                <span>+91 98765 43210</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-5 h-5 flex-shrink-0 text-[#FFD700]" />
                <span>info@traxelo.com</span>
              </li>
            </ul>

            {/* Social Media */}
            <div className="flex gap-3 mt-6">
              {[{ icon: Facebook, href: "#" }, { icon: Instagram, href: "#" }, { icon: Twitter, href: "#" }].map(
                (social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    custom={index}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false }}
                    variants={socialVariants}
                    className="w-10 h-10 rounded-full bg-[#333333] hover:bg-[#FFD700] flex items-center justify-center transition-all duration-300 hover:scale-125"
                  >
                    <social.icon className="w-5 h-5 text-[#f5f5f5]" />
                  </motion.a>
                )
              )}
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          variants={bottomBarVariants}
          className="pt-8 border-t border-[#444444] flex flex-col sm:flex-row justify-between items-center gap-4 text-[#aaaaaa] text-sm"
        >
          <p className="mt-4">© {currentYear} TRAXELO. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-[#FFD700] transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-[#FFD700] transition-colors">
              Terms of Service
            </Link>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
