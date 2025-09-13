import React from "react";
import cody from "../../assets/codss.jpeg";
import lionMane from "../../assets/lion-mane.jpeg";
import Reishi from "../../assets/Reishi.png";
import Footer from "../Footer";

export const Mushrooms = () => {
  const mushrooms = [
    {
      img: cody,
      name: "Cordyceps",
      desc: "Cordyceps are renowned for boosting energy, stamina, and vitality. Used in traditional medicine for centuries, they enhance athletic performance, support immune function, and reduce fatigue. Rich in antioxidants, Cordyceps promote overall health, improve oxygen utilization, and help combat stress, making them a powerful addition to wellness routines."
    },
    {
      img: lionMane,
      name: "Lion’s Mane",
      desc: "Lion’s Mane is celebrated for its cognitive benefits, supporting memory, focus, and nerve health. This unique mushroom contains compounds that stimulate brain cell growth and protect against neurological damage. It's also known to reduce inflammation, support digestive health, and boost the immune system, making it a valuable functional food for mental clarity and overall wellness."
    },
    {
      img: Reishi,
      name: "Reishi",
      desc: "Reishi mushrooms are prized for their calming and adaptogenic benefits, helping the body manage stress and fatigue. Rich in polysaccharides and triterpenes, they support immunity and balance inflammation. Known as the 'mushroom of immortality,' Reishi promotes relaxation, resilience, and overall vitality."
    }
  ];

  return (
    <div className="bg-[#FFFAE9] min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h1 className="font-bold text-2xl sm:text-3xl md:text-4xl text-[#6C2D38]">
            The Mushrooms
          </h1>
        </div>

        <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-2 gap-6 sm:gap-8">
          {mushrooms.map((item, idx) => (
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
