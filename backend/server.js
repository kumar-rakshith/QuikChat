import dotenv from "dotenv";
import express from "express";
import authRoutes from "./routes/auth.routes.js";
import connectToMongoDB from "./db/connectToMongoDb.js"; // Note the space between `from` and `"./db/connectToMongoDb.js"`

const app = express();
const PORT = 5000;

// Load environment variables from .env file
dotenv.config();

// Root route
app.get("/", (req, res) => {
    res.send("Hello Change Mantha World");
});

// Authentication routes
app.use("/auth", authRoutes);

// Start the server and connect to MongoDB
app.listen(PORT, () => {
    connectToMongoDB(); // Connect to MongoDB when the server starts
    console.log(`Server Running on port ${PORT}`); // Fixed typo here
});

