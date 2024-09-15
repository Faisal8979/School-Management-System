const mongoose = require("mongoose");

const AdminSchema = new mongoose.Schema({
    name:{
        type: String,
        required : [true, "Name Is Required"]
    },
    email:{
        type: String,
        required: [true, "Email Is Required"]
    },
    password:{
        type: String,
        required: [true, "Password Is Required"]
    },
    phone:{
        type: String,
        required: [true, "Phone Number Is Required"]
    },
    role:{
        type: String,
        default: 'admin'
    }
}, {timestamps:true})

const Admin = new mongoose.model("Admin", AdminSchema);

module.exports = Admin;