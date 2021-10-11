const {
	readdirSync,
} = require("fs");
const ascii = require("ascii-table");

const table = new ascii("Commands");
table.setHeading("Commands", "Status");

module.exports = (client) => {
	readdirSync("./src/commands/").forEach((dir) => {
		const commands = readdirSync(`./src/commands/${dir}/`).filter((file) => file.endsWith(".js"));
		for (const file of commands) {
			const pull = require(`../commands/${dir}/${file}`);
			if (pull.name) {
				client.commands.set(pull.name, pull);
				table.addRow(file, "✔ Ready");
			}
			else {
				table.addRow(file, "Missing a help.name, or help.name is not a string.");
				continue;
			}
			if (pull.aliases && Array.isArray(pull.aliases)) pull.aliases.forEach((alias) => client.aliases.set(alias, pull.name));
		}
	});
	console.log(table.toString());
};
