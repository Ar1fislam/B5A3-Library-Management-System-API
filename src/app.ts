import express, { Application, Request, Response } from "express"
import cors from "cors"
import { bookRoutes } from "./modules/book/book.route";
import { borrowRoutes } from "./modules/borrow/borrow.route";

const app: Application = express();

app.use(
    cors({
        origin: (origin, callback) => {
            callback(null, origin || "*");
        },
    })
);

app.use(express.json());

app.use("/api", bookRoutes);
app.use("/api", borrowRoutes);

app.get("/", (req: Request, res: Response) => {
    res.status(200).send({
        success: true,
        message: "Welcome to Library Management System API",
    });
});


// 404 error route
app.use((req: Request, res: Response) => {
    res.status(404).json({ message: "404 not found", success: false });
});





export default app;