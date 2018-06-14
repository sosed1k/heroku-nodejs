var express = require('express');
var app = express();

const tracks = require('./data/tracks.json');

const hostname = '127.0.0.1';
const port = process.env.PORT || 8080;

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

app.listen(port, hostname,  function () {
    console.log(`Express server running at http://${hostname}:${port}/`);
});