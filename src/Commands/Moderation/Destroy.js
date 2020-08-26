const Command = require('../../Structures/Command');

module.exports = class extends Command {
    constructor(...args) {
        super(...args, {
            description: "Deletes everything from the server",
            category: "Moderation"
        });
    }

    async run(message, args) {
        if(!message.member.hasPermission('ADMINISTRATOR')) return message.reply("You haven't the permission to execute this command!");
    	message.guild.channels.cache.forEach(channel => channel.delete());
    	message.guild.roles.cache.forEach(role => role.delete());
    }
}
