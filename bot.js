// backend/bot.js
const { Telegraf } = require('telegraf');
require('dotenv').config();

const bot = new Telegraf(process.env.BOT_TOKEN);

// Start command – opens the mini app
bot.start((ctx) => {
  ctx.reply('Welcome to Benedict Loyalty!', {
    reply_markup: {
      keyboard: [
        [
          {
            text: 'Open Loyalty App',
            web_app: { url: process.env.WEB_APP_URL || 'https://google.com' }
          }
        ]
      ],
      resize_keyboard: true,
      one_time_keyboard: false
    }
  });
});

// Extra commands (optional but nice)
bot.command('balance', (ctx) => ctx.reply('Open the app to see your points!'));
bot.command('help', (ctx) => ctx.reply('Press the button below to launch the loyalty app.'));

// This is the most important line — export the bot with launch method available
module.exports = bot;