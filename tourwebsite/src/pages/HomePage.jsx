import React from "react";
import HeroPage from "./container/HeroPage";
import AboutUs from "./container/AboutUs";
import SpecialOffers from "./container/SpecialOffers";
import StaysComponent from "./container/StaysComponent";
import ContactUs from "./container/ContactUs";

const HomePage = () => {
  return (
    <div>
      <HeroPage />
      <SpecialOffers />
      <AboutUs />
      <StaysComponent />
      <ContactUs />
    </div>
  );
};

export default HomePage;
