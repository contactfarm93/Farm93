import React from "react";
import { MeetFounder } from "./MeetFounder";
import hero1Image from "../assets/hero1Image.jpg";
import { Link } from "react-router-dom";
import gpm from "../assets/GMP.jpg";
import hccp from "../assets/HCCP.jpg";
import premium from "../assets/premium.jpg";
import third from "../assets/third.jpg";
import fasai from "../assets/fssai.jpg";
export const Hero1 = () => {
  return (
    <div className="max-w-6xl mx-auto p-4">
      <div className="flex justify-center">
        <div className="w-11/12 sm:w-10/12 md:w-9/12 lg:w-[854px] text-center">
          <p className="text-[#7F6E6A] text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed md:leading-loose">
            FARM93 was born from a shared passion for biotechnology,
            agriculture, and a vision to blend ancient wisdom with modern
            research. Our journey became personal when a life-changing
            experience with plant-based remedies inspired us to explore their
            vast therapeutic potential.
          </p>
        </div>
      </div>
      <div className="flex flex-col xl:flex-row items-start xl:items-end gap-6 lg:gap-8 mt-8 sm:mt-10 lg:mt-16 xl:mt-20">
        <img
          src={hero1Image}
          alt="Farm 93"
          className="w-full md:w-4/5 lg:w-3/4 xl:w-[680px] h-auto lg:h-[450px] xl:h-[530px] rounded-xl lg:rounded-[20px] mx-auto xl:mx-0"
        />
        <div className="w-full xl:w-[423px] flex items-center justify-center mt-4 lg:mt-0">
          <p className="text-[#7F6E6A] text-sm sm:text-base md:text-lg lg:text-xl text-justify leading-relaxed">
            <span>
              At FARM93, we focus on preventive care through the power of
              superfoods. Our innovative, sustainable solutions harness the
              benefits of fungi, exotic herbs, and microgreens to promote health
              and wellbeing.
            </span>
            <br className="hidden sm:block" />
            <br className="sm:hidden" />
            Guided by scientific expertise and a deep respect for traditional
            healing, we strive to make nature's preventive benefits accessible
            to all.
          </p>
        </div>
      </div>
      <div className="mt-6 sm:mt-8 lg:mt-10 max-w-2xl text-center mx-auto px-2 sm:px-0">
        <p className="text-[#7F6E6A] text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed md:leading-loose">
          More than a company, FARM93 reflects our belief in a future where
          health and nature grow together.
        </p>
      </div>
      <div className="bg-[#6C2D38] shadow-md mt-6 sm:mt-8 lg:mt-10 rounded-full">
        <div className="max-w-6xl mx-auto px-4 py-3 sm:py-0">
          <nav className="flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-0">
            <div className="text-center sm:text-left">
              <div className="text-white font-bold text-lg sm:text-xl">
                FARM93
              </div>
              <p className="text-xs sm:text-sm text-gray-200 italic">
                Cultivating Knowledge & Growth
              </p>
            </div>
            <Link to="/training" className="w-full sm:w-auto">
              <div
                className="bg-gradient-to-r from-yellow-400 via-pink-500 to-red-500 
               text-white px-4 sm:px-6 md:px-8 py-2 sm:py-3 rounded-full text-xs sm:text-sm md:text-base font-semibold 
               shadow-lg tracking-wide animate-pulse text-center w-full md:max-w-sm lg:max-w-md"
              >
                Hands on Training (Limited Registration) – Contact us today!!
              </div>
            </Link>
          </nav>
        </div>
      </div>
      <div className="mt-10 rounded-lg p-4 flex flex-wrap justify-center items-center gap-6 sm:gap-10 md:gap-16 lg:gap-20">
        <img
          src={gpm}
          alt="Farm93 GMP Certification"
          className="w-20 h-20 sm:w-28 sm:h-28 md:w-32 md:h-32 lg:w-38 lg:h-38 rounded-full object-cover shadow-md"
        />
        <img
          src={hccp}
          alt="Farm93 HACCP Certification"
          className="w-20 h-20 sm:w-28 sm:h-28 md:w-32 md:h-32 lg:w-38 lg:h-38 rounded-full object-cover shadow-md"
        />
        <img
          src={premium}
          alt="Farm93 Premium Quality Certification"
          className="w-20 h-20 sm:w-28 sm:h-28 md:w-32 md:h-32 lg:w-38 lg:h-38 rounded-full object-cover shadow-md"
        />
        <img
          src={third}
          alt="Farm93 Third-Party Certification"
          className="w-20 h-20 sm:w-28 sm:h-28 md:w-32 md:h-32 lg:w-38 lg:h-38 rounded-full object-cover shadow-md"
        />
        <img
          src={fasai}
          alt="Farm93 FSSAI Certification"
          className="w-20 h-20 sm:w-28 sm:h-28 md:w-32 md:h-32 lg:w-38 lg:h-38 rounded-full object-cover shadow-md"
        />
      </div>

      <div className="mt-8 sm:mt-10 lg:mt-12">
        <MeetFounder />
      </div>
    </div>
  );
};
