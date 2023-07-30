require('dotenv').config() // set config .env variable

const express = require('express')
const mongoose = require('mongoose')
const app = require('./src/app')
const port = process.env.PORT || 3000 // default port
const routes = require('./src/routes/routes')

// Mongoose configuration
mongoose.set('strictQuery', false)
mongoose
  .connect(process.env.URL_DB)
  .then(() => console.log('--- ✅ Database connection established ---'))
  .catch(() => console.log('--- ❌ Database connection rejected ---'))

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use('/api', routes)

app.listen(port, () => console.log('listening on port'))
