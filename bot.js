// backend/bot.js — WEBHOOK VERSION (409 НЕВОЗМОЖЕН)
const { Telegraf } = require('telegraf');
require('dotenv').config();

const bot = new Telegraf(process.env.BOT_TOKEN);

// /start — открывает webapp
bot.start((ctx) => {
  ctx.reply('Программа лояльности Benedict', {
    reply_markup: {
      inline_keyboard: [[
        { text: 'Открыть карту', web_app: { url: process.env.WEB_APP_URL } }
      ]]
    }
  });
});

// Обязательно экспортируем бота для webhook
module.exports = bot;