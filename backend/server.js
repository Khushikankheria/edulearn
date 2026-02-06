const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const contactRoutes = require("./routes/contact");
const authRoutes = require("./routes/auth");

const app = express();

// Environment variables
const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI;

// Middleware
app.use(cors({
  origin: ["http://localhost:5173", "http://localhost:3000"],
  credentials: true,
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Request logging middleware
app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.path}`);
  next();
});

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/contact", contactRoutes);

// Health check endpoint
app.get("/health", (req, res) => {
  res.status(200).json({ 
    message: "Server is running",
    timestamp: new Date().toISOString()
  });
});

// MongoDB Connection
mongoose.set("strictQuery", false);
mongoose
  .connect(MONGO_URI)
  .then(() => {
    console.log("✓ MongoDB connected successfully");
    console.log(`✓ Database: edulearn`);
  })
  .catch((err) => {
    console.error("✗ MongoDB connection error:", err.message);
    console.error("Make sure:");
    console.error("  1. MongoDB is running");
    console.error("  2. Connection string is correct");
    process.exit(1);
  });

// 404 handler
app.use((req, res) => {
  res.status(404).json({ error: "Route not found" });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(`✗ Error: ${err.message}`);
  res.status(500).json({ error: "Internal server error" });
});

// Start the Server
app.listen(PORT, () => {
  console.log(`\n╔════════════════════════════════════╗`);
  console.log(`║  EduLearn API Server`);
  console.log(`║  Running on http://localhost:${PORT}`);
  console.log(`║  Environment: ${process.env.NODE_ENV || "development"}`);
  console.log(`╚════════════════════════════════════╝\n`);
});

// Graceful shutdown
process.on("SIGINT", () => {
  console.log("\n✓ Server shutting down...");
  mongoose.connection.close();
  process.exit(0);
});
