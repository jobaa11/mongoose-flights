const express = require('express');
const router = express.Router();
const destinationsCtrl = require('../controllers/destinations') ;

// Create a Review
// POST /movies/:id/reviews
router.post('/flights/:id/reviews', destinationsCtrl.create);

module.exports = router;