const mongoose = require('mongoose');


const studentSchema = new mongoose.Schema({
    registration:{
        type: String,
      default: "9"
    },
    rdate: {
    type: Date,
    default: Date.now 
  },
    cls:{
        type: String,
        required : [true, 'Class Is Required']
    },
     section:{
        type: String,
        required : [true, 'Section Is Required']
    },
     sname:{
        type: String,
        required : [true,  'Student Name Is Required']
    },
    fname:{
        type: String,
        required : [true, "Student's Father Name Is Required"]
    },
    mname:{
        type: String,
        required : [true, "Student's Mother Name Is Required"]
    },
    gender:{
        type: String,
        required : [true, "Gender Is Required"]
    },
    phone1:{
        type: String,
        required : [true, "Contact Number Is Required"]
    },
    phone2:{
        type: String,
        required : [true, "Whatsapp Number Is Required"]
    },
    phone3:{
        type: String,
        required : [true, "Father's Contact Number Is Required"]
    },
   
   
    email:{
        type: String,
        required: [true, "Email Is Required"],
        unique:[true, "Email Is Already Taken"]
    },
     dob:{
        type: String,
        required : [true, "Date Of Birth Is Required"]
    },
    saadhar:{
        type: Number,
        required: [true, "Student Addhar Card Number Is Required"],
        unique: true,
        minlength: 12,
        maxlength: 12
    },
    soldnew:{
        type: String,
        required: [true, "Student Selection Is Required"]
    },
    admission:{
        type: String,
        required: [true, "Admission Type Select Is Required"]
    },
    address:{
        type: String,
        required: true,
    },
    address1:{
        type: String,
        required: true,
    },
    town:{
        type: String,
        required: true,
    },
    city:{
        type: String,
        required: true,
    },
    district:{
        type: String,
        required: true,
    },
    state:{
        type: String,
        required: true,
    },
    pincode:{
        type: String,
        required: true,
    },
    landmark:{
        type: String,
        required: true,
    },
    
    password:{
        type: String,
        required: [true, "Password Is Required"],
        minLength: [6, "Password Length Should Be Greater Then 6 Character"]
    },
    photo:{
        data: Buffer,
      contentType: String,
    },
    // attendance: {
    //     type: String,
    //     default:"P"
    // },
    role:{
        type: String,
        default: 'user'
    },
}, {timestamps:true});



//Compare Function

// studentSchema.methods.comparePassword = async function(plainPassword){
//     return await bcrypt.compare(plainPassword, this.password)
// }

// //Token

// studentSchema.methods.generateAuthToken = async function (){
//    try {
//     const token = await jwt.sign({_id: this._id.toString()}, process.env.SECRET_KEY);
//     this.tokens = this.tokens.concat({token:token});
//     await this.save();
//     return token;
//    } catch (e) {
//     console.log("The Error" + e);
    
//    }
// }



const Student = mongoose.model("Student", studentSchema);
module.exports = Student;