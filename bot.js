// backend/bot.js — только это
bot.start((ctx) => {
  ctx.reply('Программа лояльности Benedict', {
    reply_markup: {
      inline_keyboard: [[
        { text: 'Открыть карту', web_app: { url: process.env.WEB_APP_URL } }
      ]]
    }
  });
});