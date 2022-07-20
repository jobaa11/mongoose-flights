const Flight = require('../models/flight');

module.exports = {
 create
}

// Create a Review
// POST /movies/:id/reviews

function create(req, res) {
   Flight.findById(req.params.id, function(err, flight) {
    flight.destinations.push(req.body);
    flight.save(function(err) {
        res.redirect(`/flights/${ flight._id }`);
     });
    });
}