var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/home', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
/*GET about us page. */
router.get('/aboutus', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
/* GET product page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' }); //change the index naming convention because of the partials
});
/* GET index page. */
router.get('/index', function(req, res, next) {
  res.render('index', { title: 'Express' }); 
});
/* GET services page. */
router.get('/services', function(req, res, next) {
  res.render('index', { title: 'My Services' });
});
/* GET services page. */
router.get('/contactus', function(req, res, next) {
  res.render('index', { title: 'contactus' });
});
// you call the view from the router MVC
module.exports = router;
