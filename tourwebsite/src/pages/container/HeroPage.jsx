import React, { useState } from "react";
import { FaFacebook, FaTwitter, FaYoutube } from "react-icons/fa";
import background from "../../assets/try.mp4";
import { Link } from "react-router-dom";
import SearchForm from "../../components/SearchForm";
import MobileSearchForm from "../../components/MobileSearchForm";

const HeroPage = ({ scrollToSection }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleNavLinkClick = (id) => {
    scrollToSection(id);

    setMenuOpen(false);
  };
  return (
    <header className="relative">
      <div className="flex items-center absolute top-3 md:top-8 left-3 md:left-8 p-4 z-10">
        <Link to="#" className="text-white hover:text-gray-300">
          <FaFacebook size={32} className="bg-blue-600 p-2 rounded-full" />
        </Link>
        <Link to="#" className="text-white hover:text-gray-300 ml-4">
          <FaTwitter size={32} className="bg-blue-600 p-2 rounded-full" />
        </Link>
        <Link to="#" className="text-white hover:text-gray-300 ml-4">
          <FaYoutube size={32} className="bg-blue-600 p-2 rounded-full" />
        </Link>
      </div>

      <nav className="flex justify-center absolute top-[90px] left-1/2 transform -translate-x-1/2 p-4 z-10">
        <ul
          className={`flex space-x-10 lg:flex lg:space-x-10 ${
            menuOpen ? "flex-col" : "hidden lg:flex"
          }`}
        >
          <li>
            <Link
              to="#"
              className="text-white font-bold text-xl hover:text-blue-500"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="#about"
              className="text-white font-bold text-xl hover:text-blue-500"
              onClick={() => handleNavLinkClick("about")}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="#stays"
              className="text-white font-bold text-xl hover:text-blue-500"
              onClick={() => handleNavLinkClick("stays")}
            >
              Stays
            </Link>
          </li>
          <li>
            <Link
              to="#flight"
              className="text-white font-bold text-xl hover:text-blue-500"
              onClick={() => handleNavLinkClick("flight")}
            >
              Flights
            </Link>
          </li>
          <li>
            <Link
              to="#destination"
              className="text-white font-bold text-xl hover:text-blue-500"
              onClick={() => handleNavLinkClick("destination")}
            >
              Destinations
            </Link>
          </li>
          <li>
            <Link
              to="#contact"
              className="text-white font-bold text-xl hover:text-blue-500"
              onClick={() => handleNavLinkClick("contact")}
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>

      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-start z-10 text-white lg:text-left">
        <div className="flex flex-col w-[300px] md:hidden">
          <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold mb-4">
            Explore the World
          </h1>
          <p className="text-md md:text-lg lg:text-xl mb-6">
            Discover amazing destinations and create unforgettable memories.
          </p>
          <Link
            to="#"
            className="inline-block px-8 py-2 bg-blue-600 font-semibold rounded-md hover:bg-blue-500 transition duration-300"
          >
            Learn More
          </Link>
        </div>
        <div className="hidden md:block">
          <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold mb-4">
            Explore the World
          </h1>
          <p className="text-md md:text-lg lg:text-xl mb-6">
            Discover amazing destinations and create unforgettable memories.
          </p>
          <Link
            to="#"
            className="inline-block px-8 py-2 bg-blue-600 font-semibold rounded-md hover:bg-blue-500 transition duration-300"
          >
            Learn More
          </Link>
        </div>
      </div>

      <div
        className={`lg:hidden fixed top-0 right-0 h-full bg-black z-20 w-full ${
          menuOpen ? "block" : "hidden"
        }`}
      >
        <ul className="flex flex-col justify-center h-full">
          <li>
            <Link
              to="#"
              className="block text-white py-4 px-8 hover:bg-gray-800"
              onClick={() => handleNavLinkClick("home")}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="#about"
              className="block text-white py-4 px-8 hover:bg-gray-800"
              onClick={() => handleNavLinkClick("about")}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="#stays"
              className="block text-white py-4 px-8 hover:bg-gray-800"
              onClick={() => handleNavLinkClick("stays")}
            >
              Stays
            </Link>
          </li>
          <li>
            <Link
              to="#flight"
              className="block text-white py-4 px-8 hover:bg-gray-800"
              onClick={() => handleNavLinkClick("flight")}
            >
              Flights
            </Link>
          </li>
          <li>
            <Link
              to="#destination"
              className="block text-white py-4 px-8 hover:bg-gray-800"
              onClick={() => handleNavLinkClick("destination")}
            >
              Destinations
            </Link>
          </li>
          <li>
            <Link
              to="#contact"
              className="block text-white py-4 px-8 hover:bg-gray-800"
              onClick={() => handleNavLinkClick("contact")}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>

      <div
        className="lg:hidden absolute top-4 right-4 cursor-pointer z-20"
        onClick={toggleMenu}
      >
        {menuOpen ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        )}
      </div>

      <video
        autoPlay
        muted
        loop
        id="myVideo"
        className="w-full h-[560px] object-cover z-0"
      >
        <source src={background} type="video/mp4" />
        Your browser does not support HTML5 video.
      </video>

      <SearchForm />
      <MobileSearchForm />
    </header>
  );
};

export default HeroPage;
