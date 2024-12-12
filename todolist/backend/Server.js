const express = require ('express')
const mongoose = require ('mongoose')
const cors = require ('cors')

const routes = require('./routes/ToDoRoute.js')

require ('dotenv').config()

const app = express()
const PORT = process.env.PORT || 5119

require('dotenv').config();

app.use(express.json());
app.use(cors());

console.log('MONGODB_URL:', process.env.MONGODB_URL); // Log the URL

mongoose.connect(process.env.MONGODB_URL)
  .then(() => console.log('Connected to MongoDB...'))
  .catch((err) => console.error('MongoDB connection error:', err));

  app.use(routes)

  mongoose.connection.once("open", () => {
    console.log(`Connected to Database: ${mongoose.connection.name}`);
  });
  

app.listen(PORT, () => console.log(`Listening on : ${PORT}`))
