// const ShowModel = require('../model/show');
const passport = require('passport');

const getShows = (req, res) => {
  passport.authenticate('jwt', { session: false }, (error, token) => {

  })(req, res);
  return res.json({ message: 'get show' });
};

const postShows = (req, res) => {
  return res.json({ message: 'post show' });
};

const putShows = async (req, res) => {
  return res.json({ message: 'put show' });
};

const deleteShows = async (req, res) => {
  return res.json({ message: 'delete show' });
};

module.exports = {
  getShows, postShows, putShows, deleteShows,
};
