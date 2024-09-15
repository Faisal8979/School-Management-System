const express = require('express');
const { postAttandenceController, getAttendanceController } = require('../controllers/AttandenceController');


const router = express.Router();

//====POST Attendance====//

router.post('/attendance-fill/sid', postAttandenceController);

//===GET Attendance===//
router.get("/attendance-get/:sid", getAttendanceController)


module.exports = router;