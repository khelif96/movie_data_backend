/*jshint esversion: 6 */

// Dependencies
const express = require('express');
const router = express.Router();

const movieInfo = require('../controllers/movieInfo');
const suggestions = require('../controllers/suggestions');


// API

router.get('/movieInfo', movieInfo.getInfo);
router.get('/suggestions', suggestions.getSuggestions);

// Return router
module.exports = router;
