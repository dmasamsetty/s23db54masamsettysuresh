var express = require('express');
const district_controlers= require('../controllers/districts');
var router = express.Router();
/* GET costumes */
router.get('/', district_controlers.district_view_all_Page );
module.exports = router;

// GET request for one costume.
router.get('/districts/:id', district_controlers.district_detail);
/* GET detail costume page */
router.get('/detail', district_controlers.district_view_one_Page);
/* GET create costume page */
router.get('/create', district_controlers.district_create_Page);
/* GET create update page */
router.get('/update', district_controlers.district_update_Page);
