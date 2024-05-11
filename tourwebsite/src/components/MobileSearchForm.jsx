import React from "react";
import { FiMapPin, FiCalendar, FiUsers } from "react-icons/fi";

const MobileSearchForm = () => {
  return (
    <div className="lg:hidden absolute -bottom-[200px] md:bottom-0 w-full p-4 bg-gray-50">
      <div className="flex flex-col md:flex-row items-center justify-center">
        <div className="flex flex-col items-center justify-center mb-4 md:mb-0 md:mr-4 relative">
          <label htmlFor="location" className="mb-1">
            Where:
          </label>
          <div className="relative mr-3">
            <input
              type="text"
              id="location"
              name="location"
              className="border border-gray-400 rounded-md px-3 py-1 pl-10"
              placeholder="Enter destination"
            />
            <FiMapPin className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-400" />
          </div>
        </div>

        <div className="flex flex-col items-center justify-center mb-4 md:mb-0 md:mr-4 relative">
          <label htmlFor="date" className="mb-1">
            Date:
          </label>
          <div className="relative mr-3">
            <input
              type="date"
              id="date"
              name="date"
              className="border border-gray-400 rounded-md px-3 py-1 pl-10"
            />
            <FiCalendar className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-400" />
          </div>
        </div>

        <div className="flex flex-col items-center justify-center mb-4 md:mb-0 relative">
          <label htmlFor="guests" className="mb-1">
            Guests:
          </label>
          <div className="relative">
            <input
              type="number"
              id="guests"
              name="guests"
              min="1"
              className="border border-gray-400 rounded-md px-3 py-1"
            />
            <FiUsers className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-400" />
          </div>
        </div>
      </div>

      <button className="bg-blue-600 text-sm text-white font-bold hover:bg-blue-500 transition-colors shadow-md shadow-gray-400 px-10 py-2 mt-4">
        SEARCH PLANE
      </button>
    </div>
  );
};

export default MobileSearchForm;
