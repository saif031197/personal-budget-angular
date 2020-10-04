const { response } = require('express');
const express = require('express');
const app = express();
const port=3000;

app.use('/', express.static('public'));

const budget = {
}

app.get('/hello', (req, res) => {
    res.send('Hello World!');
});

app.get('/budget', (req, resp) => {
    resp.sendFile(__dirname + '/budget.json')
});

app.listen(port, () => {
    console.log('Example app listening at http://localhost:3000')
});