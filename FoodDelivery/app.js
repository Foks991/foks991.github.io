const http = require("http");
const express = require ('express');
const path = require('path');
const app = express();
const server = http.createServer(app);

server.listen(process.env.PORT || 5000, () => {
    console.log(`Server started on port ${server.address().port} :)`);
});

app.use('/src', express.static('src'));
app.use('/build', express.static('build'));

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, 'src/index.html'));
});

app.get('/bundle', function(req, res) {
    res.sendFile(path.join(__dirname, 'build/bundle.js'));
});

app.get('/menu', function(req, res) {
    res.sendFile(path.join(__dirname, '/src/js/data/menu.json'));
});

app.get('/dishes', function(req, res) {
    res.sendFile(path.join(__dirname, '/src/js/data/dishes.json'));
});