import bcrypt from "bcrypt";

// import models
import Student from "../models/student.js";

export function registerStudent(req, res) {
  try {
    const hashedPassword = bcrypt.hashSync(req.body.studentPassword, 10);

    const student = new Student({
      studentUsername: req.body.studentUsername,
      studentPassword: hashedPassword,
    });

    student
      .save()
      .then(() => {
        res.json({
          message: "Student registered successfully",
          "Student Name": req.body.studentUsername,
        });
      })
      .catch((error) => {
        res.status(400).json({
          message: "Error registering student",
          error: error.message,
        });
      });
  } catch (error) {
    res.status(500).json({
      message: "Server error",
      error: error.message,
    });
  }
}
