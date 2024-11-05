var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/home', function(req, res, next) {
  res.render('index', { title: 'Home Page' });
});
/*GET about us page. */
router.get('/aboutus', function(req, res, next) {
  res.render('index', { title: 'about me' });
});
/* GET product page. */
router.get('/product', function(req, res, next) {
  res.render('index', { title: 'Product' }); //change the index naming convention because of the partials
});
/* GET contactus page. */
router.get('/contactme', function(req, res, next) {
  res.render('index', { title: 'contactme' });
});
// you call the view from the router MVC
module.exports = router;
