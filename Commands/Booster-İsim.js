const { MessageEmbed } = require("discord.js");
const qdb = require("quick.db");
const db = new qdb.table("ayarlar");

module.exports.execute = async (client, message, args, ayar, emoji) => {
  let embed = new MessageEmbed().setAuthor(message.member.displayName, message.author.avatarURL({dynamic: true})).setFooter("Endless ❤️").setColor(client.randomColor()).setTimestamp();
  if(!ayar.boosterRolu) return message.channel.send("**Roller ayarlanmamış!**").then(x => x.delete({timeout: 5000}));
  if(!message.member.roles.cache.has(ayar.boosterRolu))  
if(!message.member.roles.cache.has(ayar.sahipRolu)) return message.channel.send(embed.setDescription(`İsim komutunu kullanabilmek için herhangi bir yetkiye sahip değilsin.`)).then(x => x.delete({timeout: 5000}));
  let uye = message.member
  if(!uye) return message.channel.send(embed.setDescription("Geçerli bir üye belirtmelisin!")).then(x => x.delete({timeout: 5000}));

let boosternick = args.slice(0).join(' ')
    if(!boosternick) return message.channel.send(embed.setDescription(`\<a:mavibit:784424875032051742> Geçerli bir nick belirtmelisin!`)).then(x => x.delete({timeout: 5000}));
   let yazilacakIsim = `${boosternick}`;

  uye.setNickname(`${yazilacakIsim}`).catch();
  message.channel.send(new MessageEmbed().setColor(client.randomColor()).setTitle(`\<a:mavibit:784424875032051742> Booster Sistemi ")}`).setThumbnail(uye.user.avatarURL({dynamic: true, size: 2048})).setFooter("Endless  ❤️").setTimestamp().setDescription(`\<a:mavibit:784424875032051742> Booster: ${uye}\n\<a:mavibit:784424875032051742> Güncellenen İsim: \`${yazilacakIsim}\``)).catch();
};
module.exports.configuration = {
  name: "bisim",
  aliases: ["bname", "bnick"],
  usage: "bisim [nick]",
  description: "Boosterın nickini değiştirir."
};  