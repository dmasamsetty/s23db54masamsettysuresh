var express = require('express');
var router = express.Router();
// Require controller modules.
var api_controller = require('../controllers/api');
var district_controller = require('../controllers/districts');
/// API ROUTE ///
// GET resources base.
router.get('/', api_controller.api);
/// district ROUTES ///
// POST request for creating a district.
router.post('/districts', district_controller.district_create_post);
// DELETE request to delete district.
router.delete('/districts/:id', district_controller.district_delete);
// PUT request to update district.
router.put('/districts/:id', district_controller.district_update_put);
// GET request for one district.
router.get('/districts/:id', district_controller.district_detail);
// GET request for list of all district items.
router.get('/districts', district_controller.district_list);
module.exports = router;