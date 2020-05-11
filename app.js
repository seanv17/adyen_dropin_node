const express = require('express');
const app = express();
const router = express.Router();

app.use(express.static('public'));
app.use('/', router);

app.get('/', function (req, res) {
    res.sendFile(__dirname + 'public/index.html');
});


app.listen(process.env.port || 3000);
console.log('Running at Port 3000');