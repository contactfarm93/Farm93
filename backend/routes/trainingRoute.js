import express from "express"
import { submitTrainingForm } from "../controllers/trainingController.js";
const router=express.Router()
router.post("/train",submitTrainingForm);

export default router