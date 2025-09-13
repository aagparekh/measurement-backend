const express = require("express");
const app = express();
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const customerRoutes = require("./routes/customerRoutes");
const cors = require("cors");

// Config ENV
dotenv.config();

// Database Connection
connectDB();

// Middleware
app.use(express.json());
const PORT = process.env.PORT || 5000;
app.use(
  cors({
    origin: [
      "http://localhost:5173", // Vite default dev server
      //   "https://designsbyraksha-measurements.vercel.app", // once you deploy frontend
      //   "https://measurement-frontend-ornaments.vercel.app",
      //   "https://measurement-frontend-ibutgo3rp-ornaments.vercel.app",
    ],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

app.use((req, res, next) => {
  console.log("Incoming Origin:", req.headers.origin);
  next();
});

// app.get("/api/hello", (req, res) => {
//   res.json({ message: "Hello from server!" });
// });

// Routes
app.use("/api/customer", customerRoutes);

app.listen(PORT, () => console.log("Server running on port 5000"));
