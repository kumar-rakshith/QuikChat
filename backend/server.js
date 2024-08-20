import dotenv from "dotenv";
import express from "express";
import authRoutes from "./routes/auth.routes.js"

const app = express();
const PORT = 5000;

dotenv.config();
app.get("/",(req,res)=>{
    res.send("hello change mantha  wolld");
});

app.use("/auth",authRoutes);

app.listen(PORT,()=>console.log(`dala unad  runig ${PORT}`));