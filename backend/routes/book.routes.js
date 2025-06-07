import express from "express";
import {
  booksStats,
  borrowBook,
  createBook,
  deleteBook,
  getAllBooks,
  getSingleBook,
  searchBooks,
  updateBook,
} from "../controllers/book.controller.js";
import { protect } from "../middleware/protect.js";

const router = express.Router();

router.get("/", getAllBooks);

router.get("/search", searchBooks);

router.get("/stats", booksStats);

router.get("/:id", getSingleBook)

router.post("/",  createBook);

router.put("/:id", updateBook);

router.delete("/:id",  deleteBook);

router.patch("/borrow/:id", borrowBook);



export default router;
