module.exports = {
    name: "interactionCreate",
    async execute(interaction, client) {
        if (interaction.isChatInputCommand()) {
            const command = client.commands.get(interaction.commandName);
            if (!command) return;
            try {
                command.execute(interaction, client);
            } catch (error) {
                console.log(error);
            }
        }
    }
};