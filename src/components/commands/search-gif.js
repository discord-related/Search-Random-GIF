const { SlashCommandBuilder } = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
        .setName("search-gif")
        .setDescription("Search a random GIF for the term provided using Tenor")
        .addStringOption((options) =>
            options
                .setName("term")
                .setDescription("The term you want to search for a GIF")
                .setRequired(true)
        )
        .setDMPermission(false),
    async execute(interaction, client) {
        try {
            const { Search } = require("tenorjs").client({
                Key: client.config.APIKEY,
                Filter: "off",
                Locale: "en_US",
            });

            const term = interaction.options.getString("term");
            const response = await Search.Query(term, "50");

            interaction.reply({
                content: response[Math.floor(Math.random() * 50)].itemurl,
            });
        } catch (error) {
            console.log(error);
            interaction.reply({
                content: "An error occurred, please try again.",
                ephemeral: true,
            });
        }
    },
};