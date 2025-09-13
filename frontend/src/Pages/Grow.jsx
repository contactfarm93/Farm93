import React from "react";
import { Link } from "react-router-dom";
import fungiImage from "../assets/fungi.jpg";
import exoticsImage from "../assets/exotics.jpg";
import microgreensImage from "../assets/microgreens.jpg";

export const Grow = () => {
  return (
    <div className="max-w-6xl mx-auto p-4">
      <div className="text-center mb-8">
        <h2 className="text-2xl sm:text-3xl md:text-4xl text-[#6C2D38] font-semibold">
          What We Grow
        </h2>
      </div>
      <div className="relative rounded-lg overflow-hidden mb-10 md:mb-16 shadow-lg">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2">
            <img 
              src={fungiImage} 
              className="w-full h-64 md:h-full object-cover" 
              alt="Mushrooms" 
            />
          </div>
          <div className="md:w-1/2 bg-white p-6 md:p-8 flex flex-col justify-between">
            <div>
              <h2 className="font-poppins font-semibold text-xl md:text-2xl text-[#6C2D38] mb-4">
                The Mushrooms
              </h2>
              <p className="font-poppins text-justify font-normal text-base md:text-lg text-[#2A1116] text-opacity-80 mb-6">
                An extraordinary world of medicinal and gourmet wonders, fungi
                offer unique flavors and health boosting properties that have
                been revered for centuries.
              </p>
            </div>
            <div className="mt-4 md:mt-0">
              <Link 
                to="/mushrooms" 
                className="inline-block bg-[#6C2D38] text-white px-4 py-2 text-sm md:text-base hover:bg-[#5a2530] transition-colors"
              >
                Know More
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="relative rounded-lg overflow-hidden mb-10 md:mb-16 shadow-lg">
        <div className="flex flex-col md:flex-row-reverse">
          <div className="md:w-1/2">
            <img 
              src={exoticsImage} 
              className="w-full h-64 md:h-full object-cover" 
              alt="Exotics" 
            />
          </div>
          <div className="md:w-1/2 bg-white p-6 md:p-8 flex flex-col justify-between">
            <div>
              <h2 className="font-poppins font-semibold text-xl md:text-2xl text-[#6C2D38] mb-4">
                The Exotics
              </h2>
              <p className="font-poppins text-justify font-normal text-base md:text-lg text-[#2A1116] text-opacity-80 mb-6">
                Rare and luxurious, these exotic superfoods delight the palate
                and deliver powerful wellness benefits from nature's most prized
                ingredients.
              </p>
            </div>
            <div className="mt-4 md:mt-0">
              <Link 
                to="/exotics" 
                className="inline-block bg-[#6C2D38] text-white px-4 py-2 text-sm md:text-base hover:bg-[#5a2530] transition-colors"
              >
                Know More
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="relative rounded-lg overflow-hidden mb-10 md:mb-16 shadow-lg">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2">
            <img 
              src={microgreensImage} 
              className="w-full h-64 md:h-full object-cover" 
              alt="Microgreens" 
            />
          </div>
          <div className="md:w-1/2 bg-white p-6 md:p-8 flex flex-col justify-between">
            <div>
              <h2 className="font-poppins font-semibold text-xl md:text-2xl text-[#6C2D38] mb-4">
                The Microgreens
              </h2>
              <p className="font-poppins text-justify font-normal text-base md:text-lg text-[#2A1116] text-opacity-80 mb-6">
                Tiny but mighty, microgreens are young plants packed with intense flavors 
                and nutrients, making them a vibrant addition to any dish.
              </p>
            </div>
            <div className="mt-4 md:mt-0">
              <Link 
                to="/microgreens" 
                className="inline-block bg-[#6C2D38] text-white px-4 py-2 text-sm md:text-base hover:bg-[#5a2530] transition-colors"
              >
                Know More
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};