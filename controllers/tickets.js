const Ticket = require('../models/ticket');
const Flight = require('../models/flight');

module.exports = {
    new: newTicket,
    create,
    addToFlight
};


function addToFlight(req, res) {
    Flight.findById(req.params.id, function (err, flight) {
        Ticket.find({ flight: flight._id }, function (err, tickets) {
            res.render(`/flights/${flight._id}` / tickets);
        });
    });

};

function create(req, res) {
    Ticket.create(req.body, function (err, tickets) {
        res.redirect('/tickets/new');
    });
}

function newTicket(req, res) {
    Ticket.find({})
        .sort('seat')
        .exec(function (err, tickets) {
            res.render('flights/new', {
                title: 'Add Ticket',
                tickets
            });
        });
}