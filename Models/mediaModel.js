const mongoose = require('mongoose');

const MediaSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    videofilename : {
        type: String,
        required: true,
    },
    subtitlefilename : {
        type: String,
        required: true,
    },

})

module.exports = mediaModel = mongoose.model("Media",MediaSchema);
