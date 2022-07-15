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
    const dt = newFlight.departs;
    let departsDate = `${dt.getFullYear()}-${(dt.getMonth() + 1).toString().padStart(2, '0')}`;
    departsDate += `-${dt.getDate().toString().padStart(2, '0')}T${dt.toTimeString().slice(0, 5)}`;
    res.render('flight/new', { departsDate });
}