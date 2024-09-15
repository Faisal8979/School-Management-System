const mongoose = require("mongoose");
require("colors");

mongoose.connect(process.env.MONGO_URL)
.then(()=>{
    console.log(`Connection Successfull`.bgCyan.white);
    
})
.catch((e) =>{
    console.log(`No Connection`);
    
})