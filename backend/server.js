import dotenv from "dotenv";
import express from "express";
import authRoutes from "./routes/auth.routes.js";
import connectToMongoDB from "./db/connectToMongoDb.js"; // Note the space between `from` and `"./db/connectToMongoDb.js"`

const app = express();
const PORT = 5000;


dotenv.config();
app.use("/auth", authRoutes);
app.use(express.json());



// Start the server and connect to MongoDB
app.listen(PORT, () => {
    connectToMongoDB(); // Connect to MongoDB when the server starts
    console.log(`THe Server Running on port ${PORT}`); // Fixed typo here
});

