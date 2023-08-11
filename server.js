require('dotenv').config() // set config .env variable
const path = require('path')
const express = require('express')
const mongoose = require('mongoose')
const app = require('./src/app')
const routes = require('./src/routes/routes')
const cookieParser = require('cookie-parser')
const PORT = process.env.PORT || 3000 // default port
// Mongoose configuration
mongoose.set('strictQuery', false)
mongoose
  .connect(process.env.URL_DB)
  .then(() => console.log('--- ✅ Database connection established ---'))
  .catch(() => console.log('--- ❌ Database connection rejected ---'))

// VIEW SETTINGS
app.set('views', path.join(__dirname, './src/public/views')) // use pug templates file in /public/views subdirectory
app.set('view engine', 'pug')
// BODY PARSERS
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())

app.use('/public', express.static('public')) // serve static files in public subdirectory under /public virtual path
app.use('/', routes)

// Server up and running
app.listen(PORT, () => console.log('Server listening on port ' + PORT))
