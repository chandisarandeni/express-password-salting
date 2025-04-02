const studentSchema = mongoose.Schema({
  studentUsername: {
    type: String,
    required: true,
  },
  studentPassword: {
    type: String,
    required: true,
  },
  studentSaltPhase: {
    type: String,
    required: true,
  },
});

const Student = mongoose.model("students", studentSchema);
export default Student;
