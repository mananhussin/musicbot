const { Client, Collection } = require('discord.js');
const { ErelaClient } = require('erela.js');
const Util = require('./Util.js');

module.exports = class ExpressClient extends Client {

    constructor(options = {}) {

        super({
            disableMentions: 'everyone'
        });

        this.nodes = [
            {
                host: options.host,
                port: 80,
                password: options.hostpassw
            }
        ]

        this.validate(options);

        this.commands = new Collection();

        this.aliases = new Collection();

        this.utils = new Util(this);

        this.once('ready', () => {
            console.log("[Express] Client started as " + this.user.tag + "!");
            this.music = new ErelaClient(this, this.nodes);
            this.music.on('nodeConnect', () => console.log("[Erela.js] Node connected"));
            this.music.on('nodeError', (error) => console.log("[Erela.js] " + error));
            this.music.on('trackStart', (player, track) => player.textChannel.send("Now playing: **" + track.title + "**"));
            this.music.on("queueEnd", player => {
				this.music.players.destroy(player.guild.id);
            });
            this.user.setActivity(`${this.prefix}help | ${this.prefix}invite`);
            this.setInterval(() => {
                this.user.setActivity(`${options.prefix}help | ${options.prefix}invite | ${this.guilds.cache.size.toLocaleString()} servers`);
            }, (10 * 1000));
        });

        this.on('message', async (message) => {
			const mentionRegex = RegExp(`^<@!${this.user.id}>$`);
			const mentionRegexPrefix = RegExp(`^<@!${this.user.id}> `);

			if (!message.guild || message.author.bot) return;

			if (message.content.match(mentionRegex)) message.channel.send(`My prefix is \`${this.prefix}\`.`);

			const prefix = message.content.match(mentionRegexPrefix) ?
				message.content.match(mentionRegexPrefix)[0] : this.prefix;
			
			if(!message.content.startsWith(prefix)) return;

			const [cmd, ...args] = message.content.slice(prefix.length).trim().split(/ +/g);

			const command = this.commands.get(cmd.toLowerCase()) || this.commands.get(this.aliases.get(cmd.toLowerCase()));
			if (command) {
				command.run(message, args);
			}
		});
    }

    validate(options) {
		if (typeof options !== 'object') throw new TypeError('Options should be a type of Object.');

		if (!options.token) throw new Error('You must pass the token for the client.');
		this.token = options.token;

		if (!options.prefix) throw new Error('You must pass a prefix for the client.');
		if (typeof options.prefix !== 'string') throw new TypeError('Prefix should be a type of String.');
		this.prefix = options.prefix;

        this.owners = options.owners;
        
        if (!options.host || !options.hostpassw) throw new Error('You must pass a host for the client.');
        if(typeof options.host !== 'string') throw new Error('Host should be a type of String');
        this.host = options.host;
        if(typeof options.hostpassw !== 'string') throw new Error('Host password should be a type of String');
        this.hostpassw = options.hostpassw;
	}

	async start(token = this.token) {
		this.utils.loadCommands();
		super.login(token);
	}
}