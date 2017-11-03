var express = require('express');
var bodyParser = require('body-parser');
var ejsLayouts = require('express-ejs-layouts');
// var partials = require('express-partials');
var app = express();

app.set('view engine', 'ejs');
app.use(require('morgan')('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(ejsLayouts);
app.use(express.static(__dirname + '/public'));
// app.use(partials());

app.get('/', function(req, res) {
  res.render('home');
});

var server = app.listen(process.env.PORT || 3000);

module.exports = server;
