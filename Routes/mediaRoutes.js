const express = require('express');
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const mediaControler = require('../Controllers/mediaControllers');
const {uploadMiddleware} = require('../Middlewares/multerStorage');
const createSubtitleFile = require('../Middlewares/createSubtitleFile');


const router = express.Router();

// get all media 
router.get('/all', mediaControler.getAll);


// post create media 
router.post('/create', uploadMiddleware, createSubtitleFile, mediaControler.create);


module.exports = router;