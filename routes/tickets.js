const express = require('express');
const router = express.Router();
const ticketsCtrl = require('../controllers/tickets');

// This router is mounted to a "starts with" path of '/'

// GET /performers/new
router.get('/tickets/new', ticketsCtrl.new);
// POST /tickets
router.post('/tickets', ticketsCtrl.create);
// POST /flights/:id/tickets
router.post('/flights/:id/tickets', ticketsCtrl.addToFlight);

module.exports = router;