const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  telefone: {
    type: Number,
    required: true,
  },
  nif: {
    type: Number,
    required: true,
  },
  morada: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    enum: ['Admin', 'User', 'Restaurant'],
    default: 'User'
  }
});


userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next();
  this.password = await bcrypt.hash(this.password, 12);
  next();
});

const User = mongoose.model('User', userSchema);

module.exports = User;
