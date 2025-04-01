import mongoose from "mongoose";

const studentSchema = mongoose.Schema({
  studentUsername: {
    type: String,
    required: true,
  },
  studentPassword: {
    type: String,
    required: true,
  },
});

const Student = mongoose.model("Student", studentSchema);
export default Student;