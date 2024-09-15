const { hashPassword, comparePassword } = require("../Helper/AuthHelper");
const Admin = require("../model/AdminModel");
const jwt = require("jsonwebtoken");


const secretkey = "89secretadmin";

const AdminRegisterController = async(req, res) =>{
    try {
        const {name, email, password, phone, secret} = req.body;

        if(!name || !email || !password || !phone || !secret){
            res.status(404).send({
                success: false,
                message:"Please Provide All Fields"
            })
             }
            //Check Exxisting Admin

            const ExistingAdmin = await Admin.findOne({email});
            if(ExistingAdmin){
                res.status(404).send({
                    success: false,
                    message: "Email Is Already Taken"
                })
            }
            //Hashed Password

            const hashedPassword = await hashPassword(password);
           
            if(secret ===secretkey){
        
           const admin = await Admin({
                name,
                email,
                password:hashedPassword, 
                phone,
                secretkey
            }).save();
           
            res.status(200).send({
                success: true,
                message: "Admin Registration Successfully Please Login",
                admin
            })
            }else{
                res.status(404).send({
                    success: false,
                    message: "Secret Key Is Not Match"
                })
            }
       
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: "Error In Admin API"
        })
        
    }

}

const AdminLoginController = async(req, res) =>{
    try {
        const {email, password} = req.body;


        if(!email || !password){
            res.status(500).send({
                success: false,
                message: "Please Add Email Or Password"
            })
        }
      const admin = await Admin.findOne({email});

      if(!admin){
          return res.status(404).send({
            success: false,
            message: "Email Is Not Registred"
        })
      }
       // Check if user is admin
    if (admin.role !== 'admin') {
      return res.status(403).json({ message: 'Access denied. Admins only.' });
    }
      //Check Password

      const isMatch = await comparePassword(password, admin.password)

      //Password Validation

      if(!isMatch){
          return res.status(500).send({
            success: false,
            message: "InValid Credentials"
        })
      }

      //Token
       
      const token = await jwt.sign({_id:admin._id}, process.env.SECRET_KEY,
        {
            expiresIn: '7d'
        }
      )
      res.status(201).send({
        success: true,
        message:"Login Successfully",
        admin,
        token,
      })

    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: "Error In Login API",
            error,
        })
        
    }

}



module.exports = {AdminRegisterController, AdminLoginController};