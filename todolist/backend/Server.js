const express = require ('express')
const mongoose = require ('mongoose')

require ('dotenv').config()

const app = express()
const PORT = process.env.PORT || 5119

require('dotenv').config();

console.log('MONGODB_URL:', process.env.MONGODB_URL); // Log the URL

mongoose.connect(process.env.MONGODB_URL)
  .then(() => console.log('Connected to MongoDB...'))
  .catch((err) => console.error('MongoDB connection error:', err));


mongoose
.connect(process.env.MONGODB_URL)
.then(()=> console.log(`Connected To MongoDB...`))
.catch((err) => console.log(err))

app.listen(PORT, () => console.log(`Listening on : ${PORT}`))
