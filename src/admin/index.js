const Discord = require('discord.js');
const { prefix, token } = require('./utils/config');

const client = new Discord.Client();

client.once('ready', () => {
  console.log('Bot is ready!');
});

client.on('message', (message) => {
  // Your code here
});

client.login(token);
