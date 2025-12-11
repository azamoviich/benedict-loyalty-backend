require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bot = require('./bot');

const app = express();
app.use(express.json());

// MongoDB (если не подключается — просто закомментируй строку ниже)
mongoose.connect(process.env.MONGODB_URI).then(() => console.log('MongoDB connected')).catch(() => console.log('MongoDB skipped'));

// Webhook endpoint для Telegram
app.use(bot.webhookCallback('/webhook'));

// Главная страница
app.get('/', (req, res) => res.send('Benedict Backend — webhook mode'));

const PORT = process.env.PORT || 3000;
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`Webhook set: ${process.env.RAILWAY_STATIC_URL}/webhook`);
});