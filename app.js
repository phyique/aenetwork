const express = require('express');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const passport = require('passport');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const {
  getShows, postShows, putShows, deleteShows,
} = require('./controller/shows');

require('./lib/auth');

const app = express();

mongoose.connect('mongodb+srv://blizz:goalapp@goalcluster0-7demq.mongodb.net/', {
  dbName: 'trail_balance',
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
/* eslint-disable no-console */
mongoose.connection.on('connected', () => console.log('Mongo Connected'));
mongoose.connection.on('error', () => console.log('Connection failed with - '));

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: false }));

const routes = require('./routes/auth');

app.use('/', routes);

const auth = passport.authenticate('jwt', { session: false });

app.route('/').get(auth, (req, res) => (res.json({ message: 'Hello, World' })));
app.route('/api/shows')
  .get(auth, getShows)
  .post(auth, postShows)
  .put(auth, putShows)
  .delete(auth, deleteShows);

app.route('/api/shows/:id')
  .put(auth, putShows)
  .delete(auth, deleteShows);

app.use(({ method, url }, res, next) => {
  next(res.status(405).send(`${method} is not allowed on path ${url}`));
});
module.exports = app;
