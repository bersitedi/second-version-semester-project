import React from "react";

const ContactUs = () => {
  return (
    <div className="">
      <section className="contact-section lg:py-12 px-4 lg:px-0" id="contact">
        <div className="container mx-auto lg:px-10">
          <h2 className="text-3xl font-bold lg:mb-6 text-left">
            Contact Us for More Information
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex flex-col items-start text-start py-4 md:py-8">
              <div className="mb-2">
                <h3 className="text-xl font-semibold mb-2">Address:</h3>
                <hr className="border-2 border-gray-300 w-10 mb-2" />
                <p className="text-md text-gray-600">
                  123 Main Street, City, Country
                </p>
              </div>
              <div className="mb-2">
                <h3 className="text-xl font-semibold mb-2">Phone:</h3>
                <hr className="border-2 border-gray-300 w-20 mb-2" />
                <p className="text-md text-gray-600">+123 456 7890</p>
              </div>
              <div className="mb-2">
                <h3 className="text-xl font-semibold mb-2">Email:</h3>
                <hr className="border-2 border-gray-300 w-32 mb-2" />
                <p className="text-md text-gray-600">info@example.com</p>
              </div>
            </div>

            <div className="hidden lg:flex flex-col bg-gray-300 py-6 px-4 md:px-8 items-start text-start">
              <div className="mb-4">
                <h3 className="text-xl font-semibold mb-2">
                  Sign Up to Our Newsletter
                </h3>
                <p className="text-md text-gray-600">
                  Get new discounts and information:
                </p>
              </div>
              <form className="flex flex-col gap-2">
                <input
                  type="email"
                  id="newsletter-email"
                  name="newsletter-email"
                  placeholder="Enter your email"
                  className="border border-gray-400 w-[400px] rounded-md px-3 py-2"
                />
                <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors">
                  Sign Up
                </button>
              </form>
              <p className="text-gray-600 text-md mt-4">
                Explore our diverse range of destinations. Subscribe to our
                newsletter to stay updated with the latest travel deals,
                destination guides, and exclusive offers!
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;
