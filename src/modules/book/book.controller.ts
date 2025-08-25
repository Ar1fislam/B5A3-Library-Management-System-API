/* eslint-disable @typescript-eslint/no-explicit-any */
import { Book } from "./book.model";
import { Request, Response } from "express";

export const createBook = async (req: Request, res: Response) => {
    try {
        const book = await Book.create(req.body);

        res.status(201).json({
            success: true,
            message: "Book created successfuly",
            data: book,
        });
    } catch (error) {
        res.send({
            success: false,
            message: "failed to create book",
            error,
        })
    }
};

export const getAllBooks = async (req: Request, res: Response) => {
    try {
        const { filter, sortBy = 'createdAt', sort = 'asc', limit = 10 } = req.query;
        const queryData: any = {};
        if (filter) {
            queryData.genre = filter;
        }
        const books = await Book.find(queryData).sort({ [sortBy as string]: sort === 'asc' ? 1 : -1 }).limit(Number(limit));
        if (books.length === 0) {
            throw new Error(`Books not found in ${filter} genre`);
        }
        else {
            res.status(200).json({
                success: true,
                message: "Books retrieved successfully",
                data: books,
            });
        }
    }
    catch (error: any) {
        res.status(400).json({
            success: false,
            message: "Books retrieved failed",
            error: {
                message: error.message,
                errors: error.name,
            },
        });
    };
}

export const getBookById = async (req: Request, res: Response) => {
    try {
        const bookId = req.params.bookId;
        const book = await Book.findById(bookId);

        if (!book) {
            return res.status(404).json({
                success: false,
                message: `Book not found by (${bookId}) Id.`,
            });
        }
        res.status(200).json({
            success: true,
            message: "Book retrieved successfully",
            data: book,
        });
    } catch (error: any) {
        res
            .status(400)
            .json({ success: false, message: "Book retrieved failed", error });
    }
};

export const updateBookById = async (req: Request, res: Response) => {
    try {
        const bookId = req.params.bookId;
        const book = await Book.findByIdAndUpdate(bookId, req.body, {
            new: true,
            runValidators: true,
        });

        if (book === null) {
            return res.status(404).json({
                success: false,
                message: `Book not found by (${bookId}) Id.`,
            });
        }
        await book.checkUpdate();
        res.status(201).json({
            success: true,
            message: "Book updated successfully",
            data: book,
        });
    }

    catch (error: any) {
        res.status(400).json({ success: false, message: "Book updated failed", error });
    }
};

export const deleteBookById = async (
    req: Request,
    res: Response
) => {
    try {
        const bookId = req.params.bookId;
        const deleteBook = await Book.findByIdAndDelete(bookId);
        if (!deleteBook) {
            throw new Error("Book not found");
        }
        res.status(200).json({
            success: true,
            message: "Book deleted successfully",
            data: null,
        });
    } catch (error: any) {
        res.status(400).json({
            success: false,
            message: "Book deletetion failed",
            error: {
                name: error.name,
                message: error.message,
            },
        });
    }
};
