const { Client, Collection } = require('discord.js');
const colors = require('colors');

const client = new Client({
    intents: 513
});

client.commands = new Collection();
client.aliases = new Collection();
client.interactions = new Collection();

['command', 'event', 'interaction'].forEach(handler => {
    require(`./src/handlers/${handler}`)(client)
});

client.login();