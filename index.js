// backend/index.js
require('dotenv').config();
const bot = require('./bot');

// Launch the bot in polling mode (perfect for local testing)
bot.launch()
  .then(() => console.log('Bot is running and listening for messages'))
  .catch(err => console.error('Bot failed to start:', err));

// Graceful stop on Ctrl+C
process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));