// dependencies
const mongoose = require('mongoose')

// mongoDB connection string
const MONGODB_URI = process.env.MONGODB_URI

// mongoose connection
mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})

// error / success messages
const db = mongoose.connection
db.on('error', (err) => console.log(`${err.message} is Mongod not running?`))
db.on('connected', () => console.log('mongo connected'))
db.on('disconnected', () => console.log('mongo disconnected'))
