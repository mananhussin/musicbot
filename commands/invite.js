exports.run = (client, message, args, ops) => {
	message.reply("Sending the invite in your DMs...");
	message.author.send("https://discord.com/api/oauth2/authorize?client_id=" + client.user.id + "&permissions=8&scope=bot");
}
