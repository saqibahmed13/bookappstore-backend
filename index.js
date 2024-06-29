// const express = require('express')
// const  dotenv = require('dotenv')
// earlier we use like this we have upgraded way to write as below 

import express from 'express';
import dotenv from 'dotenv';
import mongoose  from 'mongoose';
import cors from 'cors' 

 
import bookRoute from './route/book.route.js'
import userRoute from './route/user.route.js'

const app = express()
app.use(cors({origin:"*"}));
app.use(express.json());
dotenv.config(); 

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })
// below data we are writing in env file 
// connecting to local mongoDb 

const PORT= process.env.PORT || 4000  // if not env port , then 4000 is our port
const URI = process.env.MongoDbURI

// app.use(bodyParser.urlencoded({ extended: true }))
// app.use(bodyParser.json())

try{
    mongoose.connect(URI, {
        useNewUrlParser :true,
        useUnifiedTopology:true,
    });
    console.log("Connected to MongoDb")
}catch(error){
  console.log("Error : ",error);  
}
// defining routes 
app.use('/book',bookRoute)
app.use('/user',userRoute)
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`)
})