
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const hikeSchema = new Schema({
    name: String,
    distance: String,
    difficulty: String,
    imageURL: String,
}, {
    timestamps: true
});

const Hike = mongoose.model('Hike', hikeSchema);

module.exports = Hike;