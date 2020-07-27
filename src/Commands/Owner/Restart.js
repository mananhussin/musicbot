const Command = require('../../Structures/Command');
const config = require('../../../config');
const ExpressClient = require('../../Structures/ExpressClient');
const newClient = new ExpressClient(config);

module.exports = class extends Command {
    constructor(...args) {
        super(...args, {
            description: "Restart the bot",
            category: "Owner"
        });
    }

    async run(message) {
        if (!this.client.owners.includes(message.author.id)) return message.channel.send("Only bot owners may do this!");
        const msg = await message.channel.send("*Restarting in 5 seconds, the bot may take a while to restart...*");
        setTimeout(() => {
            msg.delete()
            .then(this.client.destroy())
            .then(newClient.start());
        }, 5000);
    }
}