var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('card_90/index', { name: '林泓君', id: '207410290' });
});

module.exports = router;