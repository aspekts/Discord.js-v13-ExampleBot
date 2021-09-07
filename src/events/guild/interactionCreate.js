module.exports = (client, interaction) => {
    if (interaction.isCommand()) {
        const cmd = client.interactions.get(interaction.commandName);

        const args = [];

        if (!cmd) return interaction.reply({
            content: "Something Went Wrong"
        });

        cmd.run(client, interaction, args);
    }

    if (interaction.isContextMenu()) {
        await interaction.deferReply({
            ephemeral: false
        });

        const command = client.interactions.get(interaction.commandName);
        if (command) command.run(client, interaction);
    }
}