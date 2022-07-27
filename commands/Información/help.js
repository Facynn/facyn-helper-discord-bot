// Episode #3 - Facyn

const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');
const fs = require('fs');
const path = require('path');

module.exports = {
    data: new SlashCommandBuilder()
    .setName('help')
    .setDescription('Devuelve una lista de comandos.'),
    async execute(interaction, client, color) {
        let commandsCategoriesArray = new Array();

        const commandsFolders = fs.readdirSync(path.join(__dirname, '../../commands'));
        commandsFolders.forEach((folder) => {
            const commandsFiles = fs
            .readdirSync(path.join(__dirname, '../../commands', folder))
            .filter(file => file.endsWith('.js'));

            const cmdsFiles = commandsFiles.map((cmdFile) => {
                let cmdsFile = require(`../../commands/${folder}/${cmdFile}`);
                return `\`${cmdsFile.data.name}\``;
            })

            let commandsCategoriesObj = new Object()

            commandsCategoriesObj = {
                name: folder,
                value: cmdsFiles.length === 0 ? '`No se han encontrado comandos.`' : `${cmdsFiles.join(', ')}`
            }

            commandsCategoriesArray.push(commandsCategoriesObj);
        })

        return await interaction.reply({
            embeds: [
                new EmbedBuilder()
                .setTitle(`Menú de ayuda | ${interaction.guild.name}`)
                .setColor(color)
                .addFields(commandsCategoriesArray)
            ]
        })
    }
}