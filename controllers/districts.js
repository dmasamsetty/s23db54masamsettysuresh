var District = require('../models/districts');
// List of all Districts
exports.district_list = function(req, res) {
res.send('NOT IMPLEMENTED: District list');
};
// for a specific District.
exports.district_detail = function(req, res) {
res.send('NOT IMPLEMENTED: District detail: ' + req.params.id);
};
// Handle Costume create on POST.
exports.district_create_post = async function(req, res) {
    console.log(req.body)
    let document = new District();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"costume_type":"goat", "cost":12, "size":"large"}
    document.district_name = req.body.district_name;
    document.district_population = req.body.district_population;
    document.district_direction = req.body.district_direction;
    try{
    let result = await document.save();
    res.send(result);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
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
    theDistrict = await District.find();
    res.send(theDistrict);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
    };

    // VIEWS
// Handle a show all view
exports.district_view_all_Page = async function(req, res) {
    try{
        theDistrict = await District.find();
    res.render('districts', { title: 'Districts Search Results', results: theDistrict });
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
    };