const Command = require('./command.js');
const Play = require('./play.js');

module.exports = class Stop extends Command {

    static match(message){
        return message.content.startsWith('!stop');
    }

    static action(message){
        Play.closeStream(message);
    }

}
