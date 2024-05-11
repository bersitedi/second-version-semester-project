import React from "react";
import { Link } from "react-router-dom";

const AboutUs = () => {
  return (
    <section className="about-section py-12 px-4 lg:px-0">
      <div className="container px-8 mx-auto flex flex-col lg:flex-row items-center justify-center">
        <div className="lg:w-1/2 lg:pr-8 mb-8 lg:mb-0">
          <div className="text-start">
            <h4 className="text-xl text-blue-600 font-bold mb-2">About Us</h4>
            <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold mb-4">
              It's Better to Travel Well Than to Arrive
            </h2>
            <p className="text-md mb-3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              vehicula urna sit amet consequat rutrum. Duis scelerisque
              facilisis nunc, eget eleifend arcu elementum non. Vivamus eget
              magna in lectus vehicula maximus id at libero. Aliquam in massa id
              metus congue suscipit vel ac dui. Suspendisse potenti.
            </p>
            <p className="text-md mb-5">
              Fusce quis neque non tellus aliquet vehicula nec vel odio. Morbi
              blandit justo non ultrices mattis. Proin ullamcorper, ipsum et
              accumsan hendrerit, nulla justo congue metus, id aliquet ligula
              mauris nec turpis.
            </p>
            <Link
              to="about"
              className="bg-blue-600 py-2 px-4 rounded-md hover:bg-blue-500 text-white font-bold"
            >
              Learn more
            </Link>
          </div>
        </div>

        <div className="lg:w-1/2 flex justify-center">
          <div className="mr-5">
            <img
              src="https://images.unsplash.com/photo-1508459855340-fb63ac591728?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="About Image 1"
              className="w-[260px] h-[370px] object-cover rounded-lg"
            />
          </div>
          <div className="lg:mt-10">
            <img
              src="https://plus.unsplash.com/premium_photo-1673292293042-cafd9c8a3ab3?q=80&w=400&h=400&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="About Image 2"
              className="w-[300px] h-[400px] object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
