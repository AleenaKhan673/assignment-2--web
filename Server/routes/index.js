var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'index' });
});

/* GET home page. */
router.get('/home', function(req, res, next) {
  res.render('index', { title: 'Home Page' });
});
/*GET about us page. */
router.get('/aboutme', function(req, res, next) {
  res.render('index', { title: 'About Me' });
});
/* GET product page. */
router.get('/projects', function(req, res, next) {
  res.render('index', { title: 'Projects' }); //change the index naming convention because of the partials
});
/* GET contactus page. */
router.get('/contactme', function(req, res, next) {
  res.render('index', { title: 'Contact Me' });
});
// you call the view from the router MVC
module.exports = router;
