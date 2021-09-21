let slash = [];
const {
    readdirSync
} = require("fs");
const ascii = require("ascii-table");

const table = new ascii("Slash Commands");
table.setHeading("Slash Commands", "Status");

module.exports = (client) => {
    readdirSync("./src/interactions/").forEach(dir => {
        const interactions = readdirSync(`./src/interactions/${dir}/`).filter(file => file.endsWith(".js"));

        for (let file of interactions) {
            let pull = require(`../interactions/${dir}/${file}`);

            if (pull.name) {
                client.interactions.set(pull.name, pull);
                if (["MESSAGE", "USER"].includes(file.type)) delete file.description;
                /*  Context menus use the message and user type, but dont use a description unlike slash commands, which use the CHAT_INPUT type, and has a description. Be sure to decipher between the two.
                    See: https://discord.js.org/#/docs/main/stable/typedef/ApplicationCommandType
                */
                slash.push(pull);
                table.addRow(file, '✔ Ready');
            } else {
                table.addRow(file, `Missing a help.name, or help.name is not a string.`);
                continue;
            }

        }
    });

    console.log(table.toString().cyan);

    client.on("ready", async () => {
        await client.guilds.cache.get("849979798952738847").commands.set(slash);

        /* To register to every server your bot is in do: 
        await client.application.commands.set(slash);*/
    })
}