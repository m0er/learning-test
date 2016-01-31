var express = require('express');
var router = express.Router();
var path = require('path');

router.get('/', function(req, res) {
  res.sendFile(path.join(process.cwd(), '/views', '/test.html'));
});

module.exports = router;
