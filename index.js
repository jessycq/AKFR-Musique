const Discord = require('discord.js');
const bot = new Discord.Client();
const Play = require('./commands/play.js');
const Leave = require('./commands/leave.js');
const Stop = require('./commands/stop.js');

bot.on('ready', function(){
    // bot.user.setAvatar('./min_image.png').catch(console.error)
    bot.user.setActivity('Aura Kingdom FR').catch(console.error)
});

bot.on('message', function(message){
    let commandUsed = Play.parse(message) ||
                      Leave.parse(message) ||
                      Stop.parse(message);
});


bot.login('NDQ0OTI0MDUzMjQxODU2MDEw.DdjGuA.xAk3seW2xfCpqkiO9INB6qZQkBU');
