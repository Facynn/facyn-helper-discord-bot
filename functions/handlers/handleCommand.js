// Episode #2 - Facyn

const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');
const { token } = require('../../config/config');

const fs = require('fs');
const path = require('path');

module.exports = (client) => {
    client.handleCommands = async () => {
        const commandFolders = fs.readdirSync(path.join(__dirname, '../../commands'));
        for (const commandFolder of commandFolders) {
            const commandFiles = fs
            .readdirSync(path.join(__dirname, '../../commands', commandFolder))
            .filter(file => file.endsWith('.js'));

            const { commands, commandsArray } = client;

            for (const commandFile of commandFiles) {
                const command = require(`../../commands/${commandFolder}/${commandFile}`);
                commands.set(command.data.name, command);
                commandsArray.push(command.data.toJSON());
                console.log(`[✅] ${commandsArray.length} comandos cargados.`)
            }
        }

      const clientID = '999863926961475694';
      const guildID = '924544084725608458';
      const rest = new REST({ version: "9" }).setToken(token);
      
      try {
        await rest.put(Routes.applicationGuildCommands(clientID, guildID), {
            body: client.commandsArray
        })
        
        console.log(`[✅] Los comandos **/** se han iniciado correctamente.`)
      } catch (e) {
        console.log(`[functions > handlers > handleCommand] | ${e}`)
      }
    }
}