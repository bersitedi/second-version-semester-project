import React from "react";
import { FiPercent, FiMapPin, FiCalendar } from "react-icons/fi";

const SpecialOffers = () => {
  const offers = [
    {
      destination: "Norwegian Fjords, Norway",
      offer: "Up to 30% off",
      image:
        "https://images.unsplash.com/photo-1696537380062-e6275d9a3c8e?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      destination: "Tokyo",
      offer: "Great Barrier Reef, Australia:",
      image:
        "https://images.unsplash.com/photo-1587139223877-04cb899fa3e8?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      destination: "Amazon Rainforest, South America",
      offer: "20% off on tours",
      image:
        "https://plus.unsplash.com/premium_photo-1687879820677-d965e81d3270?q=80&w=1478&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  return (
    <section className="py-12 mt-16  px-4 lg:px-0">
      <div className="container mx-auto px-10">
        <div className="flex justify-between items-start mb-6">
          <div className="w-1/2">
            <h2 className="text-3xl font-bold text-start">Special Offers</h2>
            <hr className="border-4 w-20 mt-3 border-blue-600" />
          </div>
          <div className="w-1/3">
            <p className="text-sm text-gray-600 text-start">
              The point of choosing our website is to get special discounts and
              amazing destinations to make your travel worth the while.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {offers.map((offer, index) => (
            <div key={index} className="relative">
              <img
                src={offer.image}
                alt={offer.destination}
                className="w-full h-[260px] object-cover rounded-lg mb-4"
              />
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-white bg-opacity-75 rounded-b-lg">
                <h3 className="text-lg font-semibold">{offer.destination}</h3>
                <div className="flex justify-between items-center mt-2">
                  <div className="flex items-center pb-5">
                    <FiPercent className="text-blue-500 mr-2" />
                    <span>{offer.offer}</span>
                  </div>
                  <div className="flex items-center pb-5">
                    <FiMapPin className="text-gray-500 mr-2" />
                    <FiCalendar className="text-gray-500" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpecialOffers;
