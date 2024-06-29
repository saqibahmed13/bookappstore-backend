import express from "express";
const app = express();
import { getBook } from "../controller/book.controller.js";
// import books from "../../Frontend/public/list.js";
import Book from "../model/book.model.js";

const router = express.Router();

router.get("/", getBook);
// router.post("/seed", async (req, res) => {
//   for (const book of books) {
//     console.log(book);
//     const newBook = await Book.create({
//       name: book.name,
//       price: book.price,
//       category: book.category,
//       image: book.image,
//       title: book.title,
//     });
//     newBook.save();
//   }
//   return res.json({ msg: "hello ji" });
// });

app.use(express.json());

// router.put("/update-seed", async (req, res) => {
//     const { newName, price, title } = req.body;

//     try {
//         const updatedBooks = [];
//         for (const book of books) {
//             const updatedBook = await Book.findOneAndUpdate(
//                 { _id: book._id }, // Assuming books array contains book documents with _id
//                 {
//                     name: newName,
//                     price: price,
//                     title: title,
//                     category: book.category,
//                     image: book.image
//                 },
//                 { new: true } // To return the updated document
//             );
//             updatedBooks.push(updatedBook);
//         }
//         return res.json(updatedBooks);
//     } catch (error) {
//         console.error(error);
//         return res.status(500).json({ error: 'An error occurred while updating the books.' });
//     }
// });
export default router;
