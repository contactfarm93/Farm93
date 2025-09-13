import React from "react";
import beetroot from "../../assets/Beetroot.png";
import broccoli from "../../assets/Broccoli.png";
import radish from "../../assets/Radish.png";
import spanich from "../../assets/Spinach.png";
import alfalfa from "../../assets/Alfalfa.png";
import redAmaranth from "../../assets/Red Amaranth.png";
import mustard from "../../assets/Black Mustard.png";
import Footer from "../Footer";

export const Microgreens = () => {
  return (
    <div className="bg-[#FFFAE9] min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h1 className="font-bold text-2xl sm:text-3xl md:text-4xl text-[#6C2D38]">
            The Microgreens
          </h1>
        </div>
        <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-2 gap-6 sm:gap-8">
          {/* Card Template */}
          {[
            { img: beetroot, name: "Beetroot", desc: "High in vitamins K, A, and C for strong bones, clear skin, and immunity. Supports healthy blood flow and heart health for better energy and stamina." },
            { img: broccoli, name: "Broccoli", desc: "Rich in vitamins C and K plus special plant compounds that protect cells. Helps natural body cleansing, supports immunity, and calms inflammation." },
            { img: radish, name: "Radish", desc: "Loaded with vitamin C and helpful plant compounds for tummy and liver support. Aids digestion, helps with blood sugar balance, and fights germs." },
            { img: spanich, name: "Spinach", desc: "Packed with iron and vitamins A and C for energy, vision, and immunity. Supports bone strength and gentle digestion." },
            { img: alfalfa, name: "Alfalfa", desc: "Contains vitamins C and K and natural plant hormones that may help balance. Supports cholesterol control and overall vitality." },
            { img: redAmaranth, name: "Red Amaranth", desc: "High in iron, calcium, and vitamin C for healthy blood, bones, and immunity. Antioxidants help reduce inflammation and support healing." },
            { img: mustard, name: "Mustard", desc: "Rich in vitamin A and protective plant compounds. Helps clear sinuses, supports digestion, and offers natural germ-fighting benefits." }
          ].map((item, idx) => (
            <div key={idx} className="relative group rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-500">
              <img
                src={item.img}
                alt={item.name}
                className="w-full h-64 sm:h-72 object-cover transform transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-end text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500 p-4 sm:p-6">
                <div>
                  <h2 className="text-lg sm:text-xl font-semibold text-[#FA9A5C]">
                    {item.name}
                  </h2>
                  <p className="text-sm mt-1 sm:mt-2">{item.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};
