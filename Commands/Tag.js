const { MessageEmbed } = require("discord.js");

module.exports.execute = async (client, message, args, ayar, emoji) => {
message.channel.send(ayar.tag)
}
module.exports.configuration = {
    name: "asttag",
    aliases: ["Tag","tag"],
    usage: "tag ",
    description: "Ayarlanan tagı gösterir."
};