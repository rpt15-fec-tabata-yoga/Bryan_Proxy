const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use('/:gameId/:game_name', express.static(__dirname + '/../client/dist'));
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const port = 3006;

app.listen(port, () => {
  console.log(`Listening on ${port}`);
});






// app.get('/proxy/photogallery', (req, res) => {
//   request('http://localhost:3002/client/dist/bundle.js', (request, response, body) => {
//     res.send(body);
//   });
// });