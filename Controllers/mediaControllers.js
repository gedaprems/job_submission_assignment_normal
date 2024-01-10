const mediaModel = require('../Models/mediaModel');
const path = require('path')
const fs = require('fs')
const cors = require('cors')
const multer = require('multer')

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
