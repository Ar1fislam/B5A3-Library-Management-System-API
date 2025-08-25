import express, { Application, Request, Response } from "express"
import cors from "cors"

const app: Application = express();

app.use(
  cors({
    origin: (origin, callback) => {
      callback(null, origin || "*");
    },
  })
);

app.use(express.json());


app.get("/", (req: Request, res: Response) => {
  res.status(200).send({
    success:true,
    message: "Welcome to Library Management System API",
  });
});


app.use((req: Request, res: Response) => {
  res.status(404).send({success: false, message: "404 not found" });
});







export default app;