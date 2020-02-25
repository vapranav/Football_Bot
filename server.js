require('dotenv').config();
const Discord = require('discord.js');
const config = require('./config.json');
const bot = new Discord.Client();
const request = require('request');
 
const options = {
  url: 'https://api.football-data.org/v2/matches',
  headers: {
    'X-Auth-Token': '79a94103c1b94efdbd9dae86141c5c8c'
  }
};

var i,s;

bot.on('ready', () => {
  console.info(`Logged in as ${bot.user.tag}!`);
});

bot.on('message', message => {
	if (message.content === '!pl') {
    function callback(error, response, body) {
      if (!error && response.statusCode == 200) {
        const info = JSON.parse(body);
        const count = info.count;
        console.log(info);
        for(i = 0; i<count; i++) {
            if(info.matches[i].competition.name == 'Premier League') {
                s = info.matches[i].homeTeam.name + ' ' + info.matches[i].score.fullTime.homeTeam + ' - ' + info.matches[i].score.fullTime.awayTeam + ' ' + info.matches[i].awayTeam.name;
                message.channel.send(s);
            }
        }
      }
    }
     request(options, callback);
  }
});
bot.on('message', message => {
	if (message.content === '!seriea') {
    function callback(error, response, body) {
      if (!error && response.statusCode == 200) {
        const info = JSON.parse(body);
        const count = info.count;
        console.log(info);
        for(i = 0; i<count; i++) {
            if(info.matches[i].competition.name == 'Serie A') {
                s = info.matches[i].homeTeam.name + ' ' + info.matches[i].score.fullTime.homeTeam + ' - ' + info.matches[i].score.fullTime.awayTeam + ' ' + info.matches[i].awayTeam.name;
                message.channel.send(s);
            }
        }
      }
    }
     request(options, callback);
  }
});
bot.on('message', message => {
	if (message.content === '!laliga') {
    function callback(error, response, body) {
      if (!error && response.statusCode == 200) {
        const info = JSON.parse(body);
        const count = info.count;
        console.log(info);
        for(i = 0; i<count; i++) {
            if(info.matches[i].competition.name == 'La Liga') {
                s = info.matches[i].homeTeam.name + ' ' + info.matches[i].score.fullTime.homeTeam + ' - ' + info.matches[i].score.fullTime.awayTeam + ' ' + info.matches[i].awayTeam.name;
                message.channel.send(s);
            }
        }
      }
    }
     request(options, callback);
  }
});
bot.on('message', message => {
	if (message.content === '!bundesliga') {
    function callback(error, response, body) {
      if (!error && response.statusCode == 200) {
        const info = JSON.parse(body);
        const count = info.count;
        console.log(info);
        for(i = 0; i<count; i++) {
            if(info.matches[i].competition.name == 'Bundesliga') {
                s = info.matches[i].homeTeam.name + ' ' + info.matches[i].score.fullTime.homeTeam + ' - ' + info.matches[i].score.fullTime.awayTeam + ' ' + info.matches[i].awayTeam.name;
                message.channel.send(s);
            }
        }
      }
    }
     request(options, callback);
  }
});

bot.login(config.token);


















