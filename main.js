//Define NPM modules
const Discord = require('discord.js');

//Define client
const client = new Discord.Client({
  disableEveryone: true,
  disabledEvents: ['TYPING_START']
});

//Define databases
client.buglist = new Enmap({});

//Import the files
client.config = require('./src/cnf');
require('./src/modules/commands')(client);
require('./src/modules/events')(client);
require('./src/modules/_functions')(client);

//Cache the permissions
for (let i = 0; i < client.config.permLevels.length; i++) {
  let currentlevel = client.config.permLevels[i];
  client.levelCache[currentlevel.name] = currentlevel.level;
}

//Login to discord
client.login(process.env.BOT_TOKEN);

//Export the client
module.exports = client;
