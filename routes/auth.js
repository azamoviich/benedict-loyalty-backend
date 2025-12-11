const express = require('express');
const router = express.Router();
const User = require('../models/User');
const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI);

// Проверка + регистрация (без SMS)
router.post('/register', async (req, res) => {
  const { telegramId, phone, name, surname, birthdate } = req.body;

  let user = await User.findOne({ telegramId });
  if (user) {
    return res.json({ exists: true, user });
  }

  user = new User({
    telegramId,
    phone,
    name,
    surname: birthdate && birthdate !== '' ? birthdate : undefined,
  });

  await user.save();
  res.json({ exists: false, user });
});

// Получить пользователя
router.post('/me', async (req, res) => {
  const { telegramId } = req.body;
  const user = await User.findOne({ telegramId });
  res.json({ user });
});

module.exports = router;