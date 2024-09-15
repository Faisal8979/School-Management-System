const express = require("express");
const {StudentRegisterController, StudentLoginController, testController, getAllStudentController, getStudentPhotoController, getSingleStudentController, StudentUpdateController, deleteStudentController, StudentFilterController} = require("../controllers/StudentsController");
const {isAdmin, requireSignIn} = require("../middlewere/AuthMiddlewere");
const formidable = require("express-formidable");


const router = express.Router();

//Register

router.post("/register", formidable(), StudentRegisterController);

//Login

router.post("/login", StudentLoginController);

//====Get All Studnets =====//

router.get("/get-students", getAllStudentController);

//====Get Single Student =====//
router.get("/single-student/:sid", getSingleStudentController);

//=====Get Photo =====//
router.get("/get-photo/:sid", getStudentPhotoController);

//===Update===///
router.put(
  "/update-student/:sid",
  formidable(),
  StudentUpdateController
);
router.delete("/delete-student/:sid", deleteStudentController);

//Student Filter//

router.post("/filter-student", StudentFilterController);

//Test Routes

router.get("/test", requireSignIn, isAdmin,testController);

//Auth Routes || User

router.get('/user-auth', requireSignIn, (req, res) =>{
    res.status(200).send({ ok : true})
} )
//Auth Routes || Admin
router.get('/admin-auth', requireSignIn, (req, res) =>{
    res.status(200).send({ ok : true})
} )


module.exports = router;