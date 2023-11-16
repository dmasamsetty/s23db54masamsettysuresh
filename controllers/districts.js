var District = require('../models/districts');
// List of all Districts
exports.district_list = function(req, res) {
res.send('NOT IMPLEMENTED: District list');
};
// for a specific Costume.
exports.district_detail = async function(req, res) {
    console.log("detail" + req.params.id)
    try {
    result = await District.findById( req.params.id)
    res.send(result)
    } catch (error) {
    res.status(500)
    res.send(`{"error": document for id ${req.params.id} not found`);
    }
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
    document.district_area = req.body.district_area;
    try{
    let result = await document.save();
    res.send(result);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
    };
// Handle Costume delete on DELETE.
exports.district_delete = async function(req, res) {
    console.log("delete " + req.params.id)
    try {
    result = await District.findByIdAndDelete( req.params.id)
    console.log("Removed " + result)
    res.send(result)
    } catch (err) {
    res.status(500)
    res.send(`{"error": Error deleting ${err}}`);
    }
    };
//Handle Costume update form on PUT.
exports.district_update_put = async function(req, res) {
console.log(`update on id ${req.params.id} with body
${JSON.stringify(req.body)}`)
try {
let toUpdate = await District.findById( req.params.id)
// Do updates of properties
if(req.body.district_name) toUpdate.district_name = req.body.district_name;
if(req.body.district_population) toUpdate.district_population = req.body.district_population;
if(req.body.district_direction) toUpdate.district_direction = req.body.district_direction;
if(req.body.district_area) toUpdate.district_area = req.body.district_area;
if(req.body.checkboxsale) toUpdate.checkboxsale = true;
else toUpdate.checkboxsale = false;
let result = await toUpdate.save();
console.log("Sucess " + result)
res.send(result)
} catch (err) {
res.status(500)
res.send(`{"error": ${err}: Update for id ${req.params.id}
failed`);
}
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
    // Handle a show one view with id specified by query
exports.district_view_one_Page = async function(req, res) {
    console.log("single view for id " + req.query.id)
    try{
    result = await District.findById( req.query.id)
    res.render('districtdetail',
    { title: 'District Detail', toShow: result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
    };

// Handle building the view for creating a costume.
// No body, no in path parameter, no query.
// Does not need to be async
exports.district_create_Page = function(req, res) {
    console.log("create view")
    try{
    res.render('districtcreate', { title: 'District Create'});
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
    };

    // Handle building the view for updating a costume.
// query provides the id
exports.district_update_Page = async function(req, res) {
    console.log("update view for item "+req.query.id)
    try{
    let result = await District.findById(req.query.id)
    res.render('districtupdate', { title: 'District Update', toShow: result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
    };

    // Handle a delete one view with id from query
exports.district_delete_Page = async function(req, res) {
    console.log("Delete view for id " + req.query.id)
    try{
    result = await District.findById(req.query.id)
    res.render('districtdelete', { title: 'District Delete', toShow:
    result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
    };
