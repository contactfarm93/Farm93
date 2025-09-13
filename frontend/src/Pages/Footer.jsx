import React from "react";
import { Link } from "react-router-dom";
import { FaInstagram, FaLinkedin, FaYoutube, FaFacebook } from "react-icons/fa";
export default function Footer() {
  return (
    <footer className="bg-[#6C2D38] text-white mt-10 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row justify-between gap-8 py-8">
          <div className="max-w-xl text-justify">
            <h3 className="text-2xl font-bold text-white">FARM93</h3>
            <p className="text-gray-200 text-justify text-base mt-4">
              FARM93 combines tradition with research to create clean,
              sustainable superfoods. <br className="hidden md:block" /> We
              focus on preventive care, making everyday wellness simple,
              natural, and effective.
            </p>
          </div>
          <div className="mt-6 lg:mt-8 lg:pl-14 lg:border-l lg:border-gray-400">
            <ul className="flex flex-col gap-4">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/mushrooms"
                  className="text-gray-300 hover:text-white"
                >
                  Products
                </Link>
              </li>
              <li>
                <Link to="/training" className="text-gray-300 hover:text-white">
                  Training
                </Link>
              </li>
              <li>
                <Link to="/blogs" className="text-gray-300 hover:text-white">
                  Blogs
                </Link>
              </li>
            </ul>
          </div>

          {/* Policy Links */}
          <div className="flex flex-col items-start gap-6 mt-6 lg:mt-8">
            <Link
              to="/privacy"
              className="text-gray-300 hover:text-white text-sm"
            >
              Privacy Policy
            </Link>
            <Link
              to="/terms"
              className="text-gray-300 hover:text-white text-sm"
            >
              Terms of Service
            </Link>
            <Link
              to="/contact-us"
              className="text-gray-300 hover:text-white text-sm"
            >
              Contact Us
            </Link>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-400 my-4"></div>

        {/* Copyright and Social Links */}
        <div className="flex flex-col md:flex-row items-center justify-between py-6">
          <p className="text-gray-300 text-sm mb-4 md:mb-0">
            © 2025 FARM93. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a
              href="https://www.instagram.com/farm93_official?igsh=MTdkOW9lZTFiNWJ2Ng=="
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <FaInstagram className="text-2xl md:text-3xl hover:text-pink-500 transition-colors duration-300" />
            </a>
            <a
              href="https://www.linkedin.com/company/farm93"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="text-2xl md:text-3xl hover:text-blue-500 transition-colors duration-300" />
            </a>
            <a
              href="https://youtube.com/@farm93_official?si=p6K0vd7c2ZYHi43D"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
            >
              <FaYoutube className="text-2xl md:text-3xl hover:text-red-500 transition-colors duration-300" />
            </a>
            <a
              href="https://www.facebook.com/share/172F5icEPB/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <FaFacebook className="text-2xl md:text-3xl hover:text-blue-500 transition-colors duration-300" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
