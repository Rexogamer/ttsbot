exports.run = async (client, message, args, level)
  try { 
    const attachment = new Attachment('https://media.discordapp.net/attachments/448533084338520087/615666520214863943/Rexo_with_popcrons_owo.png')
    message.channel.send('*I stole the popcrons!*' + attachment)
  } catch (err) {
    message.channel.send('I couldn\'t steal the popcrons ;-;\n' + err).catch();
  },

exports.conf = {
  enabled: true,
  aliases: ['popcron'],
  guildOnly: false,
  permLevel: 'User'
};

exports.help = {
  name: 'popcorn',
  category: 'Fun',
  description: 'Steals Dersa\'s popcorn!',
  usage: 'popcorn'
};
