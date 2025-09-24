import { submitTrainingForm } from "@/store/slices/trainingSlice";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function TrainingForm() {
  const dispatch = useDispatch();
  const { loading, success, error } = useSelector((state) => state.training);

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

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(submitTrainingForm(form));
  };

  useEffect(() => {
    if (success) {
      setForm({
        fullName: "",
        gender: "",
        contactNumber: "",
        email: "",
        address: "",
        experienceLevel: "",
      });
    }
  }, [success]);

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
              required
              className="w-full p-2 sm:p-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#FA9A5C] focus:border-[#FA9A5C] transition"
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
              required
              className="w-full p-2 sm:p-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#FA9A5C] focus:border-[#FA9A5C]"
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
              required
              className="w-full p-2 sm:p-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#FA9A5C] focus:border-[#FA9A5C]"
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
              required
              className="w-full p-2 sm:p-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#FA9A5C] focus:border-[#FA9A5C]"
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
              required
              className="w-full p-2 sm:p-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#FA9A5C] focus:border-[#FA9A5C]"
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
              required
              className="w-full p-2 sm:p-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#FA9A5C] focus:border-[#FA9A5C]"
            >
              <option value="">Select experience</option>
              <option value="beginner">Beginner</option>
              <option value="intermediate">Intermediate</option>
              <option value="advanced">Advanced</option>
            </select>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-[#FC873C] text-white py-2.5 sm:py-3 rounded-lg font-semibold shadow-md transform hover:scale-[1.02] transition-all duration-200 disabled:opacity-70"
          >
            {loading ? "Submitting..." : "Submit Registration"}
          </button>

          {success && (
            <p className="text-green-600 font-semibold text-center">
              ✅ Registration successful!
            </p>
          )}
          {error && (
            <p className="text-red-600 font-semibold text-center">
              ❌ {error}
            </p>
          )}
        </form>
      </div>
    </div>
  );
}
