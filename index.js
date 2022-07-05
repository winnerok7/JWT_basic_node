const express = require('express');
const mongoose = require('mongoose');
const PORT = 5000;
const authRouter = require('./authRouter')


const app = express()

app.use(express.json())
app.use('/auth', authRouter)

const start = async () => {
   try {
      await mongoose.connect('mongodb+srv://winnerok7:dfg000@cluster0.he5unvm.mongodb.net/?retryWrites=true&w=majority')
      app.listen(PORT, () => console.log('Server started'))
   } catch (e) {
      console.log(e)
   }
}

start()