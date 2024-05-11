import React from "react";
import { FiArrowRight } from "react-icons/fi";

const StaysComponent = () => {
  return (
    <section className="stays-section py-8 lg:py-12 px-4 lg:px-0" id="stays">
      <div className="container mx-auto lg:px-10">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl font-bold">Accommodations</h2>
            <hr className="border-4 w-32 mt-3 border-blue-600" />
          </div>
        </div>
        <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-start">
          <div className="lg:w-1/2 mb-4 lg:mb-0 lg:mr-4">
            <img
              src="https://plus.unsplash.com/premium_photo-1663013574100-40823db47fcc?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Accommodation"
              className="w-full h-auto  object-cover rounded-lg"
            />
          </div>
          <div className="lg:w-1/2">
            <div className="text-left">
              <div className="lg:-ml-32 bg-blue-500 text-white py-7 pl-8  w-full items-center mb-4">
                <h3 className="text-2xl lg:text-3xl font-bold">
                  Luxurious Stay Experience
                </h3>
                <hr className="border-2 border-white w-20 mt-3 mb-3" />
                <p className="text-lg mb-4 text-gray-200">
                  Immerse yourself in luxury and comfort with our premium
                  accommodations. Each room is meticulously designed to provide
                  the perfect blend of elegance and relaxation.
                </p>
                <p className="text-md text-gray-200">
                  Whether you're seeking a romantic getaway, a family vacation,
                  or a solo adventure, our accommodations cater to every need
                  and preference.
                </p>
              </div>
            </div>
            <div className="h-1/2 text-left">
              <p className="text-lg mb-4 text-gray-600 font-bold">
                Book now and find out one of the best accommodations.
                <br />
                <span className="text-blue-600 text-sm font-semibold">
                  Read more
                  <FiArrowRight className="inline-block ml-1" />
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StaysComponent;
