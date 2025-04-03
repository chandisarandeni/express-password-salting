import express from "express";

// import controller functions
import { registerStudent } from "../controllers/studentController.js";

// create a router object
const studentRouter = express.Router();

// define routes
studentRouter.post("/", registerStudent);

export default studentRouter;
