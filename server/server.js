require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const port = process.env.PORT || 8000;
require ('./src/Conn.js');
const cors = require("cors");
const CookieParser = require("cookie-parser");


const app = express();
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(cors());
app.use(CookieParser());


//Routes

const StudentRoutes = require('./routes/StudentsRoutes.js');
const AdminRoutes = require("./routes/AdminRoutes.js");
const AttendenseRoutes = require("./routes/AttandenseRoutes.js"); 
app.use('/api/v1/student', StudentRoutes);
app.use('/api/v1/admin', AdminRoutes);
app.use('/api/v1/attendanse', AttendenseRoutes);


app.get("/", (req, res) =>{
    res.send("<h1>Hello</h1>")
});

app.listen(port, ()=>{
    console.log(`Server Run Port Number ${port}`.bgMagenta.black);
    
})
