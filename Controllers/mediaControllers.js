require('dotenv').config();

const mediaModel = require('../Models/mediaModel');
const cloudinary = require('cloudinary').v2;


// cloudinary.config({ 
//     cloud_name: process.env.CLOUD_NAME, 
//     api_key: process.env.API_KEY, 
//     api_secret: process.env.API_SECRET 
//   });

exports.getAll = async (req,res) =>{
    try{
        const media = await mediaModel.find();
        res.json(media);

    }catch(err){
        console.log(err);
        res.status(400).json(err);
    }
}


exports.create = async (req,res) =>{
    const {name,subtitleFileName} = req.body;
    const video = req.file;

    const file = "./public/videos/"+video.filename;

    // cloudinary connections 
    
    // try{
    //     cloudinary.uploader.upload_large(file,
    //         {resource_type: 'video'},
    //         function(error,result){
    //             if(error){
    //                 console.log(error);
    //             }
    //             console.log(result.secure_url);
    //         });
    // }
    // catch(error){
    //     console.log(error);
    // }

    
    
    try{    
        const createMedia = await mediaModel.create({
            name,
            videofilename: video.filename,
            subtitlefilename: subtitleFileName
        })

        res.redirect('/');
    }catch(err){
        console.log(err);
        res.status(400).json(err);
    }

    // res.render('video',{name:name,src:"../../../../public/videos/"+video.filename, subtitlesrc:"../../../../public/subtitles/"+subtitleFileName});

    // create subtitle file -> store location in mongodb
    // store video location in mongodb or transfer to cloudinary and store the response to mongodb
    // store name to mongodb

    
}
