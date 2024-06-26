const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
// const path = require("path");
const generateSitemap = require("./sitemapGenerator"); // Import the sitemap generator

const app = express();
app.use(
  cors({
    origin: "http://localhost:3000",
  })
);
app.use(bodyParser.json());
app.use("/static", express.static("../server-side"));

mongoose.connect("mongodb://localhost:27017/myFirstDatabase");

const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB database connection established successfully");
});

// Define a schema and model
const Schema = mongoose.Schema;
const FormSchema = new Schema({
  name: String,
  email: String,
  age: String,
});

const Form = mongoose.model("Form", FormSchema);

// Routes
app.post("/", (req, res) => {
  const newEntry = new Form(req.body);
  newEntry
    .save()
    .then(() => res.status(201).send("Form data saved"))
    .catch((err) => res.status(400).send("Error saving data"));
});

// app.post("/update-sitemap", (req, res) => {
//   const { routes } = req.body;
//   generateSitemap(routes);
//   res.status(200).send("Sitemap updated");
// });

let currentRoutes = [];

app.post("/update-sitemap", (req, res) => {
  if (!req.body.routes) {
    return res.status(400).send("No routes provided");
  }
  currentRoutes = req.body.routes;
  generateSitemap(currentRoutes)
    .then(() => res.json({ message: "Sitemap updated" }))
    .catch((error) => {
      console.error("Error generating sitemap:", error);
      res.status(500).json({ error: "Sitemap update failed" });
    });
});

// Serve static files from the public directory
app.use(express.static("public"));

// Generate and serve the sitemap dynamically
app.get("/sitemap.xml", async (req, res) => {
  try {
    const sitemap = await generateSitemap(currentRoutes);
    res.type("application/xml");
    console.log("Created");
    res.send(sitemap);
  } catch (err) {
    console.log("Failed");
    res.status(500).send("Error generating sitemap");
  }
});

// // All other routes handled by React
// app.get("*", (req, res) => {
//   res.sendFile(path.join(__dirname, "public", "index.html"));
// });

const PORT = 5002;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
