import React from "react";
import saffron from "../../assets/Safrron.png";
import ashwagandha from "../../assets/ashwagandha.png";
import saiBuckthorn from "../../assets/Sea buckthorn.png";
import triphala from "../../assets/triphala.png";
import Footer from "../Footer";

export const Exotics = () => {
  const exotics = [
    {
      img: saffron,
      name: "Saffron",
      desc: "The world’s most valuable spice, supports heart health, enhances mood, and improves sleep. It may aid memory, vision, and PMS relief while providing antioxidant, anti-inflammatory, and anticancer benefits. Its vibrant color and rich aroma make it perfect for both culinary use and holistic wellness."
    },
    {
      img: ashwagandha,
      name: "Ashwagandha",
      desc: "A revered adaptogen in Ayurveda, Ashwagandha helps reduce stress, balance cortisol, and improve energy. It supports brain function, enhances sleep, and boosts immunity. Known for restoring vitality, it promotes resilience and overall well-being."
    },
    {
      img: saiBuckthorn,
      name: "Sea Buckthorn",
      desc: "Rich in omega fatty acids, vitamins, and antioxidants, Sea Buckthorn supports skin health, heart function, and immunity. It promotes tissue repair, gut balance, and healthy aging. Its nutrient-dense profile makes it a powerful superfood for daily wellness."
    },
    {
      img: triphala,
      name: "Triphala",
      desc: "A traditional Ayurvedic blend of three fruits, Triphala gently supports digestion, detoxification, and gut health. Rich in antioxidants, it boosts immunity and helps balance blood sugar. Known for its rejuvenating effects, it promotes internal cleansing and long-term vitality."
    }
  ];

  return (
    <div className="bg-[#FFFAE9] min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h1 className="font-bold text-2xl sm:text-3xl md:text-4xl text-[#6C2D38]">
            The Exotics
          </h1>
        </div>

        <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-2 gap-6 sm:gap-8">
          {exotics.map((item, idx) => (
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
