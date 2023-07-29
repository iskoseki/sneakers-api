const express = require('express')
const mongoose = require('mongoose')
const app = require('./src/app')
const Product = require('./src/models/productModel')
const port = process.env.PORT || 3000 // default port

require('dotenv').config() // set config .env variable

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.get('/', (res, req) => {
  res.send('<h1>Welcome to Snk! a cool API</h1>')
})
// GET /products
app.get('/products', async (res, req, next) => {
  try {
    const products = await Product.find({})
    res.json(products)
  } catch (err) {
    res.json({ message: err.message })
  }
})
// GET /products/:id
app.get('/product/:id', async (res, req) => {
  try {
    const { id } = req.params
    const products = await Product.findById(id)
    res.status(200).json(products)
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
})

// POST /products
app.post('/products', async (req, res, err) => {
  try {
    const product = await Product.create(req.body)
    res.status(200).json(product)
    console.log(product)
  } catch (error) {
    console.log(error.message)
    res.status(500).json({ message: error.message })
  }
})

app.listen(port, () => console.log('listening on port'))

mongoose.set('strictQuery', false)
mongoose
  .connect(process.env.URL_DB)
  .then(() => console.log('--- ✅ Database connection established ---'))
  .catch(() => console.log('--- ❌ Database connection rejected ---'))
