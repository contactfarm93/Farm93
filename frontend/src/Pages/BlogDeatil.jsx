import { getBlogBySlug } from "@/store/slices/blogSlice";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Footer from "./Footer";

export default function BlogDetails() {
  const { slug } = useParams();
  const dispatch = useDispatch();
  const { blog, loading, error } = useSelector((state) => state.blog);

  useEffect(() => {
    dispatch(getBlogBySlug(slug));
  }, [dispatch, slug]);

  if (loading) return <div className="p-6 text-center">Loading...</div>;
  if (error) return <div className="p-6 text-center text-red-600">{error}</div>;
  if (!blog) return <div className="p-6 text-center">Blog not found</div>;

  return (
    <div className="bg-[#FFFAE9] min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        {/* Cover Image */}
        {blog.coverImage && (
          <img
            src={blog.coverImage}
            alt={blog.title}
            className="w-full h-auto rounded-lg shadow-lg mb-8 object-cover"
          />
        )}

        {/* Intro */}
        <p className="text-justify text-[#7F6E6A] leading-relaxed mb-12 text-base sm:text-lg px-2 sm:px-0">
          {blog.intro}
        </p>

        {/* Sections */}
        {blog.sections?.map((section, idx) => {
          const isLeft = idx % 2 === 0;
          return (
            <div
              key={idx}
              className={`flex flex-col md:flex-row items-center mb-12 md:mb-16 ${
                !isLeft ? "md:flex-row-reverse" : ""
              }`}
            >
              {section.image && (
                <img
                  src={section.image}
                  alt={section.heading}
                  className="w-full md:w-1/2 h-auto rounded-lg shadow-lg mb-4 md:mb-0 object-cover"
                />
              )}

              <div className="md:w-1/2 md:px-6 flex flex-col gap-4">
                <h2 className="text-2xl md:text-3xl font-semibold text-[#6C2D38] text-center md:text-left">
                  {section.heading}
                </h2>
                <p className="text-[#7F6E6A] text-justify leading-relaxed whitespace-pre-line">
                  {section.content}
                </p>
                {section.listItems?.length > 0 && (
                  <ul className="list-disc pl-6 mt-2 text-[#7F6E6A] space-y-1">
                    {section.listItems.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          );
        })}
      </div>
      <Footer />
    </div>
  );
}
