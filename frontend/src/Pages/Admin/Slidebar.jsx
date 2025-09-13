import { FileText } from "lucide-react"; 
import React from "react";
import { Link } from "react-router-dom";

function Slidbar() {
  return (
    <div className="flex">
      <div className="hidden lg:block w-[250px] sm:w-[300px] space-y-8 border-gray-300 dark:border-gray-700 bg-[#F0F0F0] p-5 sticky top-0 h-screen shadow-lg">
      <div className="space-y-4 mt-20">
          <Link
            className="flex items-center gap-2 text-gray-800 font-semibold hover:bg-gray-200 hover:text-blue-600 px-4 py-2 rounded-md transition-all duration-300"
            to="/admin/dashboard"
          >
            <FileText size={22} />
            <h1>Dahboard</h1>
          </Link>
        </div>
        <div className="space-y-4 mt-20">
          <Link
            className="flex items-center gap-2 text-gray-800 font-semibold hover:bg-gray-200 hover:text-blue-600 px-4 py-2 rounded-md transition-all duration-300"
            to="/admin/blog"
          >
            <FileText size={22} />
            <h1>Blog</h1>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Slidbar;
