import { getBlogs } from "@/store/slices/blogSlice";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Footer from "./Footer";

export default function BlogsList() {
  const dispatch = useDispatch();
  const { blogs, loading, error } = useSelector((state) => state.blog);

  useEffect(() => {
    dispatch(getBlogs());
  }, [dispatch]);

  if (loading) return <div className="p-6 text-center">Loading...</div>;
  if (error) return <div className="p-6 text-center text-red-600">{error}</div>;

  return (
    <div className="bg-[#FFFAE9] min-h-screen">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl sm:text-4xl font-bold mb-6 text-[#6C2D38] text-center sm:text-left">
          Blogs
        </h1>
        <ul className="space-y-6">
          {blogs.map((b) => (
            <li key={b._id} className="border-b pb-4">
              <Link
                to={`/blogs/${b.slug}`}
                className="text-xl sm:text-2xl font-semibold text-orange-700 hover:underline"
              >
                {b.title}
              </Link>
              <p className="text-gray-600 text-justify mt-1 text-sm sm:text-base">{b.intro}</p>
            </li>
          ))}
        </ul>
      </div>
      <Footer />
    </div>
  );
}
