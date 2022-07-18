const Flight = require('../models/flight');

module.exports = {
    index,
    new: newFlight,
    show
};

function index(req, res) {
    Flight.find({}, function(err, flights) {
        res.render('flights/index', { flights });
    });
}
function show(req, res) {
    Flight.findById(req.params.id, function(err, flight) {
    res.render('flights/show', { title: 'Flight Detail', flight });
});
}

function newFlight(req, res) {
    // const newFlight = new Flight();
    // const dt = newFlight.departs;
    // let departsDate = `${dt.getFullYear()}-${(dt.getMonth() + 1).toString().padStart(2, '0')}`;
    // departsDate += `-${dt.getDate().toString().padStart(2, '0')}T${dt.toTimeString().slice(0, 5)}`;
    res.render('flights/new');
}