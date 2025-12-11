// backend/bot.js
const { Telegraf } = require('telegraf');
require('dotenv').config();

const bot = new Telegraf(process.env.BOT_TOKEN);

// Вот эта часть была у тебя, но без const bot = ...
bot.start((ctx) => {
  ctx.reply('Программа лояльности Benedict', {
    reply_markup: {
      inline_keyboard: [[
        { text: 'Открыть карту', web_app: { url: process.env.WEB_APP_URL } }
      ]]
    }
  });
});

// если потом захочешь другие команды
bot.command('card', (ctx) => {
  ctx.reply('Ваша карта лояльности', {
    reply_markup: {
      inline_keyboard: [[
        { text: 'Открыть', web_app: { url: process.env.WEB_APP_URL } }
      ]]
    }
  });
});

bot.launch();
console.log('Bot запущен и слушает сообщения');

process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));

module.exports = bot; // на всякий случай, если где-то импортируем