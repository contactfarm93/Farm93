import express from "express";
import cookieParser from "cookie-parser";
import dotenv from "dotenv"
import cors from "cors";
import dbConnect from "./config/db.js";
import blogRoute from "./routes/blogRoute.js"
import trainingRoute from "./routes/trainingRoute.js"
import contactRoute from "./routes/contactRoute.js"
import adminRoute from "./routes/adminRoute.js"
const app=express();
dotenv.config({});
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());

const corsOptions = {
    origin: ["https://farm93.com", "https://www.farm93.com"],
    credentials:true
}
const PORT = process.env.PORT || 4000;
app.use(cors(corsOptions));
dbConnect()
app.use("/api/v1/blog",blogRoute)
app.use("/api/v1/training",trainingRoute)
app.use("/api/v1/contact",contactRoute)
app.use("/api/v1/admin",adminRoute)

app.listen(PORT,()=>{
    console.log(`Server running at port ${PORT}`);
})
