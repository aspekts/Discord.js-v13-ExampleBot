module.exports = {
    name: 'ping',
    description: 'My ping.',
    run: async (client, interaction, args) => {
        await interaction.reply({
            content: 'My ping is `' + client.ws.ping + '`!'
        })
    }
}