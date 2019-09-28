/*
 * Created by Sigurður Þangbrandurson-Coopers
 * I can't file for copyright but just please don't copy, thank you.
 */

const { Client, RichEmbed } = require('discord.js');
const fs = require('fs');
const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}! Ð`);
});

client.on('message', msg => {

});

client.on('message', message => {
    if (!message.guild) return;

    if (message.member.roles.has('625052070709428243') || message.member.roles.has('625052209314398250') || message.member.roles.has('625051419556446239')) {
        if (message.content.startsWith('!kick')) {
            const user = message.mentions.users.first();
            if (user) {
                const member = message.guild.member(user);
                if (member) {
                    member.kick('Valfrjáls ástæða sem birtist í endurskoðunarferðum').then(() => {
                        message.reply(`Tókst vel ${user.tag}`);
                    }).catch(err => {
                        message.reply('Ég gat ekki sparkað í félagann');
                        console.error(err);
                    });
                } else {

                    message.reply('Þessi notandi er ekki í þessu guild!');
                }
            } else {
                message.reply('Þú minntist ekki á notandann að sparka!');
            }
        }
    } else {
        message.reply('Þú minntist ekki á notandann að sparka!');
    }
});

client.on('guildMemberAdd', mbm => {
    const channel = mbm.guild.channels.find(ch => ch.name === 'welcome-chat');

    if (!channel) return;

    mbm.addRole('625052261470568468');
    channel.send(`Welcome, @${mbm}`);
});

client.on('message', msg => {

    fs.appendFile("log.txt", `\n ${msg.author.username}: ${msg.content}`, (err) => {
        if (err) console.log(err);
    });

    if (msg.content.includes('!') && !msg.content.startsWith('!kick')) {
        if (msg.content.indexOf('!') === 0) {
            switch (msg.content) { 

                case '!funky':
                    msg.channel.sendMessage('no, trying this was a major mistake.');
                    break;

                case '!ping':
                    msg.reply('pong! Whoo! I win! I\'m the best at Pong!');
                    break;
                case '!promote':
                    const toSay = ['Lenin has gone live! Be sure to tune in! https://www.twitch.tv/vladimirlen1n', 'Come watch the stream! https://www.twitch.tv/vladimirlen1n', 'Go watch the stream, or I\'ll eat your liver. https://www.twitch.tv/vladimirlen1n'];
                    const channel = client.channels.get('625073783706746892');

                    let x = Math.random() * 2;
                    var e = Math.floor(x);
                    console.log(e);

                    switch (e) {
                        case 0:
                            channel.send(toSay[0]);
                            break;
                        case 1:
                            channel.send(toSay[1]);
                            break;
                        case 2:
                            channel.send(toSay[2]);
                            break;
                        default:
                            channel.send('Lenin has gone live! https://www.twitch.tv/vladimirlen1n');
                            break;
                    }
                    break;
                    case '!insult':
                        var curseAr = ['fucking', "bitch-ass", "hecker"];
                        var wordOne = ['boot-licking', 'long-ass', 'bitch-nosed'];
                        var wordTwo = ["cunt", "asshole", "bitch", "shit-head", "lowlife", "subhuman"];
                        var wordNumT = Math.floor(Math.random() * wordTwo - 1);
                        var curseNum = Math.floor(Math.random() * curseAr - 1);
                        var wordNum = Math.floor(Math.random() * wordOne.length - 1);
                        msg.reply(`you ${curseAr[curseNum]} ${wordOne[wordNum]} ${wordTwo[wordNumT]}`);
                        break;

            }
        }
    }
})


//Token
client.login('');
