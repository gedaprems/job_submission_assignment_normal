const mongoose = require('mongoose');

const MediaSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    videourl : {
        type: String,
        required: true,
    },
    subtitleurl : {
        type: String,
        required: true,
    },

})

module.exports = mediaModel = mongoose.model("Media",MediaSchema);
