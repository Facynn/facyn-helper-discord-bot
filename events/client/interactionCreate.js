// Episode #4 - Facyn

const { color } = require('../../config/config');

module.exports = {
    name: 'interactionCreate',
    async execute(interaction, client) {
        if(interaction.isChatInputCommand()) {
            const { commands } = client;
            const { commandName } = interaction;
            const command = commands.get(commandName);
            if(!command) return;

            try {
                await command.execute(interaction, client, color)
            } catch (e) {
                console.log(e)
                return await interaction.reply({
                    content: 'No se ha podido ejecutar el comando.',
                    ephemeral: true
                })
            }
        }
    }
}