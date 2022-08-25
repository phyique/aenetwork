const express = require('express');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const { getShows, postShows, putShows, deleteShows } = require('./controller/shows');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.route('/').get((req, res) => (res.json({ message: 'Hello, World' })));
app.route('/api/shows')
    .get(getShows)
    .post(postShows)
    .put(putShows)
    .delete(deleteShows)

app.use(({method, url}, res, next) => {
    next(res.status(405).send(`${method} is not allowed on path ${url}`))
})
module.exports = app;
