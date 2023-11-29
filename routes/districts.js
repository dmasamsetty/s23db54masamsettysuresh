var express = require('express');
const passport = require('passport');
const district_controlers= require('../controllers/districts');
var router = express.Router();
/* GET costumes */
router.get('/', district_controlers.district_view_all_Page );
module.exports = router;

// GET request for one costume.
router.get('/districts/:id', district_controlers.district_detail);
/* GET detail costume page */
router.get('/detail', district_controlers.district_view_one_Page);

const secured = (req, res, next) => {
    if (req.user){
    return next();
    }
    res.redirect("/login");
}
/* GET create costume page */
router.get('/create', secured, district_controlers.district_create_Page);
/* GET create update page */
router.get('/update', secured, district_controlers.district_update_Page);
/* GET delete costume page */
router.get('/delete', secured, district_controlers.district_delete_Page);

router.post('/login', passport.authenticate('local'), function(req, res) {
    res.redirect('/');
    });
    


    
