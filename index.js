require("dotenv").config();
const BotClient = require("./src/structures/BotClient");
const client = new BotClient({
	intents: 513,
});
client.setup();
