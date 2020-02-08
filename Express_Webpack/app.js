const express = require ('express');
const app = express();
const path = require('path');

app.listen(process.env.PORT || 5000);

app.use('/src', express.static('src'));
app.use('/build', express.static('build'));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'src/index.html'));
});

app.get('/bundle', (req, res) => {
    res.sendFile(path.join(__dirname, 'build/bundle.js'));
});

app.get('/menu', (req, res) => {
    res.sendFile(path.join(__dirname, '/json/test.json'));
});
