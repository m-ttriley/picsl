var express = require('express');
var mainroute = require('./routes/route.js');
var port = process.env.PORT || 8080;
var http = require('http');
var app = express();

app.use(express.static(__dirname));

app.use('/', mainroute);

app.listen(port);
