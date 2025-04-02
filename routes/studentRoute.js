import express from "express";
import { registerStudent } from "../controllers/studentController.js";

const studentRouter = express.Router();

studentRouter.post("/", registerStudent);

export default studentRouter;
