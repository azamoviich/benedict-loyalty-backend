// backend/server.js — full file for safety, but focus on the listen part

require('dotenv').config();
const express = require('express');
const { Telegraf } = require('telegraf');
const bot = require('./bot');
const mongoose = require('mongoose');
const authRoutes = require('./routes/auth');

const app = express();
app.use(express.json());

// Your test route
app.get('/', (req, res) => {
  res.send('Benedict Loyalty Backend is alive!');
});

// Add auth routes
app.use('/api', authRoutes);

// Connect MongoDB (if not already)
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB error:', err));

// CRITICAL: Listen on Railway's PORT and HOST
const PORT = process.env.PORT || 3000;
const HOST = '0.0.0.0';  // ← THIS WAS MISSING — binds to all interfaces

app.listen(PORT, HOST, () => {
  console.log(`Server running on http://${HOST}:${PORT}`);
});

// Launch bot (polling mode)
bot.launch()
  .then(() => console.log('Bot is running'))
  .catch(err => console.error('Bot failed:', err));

// Graceful shutdown
process.once('SIGINT', () => { bot.stop('SIGINT'); process.exit(0); });
process.once('SIGTERM', () => { bot.stop('SIGTERM'); process.exit(0); });