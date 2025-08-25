import { Model, model, Schema } from "mongoose";
import { IBook, IBookMethods } from "./book.interface";

const bookSchema = new Schema<IBook, Model<IBook>, IBookMethods>(
    {
        title: { type: String, required: [true, "Title is required"], trim: true },
        author: { type: String, required: [true, "Author is required"], trim: true },
        genre: {
            type: String,
            enum: {
                values: [
                    "FICTION",
                    "NON_FICTION",
                    "SCIENCE",
                    "HISTORY",
                    "BIOGRAPHY",
                    "FANTASY",
                ],
                message: "Genre must be one of: FICTION, NON_FICTION, SCIENCE, HISTORY, BIOGRAPHY, FANTASY",
            },
            required: [true, "Genre is required"],
        },
        isbn: {
            type: String,
            required: [true, "Isbn is required"],
            unique: true,
        },
        description: { type: String },
        copies: {
            type: Number,
            required: [true, "Number of copies is required"],
            min: [0, "Copies must be a positive number"],
        },

        available: {
            type: Boolean,
            default: true,
        },
    },
    {
        versionKey: false,
        timestamps: true,
    }
);

bookSchema.pre("save", function () {
    this.available = this.copies > 0;
});

bookSchema.post("save", function (doc) {
    console.log(`Book ${doc.title} was created successfully.`);
});

bookSchema.method("checkUpdate", async function () {
    this.available = this.copies > 0;
    await this.save();
});
export const Book = model("Books", bookSchema);