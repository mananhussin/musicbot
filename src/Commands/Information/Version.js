const Command = require('../../Structures/Command');
const version = require('../../../package.json').version;

module.exports = class extends Command {
    constructor(...args) {
        super(...args, {
            aliases: ['ver'],
            description: "Shows more informations about the bot",
            category: "Information"
        });
    }

    async run(message) {
        let verMsg = "__**Express Source " + version +"**__\n";
        verMsg += "This is a bot entirely made in Discord.js and other libraries.\n";
        verMsg += "The Music service is made using Erela.js and Lavalink.\n";
        verMsg += "I really want to thank ImCactus for some of his code.\n";
        verMsg += "The bot is made with heart by <@480987124405895168>\n";
        verMsg += "__Support Discord server:__ https://discord.gg/HKqb6V7\n";
        verMsg += "__GitHub repository:__ https://github.com/ItzLightyHD/Express"
        return message.channel.send(verMsg);
    }
}
