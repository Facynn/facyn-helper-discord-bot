// Episode #4 - Facyn

const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
    .setName('example')
    .setDescription('Ejemplo'),
    async execute(interaction, client, color) {
        return await interaction.reply({
            embeds: [
                new EmbedBuilder()
                .setDescription(`example command`)
                .setColor(color)
            ]
        })
    }
}