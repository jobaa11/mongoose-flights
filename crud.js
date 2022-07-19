// Load the secrets in the .env module
require('dotenv').config();
// Connect to our database (line of code must be AFTER the above - .env)
require('./config/database');

const Flight = require('./models/flight');
const Ticket = require('./models/ticket');