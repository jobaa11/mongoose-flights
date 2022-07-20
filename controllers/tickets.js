const Ticket = require('../models/ticket');
const Flight = require('../models/flight');

module.exports = {
    new: newTicket,
    addToFlight
};

// function create(req, res) {

// }

function addToFlight(req, res) {
    Flight.findById(req.params.id, function(err, flight) {
        Ticket.find({flight: flight._id}, function(err, tickets) {
          // Now you can pass both the flight and tickets in the res.render call
          res.redirect(`/flights/${flight._id}`);
        });
    });
    
};

function newTicket(req, res) {
    Ticket.find({})
    .sort('seat')
    .exec(function (err, tickets) {
        res.render('tickets/new', {
            title: 'Add Ticket',
            tickets
        });
    });
}