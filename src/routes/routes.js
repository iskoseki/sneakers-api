const express = require("express");
const Product = require("../models/productModel");
const router = express.Router();
// 👇️ handle uncaught exceptions
process.on("uncaughtException", function (err) {
  console.log(err);
});

// 👷🏼‍♀️ GET /home
router.get("/", function (req, res, err) {
  res.render("index", { title: "pug-Bootstrap" });
});

// ✅ GET method /products
router.get("/products", async (req, res, err) => {
  try {
    const data = await Product.find();
    res.json(data);
    console.log("Product req created: ", data);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
});

// ✅ GET /products/:id
router.get("/products/:id", async (req, res, err) => {
  try {
    const ID = req.params.id;
    const data = await Product.findById(ID);
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
// ✅ POST /products
router.post("/products", async (req, res, err) => {
  try {
    const product = await Product.create(req.body);
    res.status(200).json(product);
    console.log("Product req created: ", product);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
});

// ✅ DELETE by ID Method
router.delete("/products/:id", async (req, res, err) => {
  try {
    const ID = req.params.id;
    const data = await Product.findByIdAndDelete(ID);
    res.json({ message: `The sneaker: ${data.name} has been deleted..` });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;
