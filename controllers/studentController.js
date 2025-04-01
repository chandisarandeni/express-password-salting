import bcrypt from "bcrypt";

// import models
import Student from "../models/student.js";

export function registerStudent(req, res) {
  const hashedPassword = bcrypt.hashSync(req.body.studentPassword, 10);

  const student = new Student({
    studentName: req.body.studentName,
    studentPassword: hashedPassword,
  });

  student.save().then(() => {
    res
      .json({
        message: "Student registered successfully",
        "Student Name": req.body.studentName,
      })
      .catch((Error) => {
        res.status(400).json({
          message: "Error registering student",
          error: Error,
        });
      });
  });
}
