const { Client, RichEmbed } = require('discord.js');
const fs = require('fs');
const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {

    fs.appendFile("log.txt", `\n ${msg.author.username}: ${msg.content}`, (err) => {
        if (err) console.log(err);
    });

    if (msg.content.includes('!')) {
        if (msg.content.indexOf('!') === 0) {
            switch (msg.content) { 

                case '!funky':
                    msg.channel.sendMessage('no, trying this was a major mistake.');
                    break;

                case '!ping':
                    msg.reply('pong! Whoo! I win! I\'m the best at Pong!');
                    break;

                default:
                    msg.reply('that isn\'t a command!');
            }
        }
    }
})

//No no words I am not comfortable showing on stream.
const bannedWords = ['cunt', 'nigger', 'nigga', 'faggot', 'faggy', 'fag'];
client.on('message', msg => {
    for (var i = 0, L = bannedWords.length; i < L; i++) {
        let msgToTest = msg.content.toLowerCase().includes(bannedWords[i]);
        if (msgToTest) {
            fs.appendFile("curselog.txt", msg.author.username + ' hefur sagt bannað orð: ' + msg.author.username + ': ' + msg.content, (err) => {
                if (err) console.log(err);
            });
            msg.reply('You can\'t say that word!');
            msg.delete();
        }
    }
});
//Token
client.login('NjI1MDQ0OTAyNjczMjUyMzc3.XYZ56g.kysr7oqWQubMZyMcvzhePhoYno4');