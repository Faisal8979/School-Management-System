const express = require("express");
const {AdminRegisterController, AdminLoginController} = require("../controllers/AdminController");

const router = express.Router();

//=======Admin Registration=======//
router.post("/register", AdminRegisterController);

//======Admin Login ========//
router.post("/login", AdminLoginController);


module.exports = router;