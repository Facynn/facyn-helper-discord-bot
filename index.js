const { Client, GatewayIntentBits } = require('discord.js');
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

client.on('ready', () => {
    console.log(`> ${client.user.tag} ready!`)
})

client.login(token)