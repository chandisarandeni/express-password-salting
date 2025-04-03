import express from "express";
import bodyParser from "body-parser";
import chalk from "chalk";

//import router
import studentRouter from "./routes/studentRoute.js";

const app = express();

app.use(bodyParser.json());

// Use the router
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
