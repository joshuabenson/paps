var express = require('express');
var path = require('path');
var app = express();
app.use(express.static(path.join(__dirname, '../')));
// app.use('/', express.static('__dirname'));
var port = process.env.PORT || 8080;
app.listen(port);
console.log("Listening on port " + port);