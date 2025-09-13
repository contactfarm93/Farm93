import React from "react";
import TImage from "../assets/cod.png";
import TrainingForm from "./TrainingForm";
import Footer from "./Footer";

export default function Training() {
  return (
    <div className="bg-[#FFFAE9] min-h-screen">
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="rounded-3xl overflow-hidden mb-6">
          <img
            src={TImage}
            alt="Training"
            className="w-full h-auto object-cover"
          />
        </div>

        <div className="px-2 sm:px-4 md:px-6">
          <TrainingForm />
        </div>
      </section>
      <Footer />
    </div>
  );
}
