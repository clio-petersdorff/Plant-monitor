const mongoose = require('mongoose');

const plantDataSchema = new mongoose.Schema({
    wetness: String,
    temperature: String,
    humidity: String,
    timestamp: { type: Date, default: Date.now } // Automatically add a timestamp
});

const Plant = mongoose.model('Plant', plantDataSchema);

module.exports = Plant