const express = require('express');
const app = express();

app.set('view engine', 'ejs');

app.get('/', function (req, res) {
  res.send('<h1>Hello SEI!</h1>');
});

app.get('/home', function(req, res) {
  //res.send('<h1>Home Page!</h1>');
  res.render('home');
});

app.get('/api', function(req, res) {
  res.json({ fruits: ['oranges', 'bananas', 'mango'] });
});

app.listen(3000, function () {
  console.log('Listening on port 3000');
});