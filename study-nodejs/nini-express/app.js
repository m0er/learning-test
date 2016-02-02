var express = require('express');
var app = express();

app.use('/static', express.static('public'));

app.get('/', function(request, response) {
  response.send('hello, express!');
});

app.get('/user', function(req, res) {
  res.send('user id: ' + req.query.uid);
});

app.get('/login', function(req, res) {
  res.send('user id: ' + req.query.id + ' password: ' + req.query.password);
});

app.listen(3000, function() {
  console.log('listen start!');
});
