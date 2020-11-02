client.on('message', message => {
  if (message.channel.type != 'text' || message.author.bot || !message.startsWith('k!'))
    return;

  if (message.content === 'k! ping') {
    message.channel.send('🏓Pong!');
  }
});