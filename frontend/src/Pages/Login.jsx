import { adminLogin } from "@/store/slices/adminSlice";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
export default function Login() {
  const dispatch = useDispatch();
  const navigate=useNavigate()
  const { loading, error, isAuthenticated, message } = useSelector(
    (state) => state.admin
  );

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(adminLogin(formData));
  };
  useEffect(() => {
    if (isAuthenticated) {
      navigate("/admin/dashboard");
    }
  }, [isAuthenticated, navigate]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#FFFAE9]">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold text-center text-[#6C2D38] mb-6">
           Login
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-[#6C2D38]">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="mt-1 w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6C2D38]"
              placeholder="admin@example.com"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-[#6C2D38]">
              Password
            </label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              className="mt-1 w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6C2D38]"
              placeholder="Enter password"
            />
          </div>

          {error && <p className="text-red-600 text-sm">{error}</p>}
          {message && (
            <p className="text-green-600 text-sm">{message}</p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-[#6C2D38] text-white py-2 rounded-lg hover:bg-[#5b2630] transition"
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>

        {isAuthenticated && (
          <p className="mt-4 text-center text-green-700 font-semibold">
            ✅ You are logged in as Admin
          </p>
        )}
      </div>
    </div>
  );
}
