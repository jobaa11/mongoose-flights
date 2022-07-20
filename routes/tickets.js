const express = require('express');
const router = express.Router();
const ticketsCtrl = require('../controllers/tickets');

// This router is mounted to a "starts with" path of '/'

// GET /performers/new
router.get('/new', ticketsCtrl.new);
// POST /tickets
// router.post('/', ticketsCtrl.create);
// // POST /flights/:id/tickets
router.post('/:id', ticketsCtrl.addToFlight);

module.exports = router;