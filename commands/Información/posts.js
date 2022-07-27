// Episode #4 - Facyn

const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');
const { fetchUrl } = require('fetch');

module.exports = {
    data: new SlashCommandBuilder()
    .setName('posts')
    .setDescription('Devuele la lista de todos los blogs de mi página.'),
    async execute(interaction, client, color) {
        fetchUrl('https://www.facyn.xyz/json/posts.json', async function(error, meta, body) {
            let postsDataString = body.toString();
            let postsDataJSON = JSON.parse(postsDataString);
            let embed = new EmbedBuilder()
            .setTitle(`Blogs | ${interaction.guild.name}`)
            .setColor(color)
            postsDataJSON.forEach(post => {
                embed.addFields(
                    {
                        name: post.title,
                        value: `[${post.description}](${post.url}) - \`${post.date}\``
                    }
                )
            })
            return await interaction.reply({ embeds: [embed] })
        })
    }
}