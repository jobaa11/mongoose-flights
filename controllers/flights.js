const Flight = require('../models/flight');

module.exports = {
    index,
    new: newFlight,
    create
};

function index (req, res) {
    Flight.find({}, function(err, flights) {
        res.render('flights/index', { flights });
    });
}
// function create(req, res) {
//     req.body.departs = !!req.body.departs;
//     req.body.flightNo = req.body.flightNo;
//     if (req.body.flightNo) req.body.flightNo = 
// }

function newFlight(req, res) {
    const newFlight = new Flight();
    res.render('flight/new');
}