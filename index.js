import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import chalk from "chalk";

//import router
import studentRouter from "./routes/studentRoute.js";

const app = express();

app.use(bodyParser.json());

//mongodb connection
// Connect to MongoDB
mongoose
  .connect(
    "mongodb+srv://admin:admin@cluster0.uluf2.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log("Error connecting to MongoDB:", err));

app.use("/", studentRouter);

const port = 3000;
app.listen(port, () => {
  console.log(
    chalk.gray(
      "---------------------------------------------------------------------------------------"
    )
  );
  console.log(`Server is running at ` + chalk.blue(`http://localhost:${port}`));
});
