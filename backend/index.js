import express from "express";
import { PORT, mongoDBURL } from "./config.js";
import mongoose from "mongoose";
import booksRoute from "./routes/booksRoute.js";
import cors from "cors";

const app = express();

// Middleware for parsing request body
app.use(express.json());

// Middleware for enabling CORS
app.use(cors());

app.get("/", (request, response) => {
  console.log(request);
  return response.status(500).send("ようこそう、 MERN Stack Bookstore へ！");
});

app.use("/books", booksRoute);

mongoose
  .connect(mongoDBURL)
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(PORT, () => {
      console.log(`Server is running on:${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
