require("dotenv").config(); // set config .env variable
const path = require("path");
const cors = require("cors");
const express = require("express");
const app = require("./src/app");
const routes = require("./src/routes/routes");
const cookieParser = require("cookie-parser");
const PORT = process.env.PORT || 3000; // default port
const MongoConnection = require("./src/config/Mongodb");

// Mongoose configuration and connection
MongoConnection();
// VIEW SETTINGS
app.set("views", path.join(__dirname, "./src/public/views")); // use pug templates file in /public/views subdirectory
app.set("view engine", "pug");
// BODY PARSERS
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors());
app.use("/public", express.static("public")); // serve static files in public subdirectory under /public virtual path
app.use("/api", routes);

// Server up and running
app.listen(PORT, () => console.log("Server listening on port " + PORT));
