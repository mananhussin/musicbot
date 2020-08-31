const search = require("yt-search");
const Discord = require("discord.js");

exports.run = (client, message, args, ops) => {
  search(args.join(' '), function(err, res) {
    if (err) message.reply('Sorry, something went wrong.');
    
    let videos = res.videos.slice(0, 10);
    
    let resp = '';
    for(var i in videos) {
      resp += `**[${parseInt(i)+1}]:** \`${videos[i].title}\`\n`;
    }
    
    const musicEmbed = new Discord.MessageEmbed()
    .setAuthor("Song selection", message.author.displayAvatarUrl)
    .setDescription(resp)
    .setFooter("Choose a number between 1-" + videos.length)
    .setColor("RANDOM");
    message.channel.send(musicEmbed);
    
    const filter = m => !isNaN(m.content) && m.content < videos.length+1 && m.content > 0;
    const collector = message.channel.createMessageCollector(filter);
    collector.videos = videos;
    collector.once('collect', function(m) {
      let commandFile = require("./play.js");
      commandFile.run(client, message, [this.videos[parseInt(m.content)-1].url], ops);
    });
  });
}
