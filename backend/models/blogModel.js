import mongoose from "mongoose";

const sectionSchema = new mongoose.Schema({
  heading: { type: String, required: true },   
  content: { type: String, required: true },   
  image: { type: String },                     
  listItems: [String],                       
});

const blogSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },  
    slug: { type: String, required: true, unique: true },
    coverImage: { type: String }, 
    intro: { type: String, required: true },   
    sections: [sectionSchema],                 
    category: { type: String, default: "Mushrooms" }
  },
  { timestamps: true }
);

const Blog = mongoose.model("Blog", blogSchema);

export default Blog;
