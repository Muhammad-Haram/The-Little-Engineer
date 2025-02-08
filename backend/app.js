import dotenv from "dotenv";
dotenv.config();
import morgan from "morgan";
import express from "express";
import connectToDb from "./db/db.js";
import cookieParser from "cookie-parser";
import cors from "cors";

import userRouter from "./routes/user.routes.js";
import projectRouter from "./routes/project.routes.js";

connectToDb();

const app = express();

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extends: true }));
// app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

app.use("/users", userRouter);
app.use("/projects", projectRouter);

app.get("/", (req, res) => {
  res.send("hello world");
});

export default app;
