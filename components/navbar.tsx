"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#about", label: "About" },
    { href: "#services", label: "Services" },
    { href: "#teamMembers", label: "Team Members" },
    { href: "#AchievementPage", label: "Achievement" },
    { href: "#why-choose-us", label: "Why Us" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "backdrop-blur-md bg-black border-b border-black shadow-md"
          : "bg-black border-b border-transparent"
      }`}
      aria-label="Primary"
    >
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-2 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="#top"
          className="flex items-center gap-3"
          aria-label="TRAXELO home"
        >
          <Image
            src="/images/traxelo-logo.png"
            alt="TRAXELO logo"
            width={50}
            height={50}
            className="w-24 h-20"
            priority
          />
          <span className="font-serif font-bold text-lg tracking-wide text-white"></span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden sm:flex items-center gap-6 text-sm font-medium">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-gray-300 hover:text-accent transition-colors duration-300 relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[2px] after:bg-accent after:transition-all hover:after:w-full"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-2">
          <a href="#contact">
            <Button className="bg-accent text-black px-4 py-1.5 font-semibold rounded-md shadow-md transition-all duration-300 hover:bg-yellow-500 hover:text-white hover:scale-105 hover:shadow-xl">
              Book a Ride
            </Button>
          </a>

          {/* Mobile Menu */}
          <div className="sm:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="text-white">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>

              <SheetContent
                side="right"
                className="bg-[#1c1c1c] text-white p-6 w-64"
              >
                <div className="flex justify-between items-center mb-6">
                  <span className="font-serif font-bold text-xl">TRAXELO</span>
                  <SheetTrigger asChild>
                    <Button variant="ghost" size="icon" className="text-white">
                      <X className="h-6 w-6" />
                    </Button>
                  </SheetTrigger>
                </div>
                <nav className="flex flex-col gap-5 text-lg">
                  {navLinks.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      className="hover:text-accent transition-colors duration-300"
                    >
                      {link.label}
                    </a>
                  ))}
                  <a href="#contact" className="mt-4">
                    <Button className="w-full bg-accent text-black px-4 py-2 font-semibold rounded-md shadow-md transition-all duration-300 hover:bg-yellow-500 hover:text-white hover:scale-105 hover:shadow-xl">
                      Book a Ride
                    </Button>
                  </a>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>
    </header>
  );
}
