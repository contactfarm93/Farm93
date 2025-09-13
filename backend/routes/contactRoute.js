import express from "express"
import { submitContactForm } from "../controllers/contactController.js";
const router=express.Router()
router.post("/contact-us",submitContactForm);

export default router