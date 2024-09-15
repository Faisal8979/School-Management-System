const Attendance = require("../model/AttendanceModel");



//Post Method
const postAttandenceController = async (req, res) =>{
   try {
      const {status } = req.body;
      if (!status) {
         res.status(404).send({
            success: false,
            message:"Please Provide Attendance"
         })
      }
     const attendance = await Attendance.findById(req.params.sid);
      await attendance.save();
      res.status(201).send({
         success: true,
         message: 'Attendance Marked Successfully',
         attendance
      });

   } catch (error) {
    console.log(error);
       res.status(500).send({
           success: false,
           message:"Error In Attendance API"
    })
   }
}
//===Get Attendance==//
const getAttendanceController = async(req, res) => {
     try {
  const { studentId } = req.params;
  const attendance = await Attendance.find({ studentId });
  res.send(attendance);
     } catch (error) {
        console.log(error);
         res.status(500).send({
             success: false,
             message:"Error In Get Attendance API"
        })
     }
}

module.exports = { postAttandenceController, getAttendanceController };