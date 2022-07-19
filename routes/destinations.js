const express = require('express');
const router = express.Router();
const destinationsCtrl = require('../controllers/destinations') ;

// Create a Review
// POST /movies/:id/reviews
router.post('/:id', destinationsCtrl.create);

module.exports = router;