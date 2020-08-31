exports.run = (client, message, args, ops) => {
    let verMsg = "__**Express Classic Source**__\n";
        verMsg += client.user.username + " is entirely made in Discord.js and other libraries.\n";
        verMsg += "__GitHub repository:__ https://github.com/ItzLightyHD/Express/tree/classic\n";
        verMsg += "__Heroku Deploy:__ https://heroku.com/deploy?template=https://github.com/ItzLightyHD/Express/tree/classic";
        return message.channel.send(verMsg);
}
