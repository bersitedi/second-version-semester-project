import React from "react";
import HeroPage from "./container/HeroPage";
import AboutUs from "./container/AboutUs";
import SpecialOffers from "./container/SpecialOffers";
import StaysComponent from "./container/StaysComponent";
import ContactUs from "./container/ContactUs";
import Footer from "../components/Footer";

const HomePage = () => {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div className="overflow-x-hidden">
      <HeroPage scrollToSection={scrollToSection} />
      <SpecialOffers scrollToSection={scrollToSection} />
      <AboutUs scrollToSection={scrollToSection} />
      <StaysComponent scrollToSection={scrollToSection} />
      <ContactUs scrollToSection={scrollToSection} />
      <Footer />
    </div>
  );
};

export default HomePage;
