var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: '💎 Broward Pawn' });
});

/*Get about us page */
router.get('/about', function(req, res, next) {
  res.render('about', {title: 'About Us'});
});

/*Get contact us page*/
router.get('/contact', function(req, res, next) {
  res.render('contact', {title: 'Contact Us'});
}); 

module.exports = router;
