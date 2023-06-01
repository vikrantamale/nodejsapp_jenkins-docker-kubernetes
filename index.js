var express = require('express');
var app = express();

app.get('/', function (req, res) {
    res.send('{ "response": "Hello From Raman Khanna" }');
});

app.get('/will', function (req, res) {
    res.send('{ "response": "Hello All" }');
});
app.get('/ready', function (req, res) {
    res.send('{ "response": " Hurray!!!, Its working !!" }');
});
app.listen(process.env.PORT || 3000);
module.exports = app;
