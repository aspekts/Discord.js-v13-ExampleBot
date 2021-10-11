module.exports = (client, guild) => {
	console.log(`Removed from guild! Name: ${guild.name} Size: ${guild.memberCount} New Guild Count: ${client.guilds.cache.size}`);
};