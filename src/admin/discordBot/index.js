require('dotenv').config(); // load environment variables from .env file
const Discord = require('discord.js');

// create a new client instance
const client = new Discord.Client();

// bot ready event handler
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

// log the bot in with your Discord bot token
client.login(process.env.DISCORD_BOT_TOKEN);