

"use client";

import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { MessageCircle } from "lucide-react";

// 🧩 Define types for tours
type TourDay = { name: string; img: string };
type TourLocation = { [day: string]: TourDay[] };
type Tours = Record<"bathery" | "kalpetta", TourLocation>;

export default function WayanadServices() {
  const [selectedService, setSelectedService] = useState("wayanad");
  const [selectedSub, setSelectedSub] = useState("bathery"); // For Tour
  const [selectedDay, setSelectedDay] = useState("day1"); // For Tour days

  const services = [
    { id: "wayanad", name: "Wayanad Sightseeing" },
    { id: "tour", name: "Tour Operating" },
    { id: "resort", name: "Resort & Hotel Booking" },
    { id: "truck", name: "Trekking Tour Packages" },
    { id: "driver", name: "Call Driver & Guide" },
  ];

  const whatsappMessage = (msg: string) => {
    const phone = "+91 99613 20536";
    const encodedMsg = encodeURIComponent(msg);
    window.open(`https://wa.me/${phone}?text=${encodedMsg}`, "_blank");
  };

  const tours: Tours = {
    bathery: {
      day1: [
        { name: "Banasura Dam", img: "banasura-sagar-dam.jpg" },
        { name: "MeenMutty Waterfalls", img: "meen.jpg" },
        { name: "Spices Garden", img: "spices garden.png" },
        { name: "Karlad Lake", img: "karlad-lake.png" },
        { name: "Pookode Lake", img: "pookode-lake.jpg" },
        { name: "Enooru", img: "enooru.jpg" },
        { name: "Lakkidi View Point", img: "Lakkidi.jpg" },
        { name: "Honey Museum", img: "honey.jpg" },
      ],
      day2: [
        { name: "Attamala Glass Bride", img: "attamala.jpg" },
        { name: "Soochipara Waterfalls", img: "soochipara.avif" },
        { name: "900 Kandi Bridge", img: "900kandi.jpg" },
        { name: "Kanthanpara Waterfalls", img: "kanthanpara-waterfalls.jpg" },
        { name: "Nellarachal View Point", img: "Nellarachal-Viewpoint-.webp" },
        { name: "Karapuzha Dam", img: "karapuzha-dam.jpg" },
      ],
      day3: [
        { name: "Muthanga", img: "view2.jpg" },
        { name: "Kuruvadweep", img: "kuruvadweep.jpg" },
        { name: "Edakkal Caves", img: "edakkal-caves.jpg" },
        { name: "Phantom Rocks", img: "Phantom-Rock.jpg" },
        { name: "Heritage Museum", img: "Heritage_Museum.jpg" },
      ],
    },
    kalpetta: {
      day1: [
        { name: "Banasura Dam", img: "banasura-sagar-dam.jpg" },
        { name: "MeenMutty Waterfalls", img: "meen.jpg" },
        { name: "Karlad Lake", img: "karlad-lake.png" },
        { name: "Spices Garden", img: "spices garden.png" },
        { name: "Pookode Lake", img: "pookode-lake.jpg" },
        { name: "Lakkidi View Point", img: "Lakkidi.jpg" },
      ],
      day2: [
        { name: "Attamala Glass Bride", img: "attamala.jpg" },
        { name: "Soochipara Waterfalls", img: "soochipara.avif" },
        { name: "900 Kandi Bridge", img: "900kandi.jpg" },
        { name: "Kanthanpara Waterfalls", img: "kanthanpara-waterfalls.jpg" },
      ],
      day3: [
        { name: "Muthanga", img: "view2.jpg" },
        { name: "Jain Temple", img: "temple-front-side.jpg" },
        { name: "Edakkal Caves", img: "edakkal-caves.jpg" },
        { name: "Phantom Rocks", img: "Phantom-Rock.jpg" },
        { name: "Karapuzha Dam", img: "karapuzha-dam.jpg" },
      ],
    },
  };

  const perHeadData = [
    { members: 4, price: 600 },
    { members: 8, price: 500 },
    { members: 12, price: 450 },
    { members: 14, price: 400 },
    { members: 20, price: 350 },
    { members: 26, price: 300 },
    { members: 34, price: 350 },
    { members: 49, price: 330 },
  ];

  const serviceDetails: Record<string, { name: string; img: string }[]> = {
    wayanad: [
      { name: "Muthanga Wildlife Sanctuary", img: "view2.jpg" },
      { name: "Chembra Peak", img: "viewpoint.png" },
      { name: "KurumbalaKotta", img: "KURUMBALAKOTTA.jpg" },
      { name: "Neelimala View", img: "Neelimala_View_Point.avif" },
    ],
    resort: [
      { name: "Luxury Resort", img: "resort1.jpg" },
      { name: "Budget Hotel", img: "resort2.jpg" },
      { name: "Wayanad Stay", img: "resort3.jpg" },
    ],
    truck: [
      { name: "Scenic Treck Tour", img: "truck1.jpg" },
      { name: "Adventure Trail", img: "truck2.jpg" },
      { name: "Hilly Routes", img: "truck3.jpg" },
    ],
    driver: [
      { name: "Professional Driver", img: "driver1.jpg" },
      { name: "Local Guide", img: "driver2.jpg" },
      { name: "Friendly Service", img: "driver.jpg" },
    ],
  };

  const renderTourContent = () => {
    if (selectedSub === "perhead") {
      return (
        <motion.div
          key="perhead"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="flex gap-6 overflow-x-auto py-6 px-4 scrollbar-none"
        >
          {perHeadData.map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 0.98 }}
              className="flex-shrink-0 rounded-3xl p-8 shadow-lg text-center w-80"
            >
              <p className="text-secondary text-2xl font-bold font-serif">
                1-{item.members} Members
              </p>
              <p className="mt-3 text-primary">₹{item.price}</p>
              <Button
                onClick={() =>
                  whatsappMessage(
                    `Hi! I want to book the Per Head package for 1-${item.members} member(s).`
                  )
                }
                className="bg-green-600 hover:bg-green-700 text-white mt-4 w-full"
              >
                <MessageCircle /> Book Now
              </Button>
            </motion.div>
          ))}
        </motion.div>
      );
    } else {
      //  Safe key access using keyof
      const location = tours[selectedSub as keyof Tours];
      const dayKeys = Object.keys(location);

      return (
        <div className="mt-6">
          <div className="flex justify-center gap-4 mb-6">
            {dayKeys.map((day) => (
              <Button
                key={day}
                variant={selectedDay === day ? "default" : "outline"}
                onClick={() => setSelectedDay(day)}
                className={`${
                  selectedDay === day
                    ? "bg-yellow-500 text-black "
                    : "text-yellow-400 border-yellow-400"
                }`}
              >
                {day.charAt(0).toUpperCase() + day.slice(1)}
              </Button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={selectedDay}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="flex gap-6 overflow-x-auto py-6 px-4 scrollbar-none"
            >
              {location[selectedDay]?.map((place, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 0.98 }}
                  className="relative flex-shrink-0 rounded-3xl shadow-lg overflow-hidden w-80"
                >
                  <Image
                    src={`/images/${place.img}`}
                    alt={place.name}
                    width={450}
                    height={300}
                    className="object-cover w-full h-56 transition-transform duration-500"
                  />
                  <div className="absolute bottom-4 left-4 text-white font-semibold text-lg">
                    {place.name}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      );
    }
  };

  const renderServiceContent = () => {
    switch (selectedService) {
      case "wayanad":
      case "resort":
      case "truck":
      case "driver":
        return (
          <motion.div
            key={selectedService}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            className="text-center space-y-6"
          >
            <h2 className="font-serif text-3xl sm:text-4xl font-bold mb-4">
              {selectedService === "wayanad" && (
                <>
                  <span className="text-black">Wayanad</span>{" "}
                  <span className="text-secondary">Sightseeing</span>
                </>
              )}
              {selectedService === "resort" && (
                <>
                  <span className="text-black">Resort</span>{" "}
                  <span className="text-primary">&</span>{" "}
                  <span className="text-secondary">Hotel Booking</span>
                </>
              )}
              {selectedService === "truck" && (
                <>
                  <span className="text-black">Trekking</span>{" "}
                  <span className="text-primary">Tour</span>{" "}
                  <span className="text-secondary">Packages</span>
                </>
              )}
              {selectedService === "driver" && (
                <>
                  <span className="text-black">Call Driver</span>{" "}
                  <span className="text-primary">&</span>{" "}
                  <span className="text-secondary">Guide</span>
                </>
              )}
            </h2>

            <p className="text-black max-w-2xl mx-auto">
              {selectedService === "wayanad" &&
                "Explore Wayanad’s natural beauty! Visit Edakkal Caves, Soochipara Waterfalls, Banasura Sagar Dam, Pookode Lake, and more."}
              {selectedService === "resort" &&
                "We provide the best deals for luxurious resorts and budget-friendly hotels in Wayanad."}
              {selectedService === "truck" &&
                "Enjoy adventurous trekking tours through the scenic routes of Wayanad!"}
              {selectedService === "driver" &&
                "Hire professional drivers and local guides for a comfortable and informative travel experience."}
            </p>

            <motion.div className="flex gap-6 overflow-x-auto py-6 px-4 scrollbar-none">
              {serviceDetails[selectedService].map((item, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 0.98 }}
                  className="relative flex-shrink-0 overflow-hidden rounded-3xl shadow-lg w-80"
                >
                  <Image
                    src={`/images/${item.img}`}
                    alt={item.name}
                    width={450}
                    height={300}
                    className="object-cover w-full h-56 transition-transform duration-500"
                  />
                  <div className="absolute bottom-4 left-4 text-white font-semibold text-lg">
                    {item.name}
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <Button
              onClick={() =>
                whatsappMessage(
                  `Hi! I want to know more about ${
                    selectedService === "wayanad"
                      ? "Wayanad Sightseeing"
                      : selectedService === "resort"
                      ? "Resort/Hotel Booking"
                      : selectedService === "truck"
                      ? "Trekking Tour Packages"
                      : "Driver & Guide Service"
                  }.` 
                )
              }
              className="bg-green-600 hover:bg-green-700 text-white flex gap-2 mx-auto mt-6"
            >
              <MessageCircle /> Chat on WhatsApp
            </Button>
          </motion.div>
        );

      case "tour":
        return (
          <motion.div
            key="tour"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="text-center space-y-6"
          >
            <h2 className="font-serif text-3xl sm:text-4xl font-bold mb-4 text-black">
              Our <span className="text-primary">Tour</span>{" "}
              <span className="text-secondary">Operating</span>
            </h2>
            <br />

            <div className="flex gap-3 overflow-x-auto justify-center scrollbar-none">
              {["bathery", "kalpetta", "perhead"].map((sub) => (
                <Button
                  key={sub}
                  variant={selectedSub === sub ? "default" : "outline"}
                  onClick={() => {
                    setSelectedSub(sub);
                    setSelectedDay("day1");
                  }}
                  className={`relative overflow-hidden px-6 py-2 font-semibold transition-all duration-300 ${
                    selectedSub === sub
                      ? "bg-secondary text-black"
                      : " text-yellow-400 border-yellow hover:text-black hover:bg-yellow-400 hover:border-yellow-400 hover:scale-105"
                  }`}
                >
                  <span className="relative z-10">
                    {sub === "bathery"
                      ? "Bathery"
                      : sub === "kalpetta"
                      ? "Kalpetta"
                      : "Per Head"}
                  </span>
                </Button>
              ))}
            </div>

            <div>{renderTourContent()}</div>
          </motion.div>
        );

      default:
        return null;
    }
  };

  return (
    <section className="py-12 px-4 bg-muted/30 text-white">
      <div className="max-w-6xl mx-auto text-center mb-8">
        <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
          Our <span className="text-primary">Services</span>
        </h2>
        <div className="h-1 w-20 bg-secondary rounded-full mx-auto mb-6" />

        <div className="flex gap-3 overflow-x-auto justify-center scrollbar-none">
          {services.map((service) => (
            <Button
              key={service.id}
              variant={selectedService === service.id ? "default" : "outline"}
              onClick={() => setSelectedService(service.id)}
              className={`${
                selectedService === service.id
                  ? "bg-yellow-500 text-black"
                  : "text-yellow-400 border-yellow-400 hover:bg-yellow-400 hover:text-black"
              }`}
            >
              {service.name}
            </Button>
          ))}
        </div>
      </div>

      <AnimatePresence mode="wait">{renderServiceContent()}</AnimatePresence>
    </section>
  );
}
