const mongoose = require('mongoose');
// optional shortcut variable
const Schema = mongoose.Schema;

const flightSchema = new Schema({
    airline: String,
    airport: String,
    flightNo: Number,
    departs: Date
    // departs: function () {
    //     return new Date().getFullYear();
    
  });

module.exports = mongoose.model('Flight', flightSchema);