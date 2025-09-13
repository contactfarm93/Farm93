import React from "react";
import heroImage from "../assets/HeoImage.png";

export const Hero = () => {
  return (
    <div className="w-full h-screen relative overflow-hidden">

      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Hero"
          className="hidden xl:block absolute w-[1364px] h-[561px] object-cover z-0 top-0 left-0"
        />
        <img
          src={heroImage}
          alt="Hero"
          className="hidden md:block xl:hidden w-full h-full object-cover"
        />
        <img
          src={heroImage}
          alt="Hero"
          className="md:hidden w-full h-full object-cover object-center"
        />
      </div>
      <div className="hidden xl:block">
        <div className="absolute w-[409px] h-[156px] top-[235.5px] left-[76px] z-10">
          <img
            src="Landing name.png"
            alt="Hero Logo"
            className="w-full"
          />
        </div>
        <div className="absolute w-[585px] h-[60px] top-[384px] left-[76px] z-10">
          <p className="text-[#2A1116] text-[24px] leading-loose opacity-80">
            Where tradition meets innovation, and nature's healing power is rediscovered through science.
          </p>
        </div>
      </div>

      <div className="hidden md:flex xl:hidden absolute inset-0 z-10 flex-col justify-center items-center px-8">
        <div className="w-full max-w-md mb-8">
          <img
            src="Landing name.png"
            alt="Hero Logo"
            className="w-full"
          />
        </div>
        <div className="w-full max-w-2xl">
          <p className="text-[#2A1116] text-center text-xl leading-relaxed p-4 rounded-lg mt-4">
            Where tradition meets innovation, and nature's healing power is rediscovered through science.
          </p>
        </div>
      </div>
      
     <div className="md:hidden absolute inset-0 z-10 flex flex-col justify-center items-center px-6">
        <div className="w-full max-w-xs mb-6">
          <img
            src="Landing name.png"
            alt="Hero Logo"
            className="w-full"
          />
        </div>
        <div className="w-full max-w-md">
          <p className="text-[#2A1116] text-center text-base sm:text-lg leading-relaxed p-3 rounded-lg ">
            Where tradition meets innovation, and nature's healing power is rediscovered through science.
          </p>
        </div>
      </div>
    </div>
  );
};