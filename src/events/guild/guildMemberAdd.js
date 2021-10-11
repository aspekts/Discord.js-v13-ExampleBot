module.exports = (client, guild) => {
	guild.systemChannel.send("Hello, thank you for adding me to your server!");
	console.log(`New guild joined! Name: ${guild.name} Size: ${guild.memberCount} New Guild Count: ${client.guilds.cache.size}`);
};