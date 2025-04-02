import bcrypt from "bcrypt";
import crypto from "crypto";

// import models
import Student from "../models/student.js";

function genterateSaltPhase() {
  return crypto.randomBytes(3).toString("hex").toUpperCase();
}

export function registerStudent(req, res) {
  try {
    // Generate salt phase
    const saltPhase = genterateSaltPhase();

    // Append the salt phase to the password
    const saltedPassword = req.body.studentPassword + saltPhase;

    // Developer Purpose
    const tempStudentHash = bcrypt.hashSync(req.body.studentPassword, 10);

    // Hash the salted password
    const hashedPassword = bcrypt.hashSync(saltedPassword, 10);

    const student = new Student({
      studentUsername: req.body.studentUsername,
      studentPassword: hashedPassword,
      studentSaltPhase: saltPhase,
    });

    student
      .save()
      .then(() => {
        res.json({
          message: "Student registered successfully",
          "Student Name": req.body.studentUsername,

          "Developer Purpose": "",
          "Student Password": req.body.studentPassword,
          "Salt Phase": saltPhase,
          "Hashed Student Password": tempStudentHash,
          "Hashed Salted Password": hashedPassword,
        });

        // Developer Purpose
        console.log("-----------------------------");
        console.log("Student Saved Successfully");
        console.log("Student Name \t\t: ", req.body.studentUsername);
        console.log("Student Password \t: ", req.body.studentPassword);
        console.log("Salt Phase \t\t: ", saltPhase);
        console.log("Hashed Student Password\t: ", tempStudentHash);
        console.log("Hashed Salted Password\t: ", hashedPassword);
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
