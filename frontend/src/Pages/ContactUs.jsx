import { submitContactForm } from "@/store/slices/contactSlice";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Footer from "./Footer";

export default function ContactUs() {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    contactNumber: "",
    comment: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(submitContactForm(formData));
  };

  return (
    <div className="bg-[#FFFAE9] min-h-screen">
      <div className="relative h-56 sm:h-72 md:h-96">
        <div className="absolute inset-0 bg-black/70"></div>
        <div className="absolute inset-0 flex items-center justify-center px-4">
          <h1 className="text-white text-3xl sm:text-4xl md:text-5xl font-extrabold text-center">
            We're here to help!
          </h1>
        </div>
      </div>
      <section className="bg-[#fb8a3e] p-6 sm:p-12 md:p-20 rounded-b-3xl">
        <header className="max-w-4xl mx-auto text-center mb-10 px-2 sm:px-0">
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Contact Information
          </h1>
          <p className="text-white text-base sm:text-lg max-w-3xl mx-auto">
            We’d love to hear about your experience with FARM93. Please feel free
            to get in touch with any comments, suggestions, or questions—you’re
            always welcome!
          </p>
        </header>

        <form
          className="max-w-4xl mx-auto p-4 sm:p-8 md:p-10 bg-white rounded-2xl shadow-lg space-y-4"
          onSubmit={handleSubmit}
        >
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Full Name"
              aria-label="Full Name"
              required
              className="flex-1 px-4 py-3 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#fb8a3e] transition"
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              aria-label="Email"
              required
              className="flex-1 px-4 py-3 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#fb8a3e] transition"
            />
          </div>

          <input
            type="tel"
            name="contactNumber"
            value={formData.contactNumber}
            onChange={handleChange}
            placeholder="Phone Number"
            aria-label="Phone Number"
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#fb8a3e] transition"
          />

          <textarea
            name="comment"
            value={formData.comment}
            onChange={handleChange}
            placeholder="Comment"
            rows={6}
            aria-label="Comment"
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#fb8a3e] transition resize-none"
          />

          <button
            type="submit"
            className="w-full py-3 font-semibold rounded-lg bg-[#fb8a3e] text-white transition disabled:opacity-70"
          >
            SEND MESSAGE
          </button>
        </form>
      </section>

      <Footer />
    </div>
  );
}
