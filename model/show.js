const mongoose = require('mongoose');
const rand = require('random-key');

const { Schema } = mongoose;

const showSchema = new Schema({
  name: String,
  show_id: { type: String, unique: true, default: () => rand.generate(7) },
  homepage: String,
  created_by: [{ name: String }],
  first_air_date: Date,
  last_air_date: Date,
  episode_run_time: Number,
  language: String,
  seasons: [{
    air_date: Date, episode_count: Number, name: String, description: String, season_number: Number,
  }],
  status: { type: String, enum: ['Active', 'Ended', 'Hiatus', 'Ongoing', 'Cancelled'] },
  type: String,
  overview: String,
  updated_at: { type: Date, default: Date.now },
});
const showModel = mongoose.model('Show', showSchema);
module.exports = showModel;
