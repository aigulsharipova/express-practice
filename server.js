// Load express
const express = require('express');

// Create our express app
const app = express();

// Define a "root" route directly on app
// Tomorrow, we'll use best practice routing
app.get('/', function (req, res) {
  res.send('<h1>Hello SEI!</h1>');
});

app.get('/home', function(req, res) {
  res.send('<h1>Home Page!</h1>');
});

app.get('/api', function(req, res) {
  res.json({ fruits: ['oranges', 'bananas', 'mango'] });
});
// Tell the app to listen on port 3000
// for HTTP requests from clients
app.listen(3000, function () {
  console.log('Listening on port 3000');
});