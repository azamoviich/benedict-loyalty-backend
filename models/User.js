const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  telegramId: { type: String, required: true, unique: true },
  phone: { type: String, required: true },
  name: String,
  surname: String,
  birthdate: Date,
  balance: { type: Number, default: 0 },
  registeredAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('User', userSchema);