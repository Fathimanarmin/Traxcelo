"use client";

import Hero from "@/components/hero"
import Navbar from "@/components/navbar"
import About from "@/components/about"
import TeamMembers from "@/components/TeamMembers"
import Services from "@/components/services"
import WhyChooseUs from "@/components/why-choose-us"
import Contact from "@/components/contact"
import Footer from "@/components/footer"
import Loading from "@/components/loading"
import AchievementPage from "@/components/AchievementPage";
import { useState, useEffect } from "react";

export default function HomePage() {

   const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 3100);
    return () => clearTimeout(timer);
  }, []);

  return (

    <div>
      {isLoading && <Loading />}
      {!isLoading && (
        <>
          <Navbar />
      <Hero />
      <About />
      <Services/>
      <TeamMembers />
      <AchievementPage/>
      <WhyChooseUs />
      <Contact />
      <Footer />
        </>
      )}
    </div>
  );
}


