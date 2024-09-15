const mongoose = require("mongoose");

const attendanceSchema = new mongoose.Schema({
  studentId: { type: mongoose.Schema.Types.ObjectId, ref: 'Student' },
  // date: { type: Date, default: Date.now },
  status: { type: String, enum: ['P', 'A'] }
}, {timestamps:true});
const Attendance = mongoose.model('Attendance', attendanceSchema);



module.exports = Attendance;