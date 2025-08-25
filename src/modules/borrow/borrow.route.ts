import { Router } from "express"
import { borrowBook, getBorrowedBooksSummary } from "./borrow.controller"

export const borrowRoutes = Router();

borrowRoutes.post("/borrow", borrowBook);
borrowRoutes.get("/borrow", getBorrowedBooksSummary);