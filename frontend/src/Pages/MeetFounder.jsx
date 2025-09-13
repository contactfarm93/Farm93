import React from "react";
import fImage from "../assets/dir.png";

export const MeetFounder = () => {
  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 py-8 md:py-12">
      <div className="flex flex-col lg:flex-row items-center gap-6 md:gap-8 lg:gap-12">
        <div className="order-2 lg:order-1 w-full lg:max-w-2xl">
          <div className="mb-4 sm:mb-6 md:mb-8 text-center lg:text-left">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-[#6C2D38]">
              Meet Our Founder
            </h1>
          </div>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-[#6C2D38] mb-3 sm:mb-4 text-center lg:text-left">
            Devika Singh
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed sm:leading-loose text-[#7F6E6A] text-justify">
            Devika Singh, Founder of Farm93, holds a Master's in Food
            Biotechnology and an MBA, with nearly a decade of experience in
            biotechnology and business. Inspired by the health challenges people
            faced during the pandemic, she founded Farm93 to make the goodness of
            functional mushrooms, microgreens, and exotic herbs accessible
            through modern farming and science-backed wellness. As a visionary
            entrepreneur and wellness advocate, Devika bridges ancient plant
            wisdom with innovative food technology to create clean, everyday
            health solutions.
          </p>
        </div>
        <div className="order-1 lg:order-2 flex-shrink-0 w-full sm:w-4/5 md:w-3/5 lg:w-[450px] flex justify-center lg:justify-start">
          <img
            src={fImage}
            alt="Founder"
            className="w-full max-w-[280px] sm:max-w-[320px] md:max-w-[380px] lg:max-w-[450px] h-auto lg:h-[550px] object-cover rounded-2xl sm:rounded-3xl shadow-lg sm:shadow-xl border-4 border-[#f4e9e7]"
          />
        </div>
      </div>
    </section>
  );
};