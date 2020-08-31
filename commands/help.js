const prefix = process.env.PREFIX;
const Discord = require('discord.js');

exports.run = (client, message, args, ops) => {
  helpMsg = new Discord.MessageEmbed()
  .setTitle(client.user.username)
  .setDescription("Thank you for using **" + client.user.username + "**, here are all the commands.\nIf you have an issue with a command, report it creating an issue on our GitHub (https://github.com/ItzLightyHD/Express)")
  .addField("🔊 Music", "`play`, `leave`, `pause`, `resume`, `search`, `skip`, `musiclink`, `volume`")
  .addField("👮‍ Moderation", "`clear` (or `purge`), `ban`, `kick`, `nick`, `mute`, `unmute`, `whois`, `destroy`")
  .addField("🔥 Fun and Misc", "`help`, `invite`, `mcstatus`, `mcskin` (or `skin`), `8ball`, `meme`, `mcleaks`, `ping`")
  .addField("🚀 Utility", "`mail`, `covid19`, `report`, `say`")
  .setColor('RANDOM')
  message.channel.send(helpMsg);
}
