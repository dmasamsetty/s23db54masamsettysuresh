var express = require('express');
const district_controlers= require('../controllers/districts');
var router = express.Router();
/* GET costumes */
router.get('/', district_controlers.district_view_all_Page );
module.exports = router;

// GET request for one costume.
router.get('/districts/:id', district_controlers.district_detail);