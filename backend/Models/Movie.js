const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const movieSchema = new Schema({
    titre: {
        type: String,
        required: true,
        minlength: 2
    },
    year: {
        type: Number,
        required: true,
        minlength: 4

    },
    genre: {
        type: String,
        required: true
    },
    
    
    imageURL: {
        type: String,
        required: true
    },
    desc: {
        type: String,
        required: true
    }
    
    
});

module.exports = mongoose.model("Movies", movieSchema);