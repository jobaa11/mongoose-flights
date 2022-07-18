const mongoose = require('mongoose');
// optional shortcut variable
const Schema = mongoose.Schema;

destinationSchema = new Schema ({
  airport: {
    type: String,
  },
  arrival: {
    type: Date
  }
});

const flightSchema = new Schema({
    airline: String,
    airport: String,
    flightNo: Number,
    departs: Date,
    destinations: [destinationSchema]
  });

module.exports = mongoose.model('Flight', flightSchema);