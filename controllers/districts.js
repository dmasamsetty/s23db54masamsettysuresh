var Districts = require('../models/districts');
// List of all Districts
exports.district_list = function(req, res) {
res.send('NOT IMPLEMENTED: District list');
};
// for a specific District.
exports.district_detail = function(req, res) {
res.send('NOT IMPLEMENTED: District detail: ' + req.params.id);
};
// Handle District create on POST.
exports.district_create_post = function(req, res) {
res.send('NOT IMPLEMENTED: District create POST');
};
// Handle District delete form on DELETE.
exports.district_delete = function(req, res) {
res.send('NOT IMPLEMENTED: District delete DELETE ' + req.params.id);
};
// Handle District update form on PUT.
exports.district_update_put = function(req, res) {
res.send('NOT IMPLEMENTED: District update PUT' + req.params.id);
};

// List of all Costumes
exports.district_list = async function(req, res) {
    try{
    theDistricts = await Districts.find();
    res.send(theDistricts);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
    };