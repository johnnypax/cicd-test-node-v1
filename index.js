const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.json({ message: 'Hello World!' });
});

app.get('/client', (req, res) => {
    res.json({ message: 'Hello client!' });
});

const server = app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

const close = () => {
    server.close();
}

module.exports = { app, close }