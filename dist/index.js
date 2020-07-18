"use strict";

var express = require('express');

var routes = require('./src/routes/crmRoutes');

var app = express();
var port = 3000;
routes(app); //passing route function to express library

app.get('/', function (request, response) {
  response.send("Your server is running at port ".concat(port));
});
app.listen(port, function () {
  return console.log("your server is running on port ".concat(port));
});