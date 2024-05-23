import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
const app = express();

app.listen(3000, () => {
  console.log("server is running on port 3000!!");
});

mongoose
  .connect(process.env.MONGO_DB)
  .then(() => {
    console.log("connected to db");
  })
  .catch((error) => {
    console.log(error);
  });
