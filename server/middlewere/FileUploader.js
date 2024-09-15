const multer = require("multer");
const cloudinary = require("cloudinary");

cloudinary.config({
    cloud_name:process.env.CLOUDNARY_NAME,
    api_key:process.env.CLOUDNARY_APIKEY,
    api_secret:process.env.CLOUDNARY_SECRET
})

const storage = 