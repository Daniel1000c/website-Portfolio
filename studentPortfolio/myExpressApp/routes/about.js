var express = require('express');
var router = express.Router();

/* GET about page. */

/*Get about us page */
router.get('/about', function(req, res, next) {
  res.render('about', {title: 'About Us'});
});


module.exports = router;