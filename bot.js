require('dotenv').config()

const Discord = require('discord.js')
const client = new Discord.Client({
    partials: ['MESSAGE']
});

const BOT_PREFIX = '!';
const MOD_ME_COMMAND = 'mod-me';

client.on('ready', () => {
    console.log('Our bot is ready to go')
})

client.on('messageDelete', msg => {
    msg.channel.send('Stop Deleting messages')
})

client.on('message', msg => {
    if(msg.content === 'I love Your server'){
        // msg.react add an emoji to message
        msg.react('❤');
    }
    if(msg.content === `${BOT_PREFIX}${MOD_ME_COMMAND}`){
        modUser(msg.member);
        // msg.channel.send('Hello');
        // msg.reply("Hi!");
    }
})

function modUser(member) {
    member.roles.add('920249693362085888');
}

client.login(process.env.BOT_TOKEN)