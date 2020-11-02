const Discord = require('discord.js');

// Create an instance of a Discord client
const client = new Discord.Client();

/**
 * The ready event is vital, it means that only _after_ this will your bot start reacting to information
 * received from Discord
 */
client.on('ready', () => {
  console.log('I am ready!');
});

// Create an event listener for messages
client.on('message', message => {
  // If the message is "ping"
  if (message.content === 'k! ping') {
    // Send "pong" to the same channel
    message.channel.send('Pong!');
  }
});

// Log our bot in using the token from https://discord.com/developers/applications
client.login('NzYxMjU4NjQwMTk5NjQ3Mjgy.X3X_Ww.upFw58FRtnTkeEj4LeS8aRAxQg');