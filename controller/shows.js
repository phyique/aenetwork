const ShowModel = require('../model/show');

const getShows = async (req, res) => {
  try {
    const data = await ShowModel.find({}).lean();
    return res.json({ data, isSuccessful: true });
  } catch ({ message }) {
    return res.status(500).json({ message });
  }
};

const postShows = async (req, res) => {
  const { body: { name, homepage, first_air_date } } = req;
  try {
    const doc = new ShowModel({
      name,
      homepage,
      first_air_date,
    });
    return doc.save((err) => {
      if (err) return res.status(500).send(err);
      return res.json({ success: true });
    });
  } catch ({ message }) {
    return res.status(500).json({ message });
  }
};

const putShows = async (req, res) => {
  const {
    body: {
      show_id, name, homepage, seasons, overview,
    }, params: { id },
  } = req;
  try {
    const data = await ShowModel.findOneAndUpdate({ show_id: show_id || id }, {
      name, homepage, seasons, overview,
    }, { upsert: true }).lean();
    return res.json({ data, isSuccessful: true });
  } catch ({ message }) {
    return res.status(500).json({ message });
  }
};

const deleteShows = async (req, res) => {
  const { body: { show_id }, params: { id } } = req;
  try {
    const data = await ShowModel.deleteOne({ show_id: id || show_id });
    return res.status(200).json({ data, isSuccessful: true });
  } catch ({ message }) {
    return res.status(500).json({ message });
  }
};

module.exports = {
  getShows, postShows, putShows, deleteShows,
};
