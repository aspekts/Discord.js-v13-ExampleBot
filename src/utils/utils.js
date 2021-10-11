const { Guild, TextChannel } = require("discord.js");


/**
 * @param {Guild} guild
 * @param {String} name
 */
function getRoleByName(guild, name) {
	return guild.roles.cache.find((role) => role.name.toLowerCase() === name);
}

/**
   * @param {TextChannel} channel
   */
function canSendEmbeds(channel) {
	return channel.permissionsFor(channel.guild.me).has(["SEND_MESSAGES", "EMBED_LINKS"]);
}
module.exports = {
	getRoleByName,
	canSendEmbeds,
};