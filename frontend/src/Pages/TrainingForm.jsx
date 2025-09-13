import { trainingForm } from "@/store/slices/trainingSlice";
import React, { useState } from "react";
import { useDispatch } from "react-redux";

export default function TrainingForm() {
  const dispatch = useDispatch();
  const [form, setForm] = useState({
    fullName: "",
    gender: "",
    contactNumber: "",
    email: "",
    address: "",
    experienceLevel: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(trainingForm(form));
  };

  return (
    <div className="flex justify-center items-start sm:items-center bg-gradient-to-br px-4 sm:px-6 py-6 md:py-8 lg:min-h-screen">
      <div className="w-full max-w-xl bg-white shadow-xl rounded-2xl p-6 sm:p-8 md:p-10 border border-gray-100">
        <h2 className="text-2xl sm:text-3xl font-semibold text-[#FC873C] mb-6 sm:mb-8 text-center">
          Training Registration - Farm93
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
          <div>
            <label className="block text-gray-700 font-medium mb-1 sm:mb-2">
              Full Name
            </label>
            <input
              name="fullName"
              placeholder="Enter your full name"
              value={form.fullName}
              onChange={handleChange}
              className="w-full p-2 sm:p-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#FA9A5C] focus:border-[#FA9A5C] transition"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-1 sm:mb-2">
              Gender
            </label>
            <select
              name="gender"
              value={form.gender}
              onChange={handleChange}
              className="w-full p-2 sm:p-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#FA9A5C] focus:border-[#FA9A5C]"
              required
            >
              <option value="">Select gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="others">Others</option>
            </select>
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-1 sm:mb-2">
              Contact Number
            </label>
            <input
              name="contactNumber"
              placeholder="Enter your phone number"
              value={form.contactNumber}
              onChange={handleChange}
              className="w-full p-2 sm:p-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#FA9A5C] focus:border-[#FA9A5C]"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-1 sm:mb-2">
              Email
            </label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={form.email}
              onChange={handleChange}
              className="w-full p-2 sm:p-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#FA9A5C] focus:border-[#FA9A5C]"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-1 sm:mb-2">
              Address
            </label>
            <textarea
              name="address"
              placeholder="Enter your address"
              value={form.address}
              onChange={handleChange}
              rows="3"
              className="w-full p-2 sm:p-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#FA9A5C] focus:border-[#FA9A5C]"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-1 sm:mb-2">
              Experience Level
            </label>
            <select
              name="experienceLevel"
              value={form.experienceLevel}
              onChange={handleChange}
              className="w-full p-2 sm:p-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#FA9A5C] focus:border-[#FA9A5C]"
              required
            >
              <option value="">Select experience</option>
              <option value="beginner">Beginner</option>
              <option value="intermediate">Intermediate</option>
              <option value="advanced">Advanced</option>
            </select>
          </div>

          <button
            type="submit"
            className="w-full bg-[#FC873C] text-white py-2.5 sm:py-3 rounded-lg font-semibold shadow-md transform hover:scale-[1.02] transition-all duration-200"
          >
            Submit Registration
          </button>
        </form>
      </div>
    </div>
  );
}
