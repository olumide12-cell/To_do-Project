const express = require('express')
const mongoose = require('mongoose')
const todo = require('./routes/todo')

const app = express()

app.use(express.json())

app.use(express.urlencoded({ extended: false }))

const MONGO_URI =
  "mongodb+srv://Hollumidhe:Hollumidhe12@cluster0.2ticcn3.mongodb.net/?retryWrites=true&w=majority"

app.use('/todos', todo)

mongoose.connect(MONGO_URI).then((res) => {
  if (res) {
    console.log('Mongodb Connected')
  }
  app.listen(3000, () => { console.log('Server Listening on port 8000') })
})