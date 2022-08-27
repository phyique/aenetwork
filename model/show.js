const mongoose = require('mongoose');
const rand = require('random-key');
const uniqueValidator = require('mongoose-unique-validator');

const { Schema } = mongoose;

const showSchema = new Schema({
  name: { type: String, unique: true, required: true },
  show_id: { type: String, unique: true, default: () => rand.generate(7) },
  homepage: String,
  created_by: [{ name: String }],
  first_air_date: Date,
  episode_run_time: Number,
  language: String,
  status: { type: String, enum: ['Active', 'Ended', 'Hiatus', 'Ongoing', 'Cancelled'] },
  type: String,
  overview: String,
  updated_at: { type: Date, default: Date.now },
});

showSchema.plugin(uniqueValidator);
const showModel = mongoose.model('Show', showSchema);
module.exports = showModel;
