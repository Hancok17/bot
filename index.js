const { Telegraf } = require('telegraf');
const bot = new Telegraf('6102206407:AAEwnQD1k_YRg3CR5Yla8ikhi9n_yQRYvSQ');
bot.start((ctx) => ctx.reply('Hello!'));

bot.help((ctx) => ctx.reply('Send me a message and I will reply!'));

bot.on('message', (ctx) => {
  ctx.reply('You said: ' + ctx.message.text);
});

bot.launch({
Webhook: {
    port: 8080
  }
});
