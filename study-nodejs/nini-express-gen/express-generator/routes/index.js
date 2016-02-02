var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/user', function(req, res, next) {
  // DB에서 id를 가지고 유저를 조회..
  res.render('index', {
    title: 'Express',
    userName: user.name
  });
});

module.exports = router;
