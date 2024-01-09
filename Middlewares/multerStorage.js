const multer = require('multer');
const path = require('path');
const fs = require('fs');

const storage = multer.diskStorage({
    destination: (req,file,cb)=>{
        if(!fs.existsSync("public")){
            fs.mkdirSync("public");
        }

        if(!fs.existsSync("public/videos")){
            fs.mkdirSync("public/videos");
        }

        cb(null, "public/videos");
    },
    filename: (req,file,cb)=>{
        cb(null, Date.now() + file.originalname);
    }
})

const upload = multer({
    storage,
    fileFilter: (req,file,cb)=>{
        var ext = path.extname(file.originalname);

        if(ext !== ".mkv" && ext !== ".mp4"){
            return cb(new Error("Only videos are allowed!"));
        }

        cb(null, true);
    }
})


module.exports = {
    storage,
    upload
}