const Command = require('./command.js');

module.exports = class Leave extends Command {

    static match(message){
        return message.content.startsWith('!leave');
    }

    static action(message){
        try {
            let voiceChannel = message.guild.channels
            .filter(function(channel) { return channel.id === message.author.lastMessage.member.voiceChannelID })
            .first();

            voiceChannel.leave();
        } catch (e) {
            message.reply('Il faut être connecté au salon vocal pour faire partir le bot !');
        }

    }

}
