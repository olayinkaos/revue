// ./server.js
/*
* Initialise Express
*/
const express = require('express');
const path = require('path');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname)));

/*
* Initialise Pusher
*/
const Pusher = require('pusher');
const pusher = new Pusher({
  appId:'YOUR_PUSHER_APP_ID',
  key:'YOUR_PUSHER_APP_KEY',
  secret:'YOUR_PUSHER_SECRET',
  cluster:'YOUR_CLUSTER'
});

/*
* Define post route for creating new reviews
*/
app.post('/review', (req, res) => {
  pusher.trigger('reviews', 'review_added', {review: req.body});
  res.status(200).send();
});

/*
* Run app
*/
const port = 5000;
app.listen(port, () => { console.log(`App listening on port ${port}!`)});
