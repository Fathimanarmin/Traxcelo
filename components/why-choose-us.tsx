"use client"

import { useEffect, useRef, useState } from "react"
import { DollarSign, Sparkles, Headphones, Map } from "lucide-react"

const reasons = [
  {
    icon: DollarSign,
    title: "Affordable Pricing",
    description: "Competitive rates with transparent pricing and no hidden charges. Get the best value for your money.",
  },
  {
    icon: Sparkles,
    title: "Clean & Well-Maintained",
    description:
      "All our vehicles are regularly serviced, sanitized, and maintained to the highest standards of cleanliness.",
  },
  {
    icon: Headphones,
    title: "24/7 Customer Support",
    description: "Round-the-clock assistance for any queries or emergencies. We're always here when you need us.",
  },
  {
    icon: Map,
    title: "Local Expertise",
    description: "Deep knowledge of Wayanad's terrain and best routes. Experience the destination like a local.",
  },
]

export default function WhyChooseUs() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="why-choose-us" ref={sectionRef} className="py-20 sm:py-32 bg-muted/30 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className={`text-center mb-16 ${isVisible ? "animate-fade-in-up opacity-0" : "opacity-0"}`}>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Why Choose <span className="text-secondary">TRAXELO</span>
          </h2>
          <div className="h-1 w-20 bg-secondary rounded-full mx-auto mb-6" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            We're committed to making your Wayanad journey exceptional with our unmatched service and dedication.
          </p>
        </div>

        {/* Reasons Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <div
              key={reason.title}
              className={`group text-center space-y-4 p-6 rounded-2xl hover:bg-card transition-all duration-300 hover:shadow-lg ${
                isVisible ? "animate-fade-in-up opacity-0" : "opacity-0"
              } delay-${(index + 1) * 100}`}
            >
              {/* Icon */}
              <div className="mx-auto w-16 h-16 rounded-full bg-gradient-to-br from-secondary/20 to-primary/20 flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                <reason.icon className="w-8 h-8 text-secondary group-hover:text-primary transition-colors" />
              </div>

              {/* Title */}
              <h3 className="font-serif text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                {reason.title}
              </h3>

              {/* Description */}
              <p className="text-muted-foreground leading-relaxed text-sm">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
