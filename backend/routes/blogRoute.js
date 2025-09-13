import express from "express"
import { createBlog, deleteBlog, getBlogBySlug, getBlogs, updateBlog } from "../controllers/blogController.js"
import upload from "../utils/multer.js";
const router=express.Router()
router.post("/create-blog",upload.any(),createBlog);
router.get("/get-blogs",getBlogs);
router.get("/:slug",getBlogBySlug);
router.put("/update-blog/:id",upload.any(),updateBlog);
router.delete("/delete-blog/:id",deleteBlog);
export default router