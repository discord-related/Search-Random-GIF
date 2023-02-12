const { Client, Collection } = require("discord.js");

const client = new Client({
    intents: [],
});

client.config = require("./config.json");
console.clear();

const { loadCommands } = require("./src/handlers/commandHandler.js");
const { loadEvents } = require("./src/handlers/eventHandler.js");

client.commands = new Collection();
client.events = new Collection();

loadEvents(client);

client.login(client.config.TOKEN).then(async () => {
    await loadCommands(client);
});