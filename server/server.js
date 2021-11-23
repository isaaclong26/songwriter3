// dependencies
const express = require('express')
const mongoose = require('mongoose')
const path = require('path')
const app = express()
require('dotenv').config()

// database configuration
require('./config/database')

// middleware
app.use(express.json())

// app listener
const PORT = process.env.PORT || 5000
app.listen(PORT, () => console.log(`server is listening on port: ${PORT}`))

// production setup
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.resolve(__dirname, '../client/build')))

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'))
  })
}
