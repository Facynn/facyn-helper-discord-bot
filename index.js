// Episode #3 - Facyn

const { Client, GatewayIntentBits, Collection } = require('discord.js');
const { token } = require('./config/config');
const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildPresences,
        GatewayIntentBits.GuildMembers,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.GuildVoiceStates,
        GatewayIntentBits.GuildMessageReactions,
        GatewayIntentBits.GuildEmojisAndStickers
    ]
})

const fs = require('fs');
const path = require('path');

client.commands = new Collection();
client.commandsArray = [];

const functions = fs.readdirSync(path.join(__dirname, './functions'));
for (const functionFolder of functions) {
    const functionsFiles = fs
    .readdirSync(path.join(__dirname, './functions', functionFolder))
    .filter(file => file.endsWith('.js'));
    for (const functionFile of functionsFiles) {
        require(`./functions/${functionFolder}/${functionFile}`)(client)
    }
}

client.handleEvents();
client.handleCommands();

client.login(token)