var express = require('express');
var app = express();
var mongoose = require('mongoose');

const tracks = require('./data/tracks.json');

const port = process.env.PORT || 8080;

mongoose.connect('mongodb://admin:Jetta7701*@ds161346.mlab.com:61346/danit');

app.get('/', function (req, res) {
    res.send('Hello World!');
});

app.get('/api/ping', function (req, res) {
    res.json({ "ping": new Date().toISOString() });
});

app.get('/api/tracks', function (req, res) {
    res.json(tracks);
});

app.get('/api/tracks/:id', function (req, res) {
    const id = parseInt(req.params.id);
    const track = tracks.find(i => i.id === id);
    res.json(track);
});

app.listen(port, function () {
    console.log(`Express server running at http://localhost:${port}/`);
});