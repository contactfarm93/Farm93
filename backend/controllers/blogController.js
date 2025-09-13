import { uploadMedia } from "../config/cloudinary.js";
import Blog from "../models/blogModel.js";
export const createBlog = async (req, res) => {
  try {
    const { title, slug, intro, sections, category } = req.body;

    let coverImageUrl = "";
    const coverFile = req.files.find(file => file.fieldname === "coverImage");
    if (coverFile) {
      const uploaded = await uploadMedia(coverFile.path);
      coverImageUrl = uploaded.secure_url;
    }
    let parsedSections = sections;
    if (typeof sections === "string") {
      parsedSections = JSON.parse(sections);
    }
    for (let i = 0; i < parsedSections.length; i++) {
      const sectionFile = req.files.find(file => file.fieldname === `sectionImage${i}`);
      if (sectionFile) {
        const uploaded = await uploadMedia(sectionFile.path);
        parsedSections[i].image = uploaded.secure_url;
      }
    }

    const blog = new Blog({
      title,
      slug,
      intro,
      sections: parsedSections,
      coverImage: coverImageUrl,
      category,
    });

    await blog.save();

    res.status(201).json({
      message: "Blog created successfully",
      blog,
    });
  } catch (error) {
    res.status(400).json({
      message: "Error creating blog",
      error: error.message,
    });
  }
};

export const getBlogBySlug = async (req, res) => {
  try {
    const { slug } = req.params;
    const blog = await Blog.findOne({ slug });
    if (!blog) {
      return res.status(404).json({ message: "Blog not found" });
    }
    res.status(200).json(blog);
  } catch (error) {
    res.status(400).json({
      message: "Error fetching blog",
      error: error.message,
    });
  }
};

export const getBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find({});
    res.status(200).json(blogs);
  } catch (error) {
    res.status(400).json({
      message: "Error fetching blogs",
      error: error.message,
    });
  }
};

export const updateBlog = async (req, res) => {
  try {
    const { id } = req.params;
    console.log(id)
    const { title, slug, intro, sections, category } = req.body;

    const blog = await Blog.findById(id);
    if (!blog) {
      return res.status(404).json({ message: "Blog not found" });
    }

    if (title) blog.title = title;
    if (slug) blog.slug = slug;
    if (intro) blog.intro = intro;
    if (category) blog.category = category;


    const coverFile = req.files?.find(file => file.fieldname === "coverImage");
    if (coverFile) {
      const uploaded = await uploadMedia(coverFile.path);
      blog.coverImage = uploaded.secure_url;
    }

    let parsedSections = sections || blog.sections;
    if (typeof parsedSections === "string") {
      parsedSections = JSON.parse(parsedSections);
    }

    for (let i = 0; i < parsedSections.length; i++) {
   
      const sectionFile = req.files?.find(file => file.fieldname === `sectionImage${i}`);
      if (sectionFile) {
        const uploaded = await uploadMedia(sectionFile.path);
        parsedSections[i].image = uploaded.secure_url;
      } else if (blog.sections[i] && blog.sections[i].image) {
        parsedSections[i].image = blog.sections[i].image;
      }
    }

    blog.sections = parsedSections;

    await blog.save();

    res.status(200).json({
      message: "Blog updated successfully",
      blog,
    });
  } catch (error) {
    res.status(400).json({
      message: "Error updating blog",
      error: error.message,
    });
  }
};

export const deleteBlog = async (req, res) => {
  try {
    const { id } = req.params;

    const blog = await Blog.findById(id);
    if (!blog) {
      return res.status(404).json({ message: "Blog not found" });
    }

    await Blog.findByIdAndDelete(id);

    res.status(200).json({ message: "Blog deleted successfully" });
  } catch (error) {
    res.status(400).json({
      message: "Error deleting blog",
      error: error.message,
    });
  }
};