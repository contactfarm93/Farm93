import { createBlog } from "@/store/slices/blogSlice";
import React, { useState } from "react";
import { useDispatch } from "react-redux";

export default function Blog() {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    title: "",
    slug: "",
    coverImage: null,
    intro: "",
    category: "Mushrooms",
    sections: [{ heading: "", content: "", image: null, listItems: [] }],
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (files) {
      setFormData({ ...formData, [name]: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSectionChange = (index, e) => {
    const { name, value, files } = e.target;
    const updatedSections = [...formData.sections];
    updatedSections[index][name] = files ? files[0] : value;
    setFormData({ ...formData, sections: updatedSections });
  };

  const addSection = () => {
    setFormData({
      ...formData,
      sections: [
        ...formData.sections,
        { heading: "", content: "", image: null, listItems: [] },
      ],
    });
  };

  const removeSection = (index) => {
    const updatedSections = formData.sections.filter((_, i) => i !== index);
    setFormData({ ...formData, sections: updatedSections });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData();

    data.append("title", formData.title);
    data.append("slug", formData.slug);
    data.append("intro", formData.intro);
    data.append("category", formData.category);

    if (formData.coverImage) {
      data.append("coverImage", formData.coverImage);
    }
    const sectionsWithoutFiles = formData.sections.map((section) => ({
      heading: section.heading,
      content: section.content,
      listItems: section.listItems || [],
    }));
    data.append("sections", JSON.stringify(sectionsWithoutFiles));
    formData.sections.forEach((section, index) => {
      if (section.image) {
        data.append(`sectionImage${index}`, section.image);
      }
    });

    dispatch(createBlog(data));
  };

  return (
    <div className="max-w-5xl mx-auto bg-white p-8 rounded-2xl shadow-lg mt-6">
      <h2 className="text-3xl font-bold mb-6 text-gray-800">✍️ Create Blog</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block mb-1 font-semibold">Title</label>
          <input
            type="text"
            name="title"
            placeholder="Blog Title"
            value={formData.title}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg focus:ring focus:ring-blue-300"
            required
          />
        </div>
        <div>
          <label className="block mb-1 font-semibold">Slug</label>
          <input
            type="text"
            name="slug"
            placeholder="unique-slug"
            value={formData.slug}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg focus:ring focus:ring-blue-300"
            required
          />
        </div>
        <div>
          <label className="block mb-1 font-semibold">Cover Image</label>
          <input
            type="file"
            name="coverImage"
            onChange={handleChange}
            className="w-full p-3 border rounded-lg focus:ring focus:ring-blue-300"
          />
        </div>
        <div>
          <label className="block mb-1 font-semibold">Intro</label>
          <textarea
            name="intro"
            placeholder="Write a short intro..."
            value={formData.intro}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg focus:ring focus:ring-blue-300"
            rows="4"
            required
          ></textarea>
        </div>
        <div>
          <label className="block mb-1 font-semibold">Category</label>
          <select
            name="category"
            value={formData.category}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg focus:ring focus:ring-blue-300"
          >
            <option value="Mushrooms">Mushrooms</option>
            <option value="Fungi">Fungi</option>
            <option value="Exotics">Exotics</option>
            <option value="Microgreens">Microgreens</option>
          </select>
        </div>

        <div>
          <h3 className="text-xl font-bold mb-3">📑 Sections</h3>
          {formData.sections.map((section, index) => (
            <div
              key={index}
              className="border p-4 mb-4 rounded-lg bg-gray-50 relative"
            >
              <button
                type="button"
                onClick={() => removeSection(index)}
                className="absolute top-2 right-2 text-red-600 hover:text-red-800"
              >
                ❌
              </button>
              <div className="space-y-3">
                <input
                  type="text"
                  name="heading"
                  placeholder="Section Heading"
                  value={section.heading}
                  onChange={(e) => handleSectionChange(index, e)}
                  className="w-full p-2 border rounded"
                />
                <textarea
                  name="content"
                  placeholder="Section Content"
                  value={section.content}
                  onChange={(e) => handleSectionChange(index, e)}
                  className="w-full p-2 border rounded"
                  rows="3"
                ></textarea>
                <input
                  type="file"
                  name="image"
                  onChange={(e) => handleSectionChange(index, e)}
                  className="w-full p-2 border rounded"
                />
              </div>
            </div>
          ))}
          <button
            type="button"
            onClick={addSection}
            className="mt-2 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700"
          >
            Add Section
          </button>
        </div>
        {/* Submit */}
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 text-lg font-semibold"
        >
          Publish Blog
        </button>
      </form>
    </div>
  );
}
