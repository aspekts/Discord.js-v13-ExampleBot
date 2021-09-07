module.exports = {
    name: 'ping',
    description: 'Check my ping!',
    run: async (client, interaction) => {
        interaction.followUp({
            content: `My ping is \`${client.ws.ping}\`!`
        });
    },
};