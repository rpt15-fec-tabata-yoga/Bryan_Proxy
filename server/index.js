const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.use('/', express.static(__dirname + '/../public'));
app.use('/:gameId', express.static(__dirname + '/../public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

const port = 3006;

app.listen(port, () => {
  console.log(`Listening on ${port}`);
});