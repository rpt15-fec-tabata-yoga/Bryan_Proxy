const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use('/:gameId', express.static('gameId'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const port = 3002;

app.listen(port, () => {
  console.log(`Listening on ${port}`);
})