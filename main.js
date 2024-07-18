import { Telegraf, Markup } from 'telegraf';
const token = '7097254544:AAEsBL5MOHomKdELR-7yfAFyRooZy71-B_4';
const webAppUrl = 'https://google.com';
const bot = new Telegraf(token);

bot.command('start',(ctx) => {
	ctx.reply(
		"Bienvenue ! Cliquez sur le bouton ci-dessous pour démarrer l'application.",
		Markup.keyboard([
			Markup.button.webApp(
				'Envoyer le message',
				webAppUrl
			)
		])
	)
})
bot.launch();
