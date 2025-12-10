const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const cors = require("cors");
const fs = require("fs");

const app = express();

// Middlewares
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Debug: check files
console.log("Files in models:", fs.readdirSync(path.join(__dirname, "models")));

// Serve static frontend files
app.use(express.static(path.join(__dirname, "public")));

// MongoDB (Render uses Cloud DB)
mongoose.connect(process.env.MONGO_URL)
    .then(() => console.log("MongoDB Connected"))
    .catch(err => console.log("MongoDB Error:", err));

// Contact Model
const Contact = require("./models/Contact");

// Correct route
app.post("/contact", async (req, res) => {
    try {
        const contact = new Contact(req.body);
        await contact.save();
        res.json({ success: true, message: "Saved to MongoDB!" });
    } catch (err) {
        console.log("Save Error:", err);
        res.status(500).json({ success: false });
    }
});

// Default route
app.use((req, res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"));
});

// Start Server (Render uses dynamic port)
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on ${PORT}`);
});
