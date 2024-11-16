var express = require('express');
var router = express.Router();

/* GET Contact page. */
/*Get contact us page*/
router.get('/contact', function(req, res, next) {
  res.render('contact', {title: 'Contact Us'});
}); 

module.exports = router;