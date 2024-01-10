const path = require('path')
const fs = require('fs')

function createSubtitleFile(req,res,next){
    // Video file name 
    const video = req.file;
    const fileName = path.parse(video.filename).name;

    // subtitle file creation 
    let {subtitle} = req.body;
    subtitle = "WEBVTT\n\n"+subtitle;
    const subtitleFileName = fileName+"_subtitle.vtt";

    fs.writeFileSync(`./public/subtitles/${subtitleFileName}`,subtitle,(err)=>{
        if(err){
            console.log(err);
        }
    })

    console.log(video.filename+" "+ subtitleFileName);

    req.body.subtitleFileName = subtitleFileName;

    next();
}


module.exports = createSubtitleFile;