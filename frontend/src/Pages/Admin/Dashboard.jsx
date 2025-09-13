import { getBlogs, updateBlog, deleteBlog } from "@/store/slices/blogSlice";
import React, { useEffect, useState } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";

export default function Dashboard() {
  const dispatch = useDispatch();
  const { blogs } = useSelector((state) => state.blog);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedBlog, setSelectedBlog] = useState(null);

  useEffect(() => {
    dispatch(getBlogs());
  }, [dispatch]);
  const handleEditClick = (blog) => {
    const blogCopy = JSON.parse(JSON.stringify(blog));
    setSelectedBlog(blogCopy);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedBlog(null);
  };

  const handleSectionChange = (idx, field, value) => {
    const updatedSections = [...selectedBlog.sections];
    updatedSections[idx][field] = value;
    setSelectedBlog({ ...selectedBlog, sections: updatedSections });
  };

  const handleSave = () => {
    const formData = new FormData();

    // Basic fields
    formData.append("title", selectedBlog.title);
    formData.append("slug", selectedBlog.slug);
    formData.append("intro", selectedBlog.intro);
    formData.append("category", selectedBlog.category);

    // Cover image
    if (selectedBlog.coverImage instanceof File) {
      formData.append("coverImage", selectedBlog.coverImage);
    }

    // Section images first
    selectedBlog.sections.forEach((section, idx) => {
      if (section.image instanceof File) {
        formData.append(`sectionImage${idx}`, section.image);
      }
    });

    // Then append the entire sections array
    formData.append("sections", JSON.stringify(selectedBlog.sections));

    dispatch(updateBlog(selectedBlog._id, formData));
    handleCloseModal();
  };

  // DELETE blog handler
  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this blog?")) {
      dispatch(deleteBlog(id)).then(() => {
        // Refresh the blogs list after deletion
        dispatch(getBlogs());
      });
    }
  };

  return (
    <div className="max-w-6xl mx-auto mt-12 px-6">
      <h1 className="text-4xl font-bold mb-8 text-gray-800">Dashboard</h1>

      {/* Table */}
      <div className="overflow-x-auto bg-white shadow-md rounded-lg">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">S.No.</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Name</th>
              <th className="px-6 py-3 text-center text-sm font-semibold text-gray-700">Edit</th>
              <th className="px-6 py-3 text-center text-sm font-semibold text-gray-700">Delete</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {blogs?.map((blog, index) => (
              <tr key={blog._id} className="hover:bg-gray-50 transition">
                <td className="px-6 py-4 text-sm text-gray-600">{index + 1}.</td>
                <td className="px-6 py-4 text-sm text-gray-800 font-medium">{blog?.title || "No Title"}</td>
                <td className="px-6 py-4 text-center">
                  <button
                    className="text-blue-600 hover:text-blue-800 transition"
                    onClick={() => handleEditClick(blog)}
                  >
                    <FaEdit size={18} />
                  </button>
                </td>
                <td className="px-6 py-4 text-center">
                  <button
                    className="text-red-600 hover:text-red-800 transition"
                    onClick={() => handleDelete(blog._id)}
                  >
                    <FaTrash size={18} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Edit Modal */}
      {isModalOpen && selectedBlog && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 p-4">
          <div className="bg-white rounded-xl w-full max-w-4xl max-h-[90vh] overflow-y-auto shadow-2xl p-6">
            <h2 className="text-3xl font-bold mb-6 text-gray-800">Edit Blog</h2>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">Title</label>
                <input
                  type="text"
                  className="w-full border border-gray-300 p-2 rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
                  value={selectedBlog.title}
                  onChange={(e) => setSelectedBlog({ ...selectedBlog, title: e.target.value })}
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">Slug</label>
                <input
                  type="text"
                  className="w-full border border-gray-300 p-2 rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
                  value={selectedBlog.slug}
                  onChange={(e) => setSelectedBlog({ ...selectedBlog, slug: e.target.value })}
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">Intro</label>
                <textarea
                  className="w-full border border-gray-300 p-2 rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
                  value={selectedBlog.intro}
                  onChange={(e) => setSelectedBlog({ ...selectedBlog, intro: e.target.value })}
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">Category</label>
                <input
                  type="text"
                  className="w-full border border-gray-300 p-2 rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
                  value={selectedBlog.category}
                  onChange={(e) => setSelectedBlog({ ...selectedBlog, category: e.target.value })}
                />
              </div>

              {/* Cover Image */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">Cover Image</label>
                {selectedBlog.coverImage && (
                  <img
                    src={
                      selectedBlog.coverImage instanceof File
                        ? URL.createObjectURL(selectedBlog.coverImage)
                        : selectedBlog.coverImage
                    }
                    alt="cover"
                    className="w-48 h-28 object-cover rounded-md mb-2 border"
                  />
                )}
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => {
                    const file = e.target.files[0];
                    if (file) setSelectedBlog({ ...selectedBlog, coverImage: file });
                  }}
                  className="mt-1"
                />
              </div>

              {/* Sections */}
              <h3 className="text-xl font-semibold text-gray-800 mt-4">Sections</h3>
              {selectedBlog.sections.map((section, idx) => (
                <div key={idx} className="border p-4 rounded-md mb-3 shadow-sm">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Heading</label>
                    <input
                      type="text"
                      className="w-full border border-gray-300 p-2 rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
                      value={section.heading}
                      onChange={(e) => handleSectionChange(idx, "heading", e.target.value)}
                    />
                  </div>

                  <div className="mt-2">
                    <label className="block text-sm font-medium text-gray-700 mb-1">Content</label>
                    <textarea
                      className="w-full border border-gray-300 p-2 rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
                      value={section.content}
                      onChange={(e) => handleSectionChange(idx, "content", e.target.value)}
                    />
                  </div>

                  <div className="mt-2">
                    <label className="block text-sm font-medium text-gray-700 mb-1">Section Image</label>
                    {section.image && (
                      <img
                        src={
                          section.image instanceof File
                            ? URL.createObjectURL(section.image)
                            : section.image
                        }
                        alt={`section-${idx}`}
                        className="w-40 h-24 object-cover rounded-md mb-2 border"
                      />
                    )}
                    <input
                      type="file"
                      accept="image/*"
                      onChange={(e) => {
                        const file = e.target.files[0];
                        if (file) handleSectionChange(idx, "image", file);
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Buttons */}
            <div className="flex justify-end mt-6 gap-4">
              <button
                className="px-5 py-2 bg-gray-300 rounded-lg hover:bg-gray-400 transition"
                onClick={handleCloseModal}
              >
                Cancel
              </button>
              <button
                className="px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                onClick={handleSave}
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
