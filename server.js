const express = require('express');
const app = express();

// require the todo "database"
const todoDb = require('./data/todo-db');

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

app.get('/todos', function(req, res) {
  res.render('todos/index', {
   todos: todoDb.getAll()
  });
});

app.listen(3000, function () {
  console.log('Listening on port 3000');
});