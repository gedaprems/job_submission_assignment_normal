const mediaModel = require('../Models/mediaModel');

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
    const {name,subtitle} = req.body;
    const {video} = req.files.video;

    // create subtitle file -> store location in mongodb
    // store video location in mongodb or transfer to cloudinary and store the response to mongodb
    // store name to mongodb

    
}