// Episode #2 - Facyn

const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
    .setName('ping')
    .setDescription('Devuelve información sobre la latencia. (ms)'),
    async execute(interaction, client, color) {
        await interaction.deferReply({
            fetchReply: true
        })

        await interaction.editReply({
            embeds: [
                new EmbedBuilder()
                .setDescription(`[💓] Latencia: ${client.ws.ping}ms`)
                .setColor(color)
            ]
        })
    }
}