const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const { Schema } = mongoose;

const UserSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: { type: String, required: true },
});

UserSchema.pre('save', async function save(next) {
  // eslint-disable-next-line no-unused-vars
  const user = this;
  const hash = await bcrypt.hash(this.password, 10);

  this.password = hash;
  next();
});

UserSchema.methods.isValidPassword = async function compare(password) {
  const user = this;
  const compare = await bcrypt.compare(password, user.password);

  return compare;
};
const UserModel = mongoose.model('user', UserSchema);
module.exports = UserModel;
