import { Router } from "express";
import { createBook, deleteBookById, getAllBooks, getBookById, updateBookById } from "./book.controller";

export const bookRoutes = Router();

bookRoutes.post("/books", createBook);
bookRoutes.get("/books", getAllBooks);
bookRoutes.get("/books/:bookId", getBookById);
bookRoutes.put("/books/:bookId", updateBookById);
bookRoutes.delete("/books/:bookId", deleteBookById);
