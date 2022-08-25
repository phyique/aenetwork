// const ShowModel = require('../model/show');

const getShows = (req, res) => {
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
