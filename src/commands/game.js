exports.run = async (client, message, args, level)
  try {
    if (!args[0])
  
  
  } catch (err) {
    message.channel.send('There was an error!\n' + err).catch();
  },

exports.conf = {
  enabled: true,
  aliases: [],
  guildOnly: false,
  permLevel: 'User'
};

exports.help = {
  name: 'games',
  category: 'General',
  description: 'Gives info on the specified TTS game.',
  usage: 'game <game>'
};
