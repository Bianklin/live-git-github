const express = require('express');

const app = express();

app.get('/teste4', (req, res) => {
    return res.json({ hello: `world 3`})
});

app.listen(3333);