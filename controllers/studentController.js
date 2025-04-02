import bcrypt from "bcrypt";
import crypto from "crypto";
import chalk from "chalk";

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
    const tempStudentHash = bcrypt.hashSync(req.body.studentPassword, 1);

    // Hash the salted password
    const hashedPassword = bcrypt.hashSync(saltedPassword, 10);

    // Developer Purpose - only logging, no saving to database
    console.log(
      chalk.gray(
        "---------------------------------------------------------------------------------------"
      )
    );
    console.log(chalk.green("Student Registration Process"));
    console.log(chalk.red("*** This is for developer purpose only ***"));
    console.log(
      chalk.hex("#FFA500")("Student Name \t\t: "),
      req.body.studentUsername
    ); // Orange color
    console.log(
      chalk.hex("#FFA500")("Student Password \t: "),
      req.body.studentPassword
    ); // Orange color
    console.log(chalk.hex("#FFA500")("Salt Phase \t\t: "), saltPhase); // Orange color
    console.log(
      chalk.hex("#FFA500")("Hashed Student Password\t: "),
      tempStudentHash
    ); // Orange color
    console.log(
      chalk.hex("#FFA500")("Hashed Salted Password\t: "),
      hashedPassword
    ); // Orange color

    res.json({
      message: "Student registration details logged successfully",
      "Student Name": req.body.studentUsername,
      "Salt Phase": saltPhase,
      "Hashed Student Password": tempStudentHash,
      "Hashed Salted Password": hashedPassword,
    });
  } catch (error) {
    res.status(500).json({
      message: "Server error",
      error: error.message,
    });
  }
}
