'use script';

/**
 * demo server for client
 */

var path = require('path');

var express = require('express')
var app = express()

app.use('/assets', express.static(path.join(__dirname, './assets')))
app.use('/node_modules', express.static(path.join(__dirname, './node_modules')));


app.get('/', function (req, res) {
//   res.send('Hello World!');

    res.sendFile(path.join(__dirname, './index.html'));
})

app.listen(4000, function () {
  console.log('Example app listening on port 4000!')
})