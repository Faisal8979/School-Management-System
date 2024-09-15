const Student = require( "../model/StudentModel");
const jwt = require("jsonwebtoken");

const requireSignIn = async(req, res, next) =>{
    try {
        const decode = jwt.verify(
            req.headers.authorization,
            process.env.SECRET_KEY
        )
        req.student = decode;
        next();
    } catch (error) {
        console.log(error);
        
    }
}

 const isAdmin = async(req, res, next) =>{
    try {
       const student = await Student.findById(req.student._id)
    if(student.role !=1){
        return res.status(401).send({
            success: false,
            message: "UnAuthorized Access"
        })
        }else{
            next()
        }
        
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: "Error In Admin Middlewere",
            error,
        })
        
    }
}

const checkIfLoggedIn = (req, res, next) => {
  const token = req.cookies.authToken || req.headers.authorization;
  
  if (token) {
    return res.redirect('/admin/student-app'); // Or any other route
  }
  
  next();
};


module.exports = {isAdmin, requireSignIn, checkIfLoggedIn};