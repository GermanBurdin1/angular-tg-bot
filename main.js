import { Telegraf, Markup } from 'telegraf';
import { message } from 'telegraf/filters';

const token = '7097254544:AAEsBL5MOHomKdELR-7yfAFyRooZy71-B_4';
const webAppUrl = 'https://angular-tg-app-7ad0b.web.app';
const bot = new Telegraf(token);

bot.command('start',(ctx) => {
	ctx.reply(
		"Bienvenue ! Cliquez sur le bouton ci-dessous pour démarrer l'application.",
		Markup.keyboard([
			Markup.button.webApp(
				'Envoyer le message',
				`${webAppUrl}/feedback`
			)
		])
	)
})

bot.on(message("web_app_data"), async ctx => {
	const data = ctx.webAppData.data.json()
	ctx.reply(`Votre message: ${data?.feedback}` ?? 'empty message')
});
bot.launch();
