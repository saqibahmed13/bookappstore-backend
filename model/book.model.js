// here we are storing the data what we have stored in list.json 

import mongoose from "mongoose";

const bookSchema = mongoose.Schema({
    name:String,
    price:Number,
    category:String,
    image:String,
    title:String
})

const Book = mongoose.model('Book', bookSchema)

export default Book;