const express = require('express');
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const mediaControler = require('../Controllers/mediaControllers');
const {upload, storage} = require('../Middlewares/multerStorage');


const router = express.Router();

// get all media 
router.get('/all', mediaControler.getAll);


// post create media 
router.post('/create', upload.fields([
    {
        name: "video",
    },{
        name: "subtitle",
    }
]), mediaControler.create);


module.exports = router;