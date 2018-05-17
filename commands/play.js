const Command = require('./command.js');
const YoutubeStream = require('ytdl-core');

let dispatcher = null;

module.exports = class Play extends Command {

    static match(message){
        return message.content.startsWith('!play');
    }

    static action(message){
        try {
            let voiceChannel =
            message.guild.channels
            .filter(function(channel) { return channel.id === message.author.lastMessage.member.voiceChannelID })
            .first();

            let args = message.content.split(' ');
            voiceChannel
                .join()
                .then(connection => {
                    let stream = YoutubeStream(args[1], { filter : 'audioonly' })
                    dispatcher = connection.playStream(stream).once('end', function(){
                        console.log('Musique fini');
                    });
                }).catch(console.error);

        } catch (e) {
            message.reply('Il faut être connecté à un salon vocal pour demander au bot de jouer quelque chose !');
        }
    }

    static closeStream(message){
        dispatcher.end();

    }


}
