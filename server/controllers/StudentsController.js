const { hashPassword, comparePassword } = require('../Helper/AuthHelper');
const Student = require('../model/StudentModel');
const jwt = require("jsonwebtoken");
const fs = require("fs");


//Register Controller

const StudentRegisterController = async(req, res) =>{

    try {
        const {registration, rdate, cls, section, sname, fname, mname,gender,phone1,phone2,phone3,email,dob,saadhar,soldnew,admission,address,address1,town,city,district,state,pincode,landmark,password} = req.fields;
        const {photo} = req.files
       
        //Validation
        switch(true){
            // case  !registration:
            // return res.status(500).send({error: "Registration Is Required"})
            // case  !rdate:
            // return res.status(500).send({error: "Registration Date Is Required"})
            case  !cls:
            return res.status(500).send({error: "Class Is Required"})
            case  !section:
            return res.status(500).send({error: "Section Is Required"})
            case  !sname:
            return res.status(500).send({error: "Student Name Is Required"})
            case  !fname:
            return res.status(500).send({error: "Father Name Is Required"})
            case  !mname:
            return res.status(500).send({error: "Mother Name Is Required"})
            case  !gender:
            return res.status(500).send({error: "Gender Is Required"})
            case  !phone1:
            return res.status(500).send({error: "Contact No. Is Required"})
            case  !phone2:
            return res.status(500).send({error: "Whatsapp No. Is Required"})
            case  !phone3:
            return res.status(500).send({error: "Father No. Is Required"})
            case  !email:
            return res.status(500).send({error: "Email Is Required"})
            case  !dob:
            return res.status(500).send({error: "Date Of Birth Is Required"})
            case  !saadhar:
            return res.status(500).send({error: "Addhar Card Is Required"})
            case  !soldnew:
            return res.status(500).send({error: "Student Tytpe Is Required"})
            case  !admission:
            return res.status(500).send({error: "Admission Type Is Required"})
            case  !address:
            return res.status(500).send({error: "Address Line 1 Is Required"})
            case  !address1:
            return res.status(500).send({error: "Address Line 2 Is Required"})
            case  !town:
            return res.status(500).send({error: "Town/Village Is Required"})
            case  !city:
            return res.status(500).send({error: "City/Block Is Required"})
            case  !district:
            return res.status(500).send({error: "District Is Required"})
            case  !state:
            return res.status(500).send({error: "State Is Required"})
            case  !pincode:
            return res.status(500).send({error: "Pincode Is Required"})
            case  !landmark:
            return res.status(500).send({error: "Landmark Is Required"})
            case  !password:
            return res.status(500).send({error: "Password Is Required"})
            case  !photo && photo.size > 1000000:
            return res.status(500).send({error: "Photo Is Required And Should Be Less Than 1 MB"})
        }

        //Check Existing User
        const ExistingUser = await Student.findOne({email});
        if(ExistingUser){
            res.status(500).send({
                success: false,
                message: "Email Already Taken",
            })
        }

        //Register Student
         const hashedPassword = await hashPassword(password);


        const student = await Student({
            registration,
            rdate,
            cls,
            section,
            sname,
            fname,
            mname,
            gender,
            phone1,
            phone2,
            phone3,
            email,
            dob,
            saadhar,
            soldnew,
            admission,
            address,
            address1,
            town,
            city,
            district,
            state,
            pincode,
            landmark,
            password:hashedPassword,            
        })
        if(photo){
           student.photo.data = fs.readFileSync(photo.path);
           student.photo.contentType = photo.type;
        }
       await student.save();
        
        res.status(201).send({
            success: true,
            message: 'Student Register Successfully',
            student
        })
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: "Error In Register API",
            error
        })
        
    }
};

//Login Controller

const StudentLoginController = async(req, res) =>{
    try {
        const {email, password} = req.body;


        if(!email || !password){
            res.status(500).send({
                success: false,
                message: "Please Add Email Or Password"
            })
        }
      const student = await Student.findOne({email});

      if(!student){
          return res.status(404).send({
            success: false,
            message: "Email Is Not Registred"
        })
      }
       // Check if user is admin
    if (student.role !== 'admin') {
      return res.status(403).json({ message: 'Access denied. Admins only.' });
    }
      //Check Password

      const isMatch = await comparePassword(password, student.password)

      //Password Validation

      if(!isMatch){
          return res.status(500).send({
            success: false,
            message: "InValid Credentials"
        })
      }

      //Token
       
      const token = await jwt.sign({_id:student._id}, process.env.SECRET_KEY,
        {
            expiresIn: '7d'
        }
      )
      res.status(201).send({
        success: true,
        message:"Login Successfully",
        student,
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

//Test Controller

 const  testController = (req, res) =>{
   try {
    res.send("Proctected Route");
   } catch (error) {
    console.log(error);
    res.send({ error})
   }
}

const getAllStudentController = async(req, res)=>{
    try {
        const students = await Student.find({}).select("-photo").limit(12).sort({createdAt: -1});
        res.status(200).send({
            success: true,
            message:"All Students",
            totalStudents: students.length,
            students,
        })
    } catch (error) {
        console.log();
        res.status(500).send({
            success: false,
            message:"Error In Get All Students"
        })        
    }
}

//====Get Single Student ===///
const getSingleStudentController = async (req, res) => {
  try {
    const student = await Student.findById(req.params.sid)
      .select("-photo")
    res.status(200).send({
      success: true,
      message: "Single Student Fetched",
      student,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Eror While Getitng Single Student",
      error,
    });
  }
};

//Get Photo
const getStudentPhotoController = async(req, res) =>{
   try {
      const student = await Student.findById(req.params.sid).select("photo");
    if (student.photo.data) {
      res.set("Content-type", student.photo.contentType);
      return res.status(200).send(student.photo.data);
    }
   } catch (error) {
    console.log(error);
    res.status(500).send({
        success: false,
        message:"Error In While Getting Photo",
        error
    })
    
   }
}

//=====Update Controller =====//

const StudentUpdateController = async(req, res) =>{

    try {
        const {registration, rdate, cls, section, sname, fname, mname,gender,phone1,phone2,phone3,email,dob,saadhar,soldnew,admission,address,address1,town,city,district,state,pincode,landmark,password} = req.fields;
        const {photo} = req.files
       
        //Validation
        switch(true){
            // case  !registration:
            // return res.status(500).send({error: "Registration Is Required"})
            // case  !rdate:
            // return res.status(500).send({error: "Registration Date Is Required"})
            case  !cls:
            return res.status(500).send({error: "Class Is Required"})
            case  !section:
            return res.status(500).send({error: "Section Is Required"})
            case  !sname:
            return res.status(500).send({error: "Student Name Is Required"})
            case  !fname:
            return res.status(500).send({error: "Father Name Is Required"})
            case  !mname:
            return res.status(500).send({error: "Mother Name Is Required"})
            case  !gender:
            return res.status(500).send({error: "Gender Is Required"})
            case  !phone1:
            return res.status(500).send({error: "Contact No. Is Required"})
            case  !phone2:
            return res.status(500).send({error: "Whatsapp No. Is Required"})
            case  !phone3:
            return res.status(500).send({error: "Father No. Is Required"})
            case  !email:
            return res.status(500).send({error: "Email Is Required"})
            case  !dob:
            return res.status(500).send({error: "Date Of Birth Is Required"})
            case  !saadhar:
            return res.status(500).send({error: "Addhar Card Is Required"})
            case  !soldnew:
            return res.status(500).send({error: "Student Tytpe Is Required"})
            case  !admission:
            return res.status(500).send({error: "Admission Type Is Required"})
            case  !address:
            return res.status(500).send({error: "Address Line 1 Is Required"})
            case  !address1:
            return res.status(500).send({error: "Address Line 2 Is Required"})
            case  !town:
            return res.status(500).send({error: "Town/Village Is Required"})
            case  !city:
            return res.status(500).send({error: "City/Block Is Required"})
            case  !district:
            return res.status(500).send({error: "District Is Required"})
            case  !state:
            return res.status(500).send({error: "State Is Required"})
            case  !pincode:
            return res.status(500).send({error: "Pincode Is Required"})
            case  !landmark:
            return res.status(500).send({error: "Landmark Is Required"})
            case  !password:
            return res.status(500).send({error: "Password Is Required"})
            case photo && photo.size > 1000000:
            return res.status(500).send({error: "Photo Is Required And Should Be Less Than 1 MB"})
        }

        //Update Student
         const hashedPassword = await hashPassword(password);


        const student = await Student.findByIdAndUpdate(req.params.sid,
             {  cls, 
                section, 
                sname, 
                fname, 
                mname,
                gender,
                phone1,
                phone2,
                phone3,
                email,
                dob,
                saadhar,
                soldnew,
                admission,
                address,
                address1,
                town,
                city,
                district,
                state,
                pincode,
                landmark,
                password:hashedPassword
             },
             {new :true},
        )
        if(photo){
           student.photo.data = fs.readFileSync(photo.path);
           student.photo.contentType = photo.type;
        }
       await student.save();
        
        res.status(201).send({
            success: true,
            message: 'Student Updated Successfully',
            student
        })
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: "Error In Update API",
            error
        })
        
    }
};

const deleteStudentController = async(req, res) =>{
   try {
    await Student.findByIdAndDelete(req.params.sid).select("-photo")
    res.status(201).send({
        success: true,
        message: "Student Deleted Successfully"
    })

   } catch (error) {
    console.log(error);
    res.status(500).send({
        success: false,
        message:"Error In Deleted API"
    })
    
   }
}

const StudentFilterController = async(req, res) =>{
    try {
        
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: "Error In Filter API"
        })
    }
}

 
module.exports = {
    StudentRegisterController,
    StudentLoginController,
    testController,
    getAllStudentController,
    getStudentPhotoController,
    getSingleStudentController,
    StudentUpdateController,
    deleteStudentController,
    StudentFilterController
}